import logo from './logo.svg';
import Button from '@mui/material/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='navbar-react'>
        <img src={logo} className="App-logo" alt="logo" />

      </div>

      <div className='app__main'>
        <div>
          <h1> Login </h1>
          <p>Entre com passuord</p>
        </div>
        <input></input>
        <input></input>
        <Button variant="contained">Hello World</Button>
      </div>

      <div>
      </div>
      <div className='app__footer'>

      </div>
    </div>
  );
}

export default App;
