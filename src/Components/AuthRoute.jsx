// import React from "react"
// import { Route, Redirect } from "react-router-dom"

import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom"

import User from '../Components/Users'
import Topics from '../Components/Topics'
import About from '../Components/About'
import FourOFour from '../Components/FourOFour'

function AuthRoute({ children, ...rest }) {

  return (
    <FirebaseAuthConsumer>
    {(user) => {
      return(
        <>
        <Router>
          <nav className="nav-bar">
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </nav>
          <Switch>
            <Route path="/user">
              <User user={user}/>
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <FourOFour user={user} />
            </Route>
          </Switch>
        </Router>
        </>
      )
    }}
  </FirebaseAuthConsumer>
  )
}

export default AuthRoute