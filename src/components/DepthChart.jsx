import React, { useEffect, useRef } from "react";

export default function DepthChart({ bids, asks }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mapData = (orders, isBid) => {
      let cumulative = 0;
      return orders.map((o) => {
        cumulative += parseFloat(o.qty);
        return {
          price: parseFloat(o.price),
          qty: cumulative,
        };
      });
    };

    const bidData = mapData(bids, true);
    const askData = mapData(asks, false);

    const maxQty = Math.max(
      bidData.length ? bidData[bidData.length - 1].qty : 0,
      askData.length ? askData[askData.length - 1].qty : 0
    );

    const drawCurve = (data, color) => {
      if (data.length < 2) return;

      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      data.forEach((point, index) => {
        const x = (index / (data.length - 1)) * canvas.width;
        const y = canvas.height - (point.qty / maxQty) * canvas.height;
        ctx.lineTo(x, y);
      });

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.globalAlpha = 0.4;
      ctx.fill();

      ctx.globalAlpha = 1;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    drawCurve(bidData, "#16e066"); // green
    drawCurve(askData, "#ff4b4b"); // red

  }, [bids, asks]);

  return <canvas ref={canvasRef} className="depth-canvas"></canvas>;
}
