import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import reportWebVitals from './reportWebVitals'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Firebase, { FirebaseContext } from './components/Firebase'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import RegisterApp from './pages/Register'
import LoginApp from './pages/Login'

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

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <ThemeProvider theme={pikaTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route exact path={'/'} element={<LoginApp></LoginApp>}></Route>
            <Route path="/login" element={<LoginApp></LoginApp>}></Route>
            <Route path="/register" element={<RegisterApp></RegisterApp>}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log())
