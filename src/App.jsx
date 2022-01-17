import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'

import { withFirebase } from './components/Firebase/context'
import { withAuthentication } from './auth.js'

export default function App() {
  const LoginPage = withFirebase(Login)
  const RegisterPage = withFirebase(Register)
  const ChatApp = withAuthentication(Chat)

  const pikaTheme = createTheme({
    palette: {
      primary: {
        light: '#ffac33',
        main: '#ff9800',
        dark: '#b26a00',
        contrastText: '##000',
      },
      secondary: {
        light: '#ff6333',
        main: '#ff3d00',
        dark: '#b22a00',
        contrastText: '#000',
      },
    },
  })

  return (
    <ThemeProvider theme={pikaTheme}>
      <CssBaseline />
      <Routes>
        <Route path={'*'} element={<LoginPage></LoginPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path={'/pikachat'} element={<ChatApp></ChatApp>}></Route>
      </Routes>
    </ThemeProvider>
  )
}
