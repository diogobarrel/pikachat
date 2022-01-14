import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LoginApp from  './pages/Login';
import ChatApp from  './pages/Chat';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles'

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

  }
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={pikaTheme}>
      <CssBaseline></CssBaseline>
      <ChatApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
