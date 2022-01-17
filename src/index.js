import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import reportWebVitals from './reportWebVitals'
import Firebase, { FirebaseContext } from './components/Firebase'

import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'



ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <App></App>
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log())
