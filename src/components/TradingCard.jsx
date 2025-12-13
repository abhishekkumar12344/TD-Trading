import React from 'react'
import '../styles/TradingCard.css'

export default function TradingCard({symbol,price,change}){
  const up = change >= 0
  return (
    <div className="card trading-card">
      <div className="tc-left">
        <div className="tc-symbol">{symbol}</div>
        <div className="tc-sub">Live Price</div>
      </div>
      <div className="tc-right">
        <div className="tc-price">{price}</div>
        <div className={up? 'tc-change up':'tc-change down'}>{up?`+${change}%`:`${change}%`}</div>
      </div>
    </div>
  )
}
