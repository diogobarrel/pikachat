import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { withFirebase } from './components/Firebase'

const withAuthentication = WrappedComponent => {
  class Auth extends Component {
    constructor(props) {
      super(props)
      this.state = {
        user: {
          email: '',
          profilePic: '',
        },
        message: {
          text: '',
        },
      }

      this.user = this.props.firebase.auth.currentUser

    }
    render() {
      debugger
      const authenticated = Boolean(this.user)
      return authenticated ? (
        <WrappedComponent {...this.props} user={this.user}/>
      ) : (
        <Navigate to="/login" state={{ from: window.location?.href }} replace />
      )
    }
  }
  return withFirebase(Auth)
}

export { withAuthentication }
