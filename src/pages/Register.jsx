import React, { Component } from "react";

import "../styles/Login.scss";

import logo from "../assets/logo.svg";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { AccountCircle, Lock } from "@mui/icons-material";

import { TextField } from "@mui/material";

import { useAuth } from "../context/AuthContext";

export default class RegisterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      loading: false,
      success: false,
      error: {},
    };
  }

  validateForm() {
    return false;
  }

  handleFormSubmit = () => {

    if (!this.validateForm()) {
      this.setState({
        password: '',
        passwordConfirm: ''
      })

      return;
    }

    const { signup } = useAuth();
    signup(this.state.email, this.state.password);
  };

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
              <form onSubmit={this.handleFormSubmit}>
                <TextField
                  id="login-textfield"
                  onChange={(event) => this.setState({ email: event.target.value }) }
                  value={this.state.email}
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
                  onChange={(event) => this.setState({ password: event.target.value})}
                  value={this.state.password}
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

                <TextField
                  id="password-confirm-textfield"
                  onChange={(event) => this.setState({ passwordConfirm: event.target.value } )}
                  value={this.state.passwordConfirm}
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
                <div className="app-login__button">
                  <Button variant="contained" color="secondary" type="submit">
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="app__footer"></div>
        </div>
      </div>
    );
  }
}
