import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const register = async () => {
    await signup(email, pass);
    alert("Account created! Wallet initialized.");
  };

  return (
    <div className="auth-box">
      <h2>Create Account</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={register}>Sign Up</button>
    </div>
  );
}
