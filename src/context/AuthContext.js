import React, { useContext, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProveder({ children }) {
  const [user, setUser] = React.useState();

  function signup(email, passowrd) {
    const AuthSession = auth.getAuth()
    AuthSession.createUserWithEmailAndPassword(email, passowrd)
      .then( (userCredentials) => {
        console.table(userCredentials);
        debugger
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    const AuthSession = auth.getAuth();
    const unsubscribe = AuthSession.onAuthStateChanged((user) => {
      console.table(user)
      debugger
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    signup
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
