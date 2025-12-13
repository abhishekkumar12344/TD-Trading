import React from 'react'
import '../styles/Chat.css'

export default function ChatBubble({text,from}){
  return (
    <div className={from==='admin' ? 'msg admin' : 'msg user'}>
      <div className="bubble">{text}</div>
    </div>
  )
}
