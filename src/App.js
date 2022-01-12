import logo from "./logo.svg";
import Button from "@mui/material/Button";

import "./App.scss";
import { TextField } from "@mui/material";

import InputAdornment from '@mui/material/InputAdornment';

import { AccountCircle , Lock} from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <div className="App-login-page">
        <div className="navbar-react">
        </div>

        <div className="app__login">
          <div className="app__login--header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> Let's get started now! </h1>
            <p> Or <b>create an account</b> and start chatting </p>
          </div>
          <div className="app__login--select">
            <TextField
              id="login-textfield"
              label="Login"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            
            <TextField
              id="password-textfield"
              type="password"
              label="Password"
              color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />

          </div>
          <div className="app__login--button">
            <Button variant="contained" color="warning">Login</Button>
          </div>
        </div>

        <div></div>
        <div className="app__footer"></div>
      </div>
    </div>
  );
}

export default App;
