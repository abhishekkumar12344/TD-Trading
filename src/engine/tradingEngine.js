// src/engine/tradingEngine.js

import { db } from "../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

/*
 Ultra++ Trading Engine — DEMO Mode
 -----------------------------------
 FEATURES:
 ✔ Market order execution
 ✔ Limit order execution
 ✔ Stop-limit execution
 ✔ Position tracking
 ✔ Wallet balance adjust
 ✔ P/L auto calculation
 ✔ Order history
 ✔ Firestore sync
*/

// HELPER — calculate P/L for a position
export const calculatePnL = (entry, current, qty, side) => {
  const diff = side === "BUY"
    ? current - entry
    : entry - current;

  return parseFloat((diff * qty).toFixed(2));
};

// ================================================
// MAIN ENGINE FUNCTION
// ================================================
export const executeOrder = async (userId, market, side, orderType, qty, price, livePrice) => {

  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) return { error: "User not found!" };

  let user = userSnap.data();
  let wallet = user.balance;

  // ----------------------------
  // MARKET ORDER → fills instantly at live price
  // ----------------------------
  if (orderType === "MARKET") {
    const cost = livePrice * qty;

    if (side === "BUY") {
      if (wallet < cost) return { error: "Not enough balance" };
      wallet -= cost;
    } else if (side === "SELL") {
      wallet += cost;
    }

    await updatePosition(userId, market, side, qty, livePrice);
    await updateWallet(userId, wallet);
    await addHistory(userId, market, side, "MARKET", qty, livePrice);

    return { success: true, price: livePrice };
  }

  // ----------------------------
  // LIMIT ORDER → fill only when price hits
  // ----------------------------
  if (orderType === "LIMIT") {
    if (side === "BUY") {
      if (livePrice <= price) {
        const cost = price * qty;
        if (wallet < cost) return { error: "Not enough balance" };
        wallet -= cost;

        await updatePosition(userId, market, side, qty, price);
        await updateWallet(userId, wallet);
        await addHistory(userId, market, side, "LIMIT-FILLED", qty, price);

        return { success: true, price };
      } else {
        return { pending: true, msg: "BUY LIMIT waiting for price drop" };
      }
    }

    if (side === "SELL") {
      if (livePrice >= price) {
        const cost = price * qty;
        wallet += cost;

        await updatePosition(userId, market, side, qty, price);
        await updateWallet(userId, wallet);
        await addHistory(userId, market, side, "LIMIT-FILLED", qty, price);

        return { success: true, price };
      } else {
        return { pending: true, msg: "SELL LIMIT waiting for price rise" };
      }
    }
  }

  // ----------------------------
  // STOP-LIMIT ORDER
  // ----------------------------
  if (orderType === "STOP") {
    if (side === "BUY" && livePrice >= price) {
      const cost = livePrice * qty;
      if (wallet < cost) return { error: "Not enough balance" };

      wallet -= cost;
      await updatePosition(userId, market, side, qty, livePrice);
      await updateWallet(userId, wallet);
      await addHistory(userId, market, side, "STOP-FILLED", qty, livePrice);

      return { success: true, price: livePrice };
    }

    if (side === "SELL" && livePrice <= price) {
      const cost = livePrice * qty;
      wallet += cost;

      await updatePosition(userId, market, side, qty, livePrice);
      await updateWallet(userId, wallet);
      await addHistory(userId, market, side, "STOP-FILLED", qty, livePrice);

      return { success: true, price: livePrice };
    }

    return { pending: true, msg: "STOP order waiting for trigger" };
  }

  return { error: "Unknown order type" };
};

// ================================================
// UPDATE USER WALLET
// ================================================
export const updateWallet = async (userId, newBalance) => {
  await updateDoc(doc(db, "users", userId), {
    balance: newBalance,
  });
};

// ================================================
// UPDATE POSITION
// ================================================
export const updatePosition = async (userId, market, side, qty, entryPrice) => {
  const posRef = doc(db, "users", userId, "system", "positions");
  const posSnap = await getDoc(posRef);

  let positions = posSnap.exists() ? posSnap.data().open || [] : [];

  // Add new position
  positions.push({
    market,
    side,
    qty,
    entry: entryPrice,
    openedAt: Date.now(),
  });

  await updateDoc(posRef, {
    open: positions,
  });
};

// ================================================
// ADD ORDER HISTORY ENTRY
// ================================================
export const addHistory = async (userId, market, side, orderType, qty, price) => {
  const histRef = doc(db, "users", userId, "system", "orders");
  const histSnap = await getDoc(histRef);

  let history = histSnap.exists() ? histSnap.data().history || [] : [];

  history.push({
    id: Date.now(),
    market,
    side,
    orderType,
    qty,
    price,
    time: Date.now(),
  });

  await updateDoc(histRef, {
    history,
  });
};
