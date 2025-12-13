import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import '../styles/Chat.css'

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "chat"), (snap) => {
      const arr = [];
      snap.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }));
      setMessages(arr.sort((a, b) => a.timestamp?.seconds - b.timestamp?.seconds));
    });

    return () => unsub();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!msg) return;

    await addDoc(collection(db, "chat"), {
      text: msg,
      from: "user",
      timestamp: serverTimestamp(),
    });

    setMsg("");
  };

  return (
    <div className="container">
      <h1>Chat With Admin</h1>
      <div className="card chat-card">
        <div className="messages">
          {messages.map((m) => (
            <div key={m.id} className={m.from === 'admin' ? 'msg admin' : 'msg user'}>
              <div className="bubble">{m.text}</div>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="chat-form">
          <input className="input" placeholder="Type message..." value={msg} onChange={(e) => setMsg(e.target.value)} />
          <button className="button">Send</button>
        </form>
      </div>
    </div>
  );
}
