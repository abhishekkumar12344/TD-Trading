import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signin = async () => {
    await login(email, pass);
    alert("Logged in!");
  };

  return (
    <div className="auth-box">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
      <button onClick={signin}>Login</button>
    </div>
  );
}
