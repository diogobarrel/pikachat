import { initializeApp } from 'firebase/app'
import * as auth from 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MESSAGING_MEASUREMENT_ID,
}

class Firebase {
  constructor() {
    const app = initializeApp(config)

    /* Helper */

    /* Firebase APIs */
    this.app = app
    this.auth = auth.getAuth()
    /* Social Sign In Method Provider */
  }

  // *** Auth API ***
  register = (email, password) => auth.createUserWithEmailAndPassword(this.auth, email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(this.auth, email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email)

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    })

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password)

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val()

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {}
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            }

            next(authUser)
          })
      } else {
        fallback()
      }
    })

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`)

  users = () => this.db.ref('users')

  // *** Message API ***

  message = (uid) => this.db.ref(`messages/${uid}`)

  messages = () => this.db.ref('messages')
}

export default Firebase
