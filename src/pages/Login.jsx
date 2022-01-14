import React, { Component } from "react";

import logo from "../assets/logo.svg";
import Button from "@mui/material/Button";

import "../styles/Login.scss";

import { TextField } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";

import { AccountCircle, Lock } from "@mui/icons-material";

export default class LoginApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        passwordConfirm: "",
        loading: false,
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="app__base">
          <div className="navbar-react"></div>

          <div className="app__main app-login">
          <div className="app-login--select">
              <TextField
                id="login-textfield"
                label="Email"
                value={this.state.email}
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
                value={this.state.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />

              <Button variant="contained" >
                Login
              </Button>
            </div>
            <div className="app-login__banner">
              <img src={logo} className="App-logo" alt="logo" />
              <h1> Let's get started now! </h1>
              <p>
                {" "}
                Or <b>create an account</b> and start chatting{" "}
              </p>
              <div className="app-login--button">
              <Button variant="contained" color="secondary">
                Register
              </Button>
            </div>
            </div>
          </div>

          <div className="app__footer"></div>
        </div>
      </div>
    );
  }
}
