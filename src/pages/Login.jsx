import React, { Component } from 'react'

import logo from '../assets/logo.svg'
import Button from '@mui/material/Button'

import '../styles/Login.scss'

import { TextField } from '@mui/material'

import InputAdornment from '@mui/material/InputAdornment'

import { AccountCircle, Lock } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { withFirebase } from '../components/Firebase/context'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loading: false,
    }
  }



  handleFormSubmit = (e) => {
    e.preventDefault()

    if (false) {
      this.setState({
        password: '',
        passwordConfirm: '',
      })

      return
    }
    this.props.firebase
      .login(this.state.email, this.state.password)
      .then(({user, _tokenResponse: token}) => {
        return this.loginCallback(user, token)
      })
      .catch((err) => console.err(err))
  }

  loginCallback = (user, token) => {
    console.log(user)
    console.log(token)
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
                  Login or{' '}
                  <Link to={{ pathname: '/register' }}>
                    {' '}
                    create an account{' '}
                  </Link>{' '}
                  and start chatting
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
                    Login
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

const LoginApp = withFirebase(Login)

export default LoginApp
