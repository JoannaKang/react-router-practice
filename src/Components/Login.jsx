import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import { useHistory } from "react-router-dom"

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory();

  function emailLogin (e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user.email;
      alert(`${user} logged in!`)
      history.push('/about')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });

  }
  function googleLogin() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider)
    history.push('/about')
  }


  return (
    <>
    <section className="login">
      <form className="login-form" onSubmit={emailLogin}>
        <div className="email-input">
          <label htmlFor="">EMAIL</label>
          <input id="email" type="email" placeholder="Please type in email" onChange={(e) => setEmail(e.target.value)}>
        </input>
        </div>
        <div className="password-input">
        <label htmlFor="password">PASSWORD</label>
        <input id="password" type="password" placeholder="please type in password" onChange={(e) => setPassword(e.target.value)}>
        </input>
        </div>
        <input className="submit-btn" type="submit">
        </input>
      </form>
      <button className="google-btn" onClick={googleLogin}>GOOGLE LOGIN</button>
    </section>
    </>
  )
}

export default Login;