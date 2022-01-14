import React, { useContext, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState()
  const [loading, setLoading] = React.useState()

  function signup(email, passowrd) {
    const AuthSession = auth.getAuth()
    debugger

    AuthSession.createUserWithEmailAndPassword(AuthSession, email, passowrd)
      .then((userCredentials) => {
        debugger
        console.log(userCredentials)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    const AuthSession = auth.getAuth()
    console.log(AuthSession)
    const unsubscribe = AuthSession.onAuthStateChanged((user) => {
      setLoading(false)
      if (user) {
        debugger
        setUser(user)
      }
    })
    return unsubscribe
  }, [])

  const value = {
    user,
    signup,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
