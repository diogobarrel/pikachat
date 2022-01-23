import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import reportWebVitals from './report-web-vitals'
import Firebase, { FirebaseContext } from './components/Firebase'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <Provider store={store}>
          <App></App>
        </Provider>
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log())
