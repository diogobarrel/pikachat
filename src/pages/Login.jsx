import React, { Component } from 'react'

import logo from '../assets/logo.svg'
import Button from '@mui/material/Button'

import '../styles/Login.scss'

import { TextField } from '@mui/material'

import InputAdornment from '@mui/material/InputAdornment'

import { AccountCircle, Lock } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default class LoginApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  render() {
    const { email, password } = this.state

    const invalidInput = password === '' || email === ''

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
                  Login or  <Link to={{ pathname: "/register"}}> create an account </Link> and start chatting
                </p>
              </div>
            </div>

            <div className="app-login__select">
              <form onSubmit={this.handleFormSubmit}>
                <TextField
                  id="login-textfield"
                  onChange={(event) =>
                    this.setState({
                      email: event.target.value,
                    })
                  }
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
                  onChange={(event) =>
                    this.setState({
                      password: event.target.value,
                    })
                  }
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

                <div className="app-login__button">
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={invalidInput}
                  >
                    Register
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="app__footer"></div>
        </div>
      </div>
    )
  }
}
