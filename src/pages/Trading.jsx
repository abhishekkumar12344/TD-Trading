import React, { useEffect, useState, useRef, useContext } from "react";
import "../styles/Trading.css";
import DepthChart from "../components/DepthChart";
import { executeOrder } from "../engine/tradingEngine";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Trading() {
  const { user } = useContext(AuthContext);

  const markets = ["BTCUSDT", "ETHUSDT", "BNBUSDT"];
  const [market, setMarket] = useState("BTCUSDT");

  const [livePrice, setLivePrice] = useState("0.00");
  const [orderQty, setOrderQty] = useState(0.01);

  const [orderType, setOrderType] = useState("MARKET"); // MARKET | LIMIT | STOP
  const [limitPrice, setLimitPrice] = useState("");

  const [orderBook, setOrderBook] = useState({ bids: [], asks: [] });
  const [trades, setTrades] = useState([]);

  const [wallet, setWallet] = useState(0);
  const [positions, setPositions] = useState([]);

  const priceSocket = useRef(null);
  const depthSocket = useRef(null);
  const tradeSocket = useRef(null);

  // ==========================================================
  // LOAD USER WALLET & POSITIONS
  // ==========================================================
  const loadUserData = async () => {
    const snap = await getDoc(doc(db, "users", user.uid));
    if (snap.exists()) {
      setWallet(snap.data().balance || 0);
    }

    const posSnap = await getDoc(doc(db, "users", user.uid, "system", "positions"));
    if (posSnap.exists()) {
      setPositions(posSnap.data().open || []);
    }
  };

  useEffect(() => {
    if (user) loadUserData();
  }, [user]);

  // ==========================================================
  // PRICE STREAM (WEBSOCKET)
  // ==========================================================
  const startPriceStream = () => {
    if (priceSocket.current) priceSocket.current.close();

    priceSocket.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${market.toLowerCase()}@ticker`
    );

    priceSocket.current.onmessage = (e) => {
      const d = JSON.parse(e.data);
      setLivePrice(parseFloat(d.c).toFixed(2));
    };
  };

  // ==========================================================
  // DEPTH STREAM (WEBSOCKET)
  // ==========================================================
  const startDepthStream = () => {
    if (depthSocket.current) depthSocket.current.close();

    depthSocket.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${market.toLowerCase()}@depth`
    );

    depthSocket.current.onmessage = (e) => {
      const depth = JSON.parse(e.data);

      const bids = depth.bids.slice(0, 15).map((b) => ({ price: b[0], qty: b[1] }));
      const asks = depth.asks.slice(0, 15).map((a) => ({ price: a[0], qty: a[1] }));

      setOrderBook({ bids, asks });
    };
  };

  // ==========================================================
  // TRADES STREAM (WEBSOCKET)
  // ==========================================================
  const startTradesStream = () => {
    if (tradeSocket.current) tradeSocket.current.close();

    tradeSocket.current = new WebSocket(
      `wss://stream.binance.com:9443/ws/${market.toLowerCase()}@trade`
    );

    tradeSocket.current.onmessage = (e) => {
      const t = JSON.parse(e.data);
      const row = {
        price: parseFloat(t.p).toFixed(2),
        qty: t.q,
        side: t.m ? "SELL" : "BUY",
        time: new Date(t.T).toLocaleTimeString(),
      };

      setTrades((prev) => [row, ...prev.slice(0, 25)]);
    };
  };

  // RUN STREAMS WHEN MARKET CHANGES
  useEffect(() => {
    startPriceStream();
    startDepthStream();
    startTradesStream();
  }, [market]);

  // ==========================================================
  // HANDLE ORDER (BUY / SELL)
  // ==========================================================
  const placeOrder = async (side) => {
    if (!user) return alert("Login required!");

    const res = await executeOrder(
      user.uid,
      market,
      side,
      orderType,
      Number(orderQty),
      Number(limitPrice),
      Number(livePrice)
    );

    if (res.error) return alert(res.error);
    if (res.pending) return alert(res.msg);

    alert(`${side} EXECUTED at $${res.price}`);

    loadUserData(); // reload wallet + positions
  };

  return (
    <div className="ultra-page">

      {/* ===================== MARKET TABS ========================= */}
      <div className="market-tabs">
        {markets.map((m) => (
          <button
            key={m}
            className={m === market ? "tab active" : "tab"}
            onClick={() => setMarket(m)}
          >
            {m.replace("USDT", "")}/USDT
          </button>
        ))}
      </div>

      {/* ===================== MAIN GRID ========================= */}
      <div className="main-grid">

        {/* CHART */}
        <div className="chart card">
          <h3>{market.replace("USDT", "")}/USDT Chart</h3>

          <iframe
            className="chart-frame"
            src={`https://s.tradingview.com/widgetembed/?symbol=BINANCE:${market}&interval=15&theme=dark`}
            height="560"
          />
        </div>

        {/* ORDER BOX */}
        <div className="order-box card">

          <h3>Trading Panel</h3>

          <label>Order Type</label>
          <select onChange={(e) => setOrderType(e.target.value)}>
            <option value="MARKET">Market</option>
            <option value="LIMIT">Limit</option>
            <option value="STOP">Stop</option>
          </select>

          <label>Quantity</label>
          <input type="number" value={orderQty} onChange={(e) => setOrderQty(e.target.value)} />

          {orderType !== "MARKET" && (
            <>
              <label>Limit / Stop Price</label>
              <input type="number" value={limitPrice} onChange={(e) => setLimitPrice(e.target.value)} />
            </>
          )}

          <label>Market Price</label>
          <input disabled value={livePrice} />

          <div className="side-buttons">
            <button className="buy" onClick={() => placeOrder("BUY")}>BUY</button>
            <button className="sell" onClick={() => placeOrder("SELL")}>SELL</button>
          </div>

          <div className="total">
            Total: <strong>${(orderQty * livePrice).toFixed(2)}</strong>
          </div>

          <div className="wallet-info">
            Wallet: <strong>${wallet}</strong>
          </div>
        </div>
      </div>

      {/* ===================== DEPTH + ORDERBOOK + TRADES ========================= */}
      <div className="depth-grid">

        {/* ORDERBOOK */}
        <div className="orderbook card">
          <h3>Orderbook</h3>

          <div className="ask-section">
            {orderBook.asks.map((a, i) => (
              <div key={i} className="ask-row">
                <span className="red">{a.price}</span>
                <span>{a.qty}</span>
              </div>
            ))}
          </div>

          <div className="bid-section">
            {orderBook.bids.map((b, i) => (
              <div key={i} className="bid-row">
                <span className="green">{b.price}</span>
                <span>{b.qty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DEPTH GRAPH */}
        <div className="depth-chart card">
          <h3>Depth</h3>
          <DepthChart bids={orderBook.bids} asks={orderBook.asks} />
        </div>

        {/* TRADES FEED */}
        <div className="trades card">
          <h3>Live Trades</h3>
          {trades.map((t, i) => (
            <div key={i} className={`trade-row ${t.side.toLowerCase()}`}>
              <span>{t.time}</span>
              <span>{t.price}</span>
              <span>{t.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
