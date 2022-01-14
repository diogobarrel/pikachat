import React, { Component } from "react";

import "../styles/Login.scss";

import logo from "../assets/logo.svg";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"
import InputAdornment from "@mui/material/InputAdornment";
import { AccountCircle, Lock } from "@mui/icons-material";

import { TextField } from "@mui/material";

export default class RegisterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        profilePic: "",
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="app__base">
          <div className="navbar-react"></div>

          <div className="app__main app-login">
            <div className="app-login__banner">
              <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1> Let's get started now! </h1>
                <p>
                  Or <b>create an account</b> and start chatting
                </p>
              </div>
          </div>
              
            <div className="app-login__select">
              <form>
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </form>
            </div>
              
            <div className="app-login__button">
              <Button variant="contained" color="secondary">
                Register
              </Button>
            </div>
          </div>

          <div className="app__footer"></div>
        </div>
      </div>
    );
  }
}
