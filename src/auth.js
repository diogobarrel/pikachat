import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { withFirebase } from './components/Firebase'

const withAuthentication = (WrappedComponent) => {
  class Auth extends Component {
    constructor(props) {
      super(props)

      const firebaseUser = this.props.firebase.auth.currentUser;
      if (!firebaseUser) return

      this.user = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
      }
    }
    render() {
      const authenticated = Boolean(this.user)
      return authenticated ? (
        <WrappedComponent {...this.props} user={this.user} />
      ) : (
        <Navigate to="/login" state={{ from: window.location?.href }} replace />
      )
    }
  }
  return withFirebase(Auth)
}

export { withAuthentication }
