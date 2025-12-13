import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";

import { setDoc, doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // AUTO LOGIN CHECK
  useEffect(() => {
    return onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // SIGNUP USER + CREATE WALLET
  const signup = async (email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // CREATE WALLET
    await setDoc(doc(db, "users", result.user.uid), {
      email,
      balance: 5000, // demo money
      createdAt: Date.now(),
    });

    // ORDER HISTORY TABLE
    await setDoc(doc(db, "users", result.user.uid, "system", "orders"), {
      history: []
    });
  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
