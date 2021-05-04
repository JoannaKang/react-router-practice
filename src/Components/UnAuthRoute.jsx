import React from "react"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
// import { FirebaseAuthConsumer } from "@react-firebase/auth";

import Login from './Login'
import Topics from '../Components/Topics'
import About from '../Components/About'
import FourOFour from '../Components/FourOFour'
import './UnAuthRoute.css'

function UnAuthRoute() {
  return (
    <>
    <Router>
    <nav className="nav-bar">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </nav>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/topics">
        <Topics />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <FourOFour />
      </Route>
    </Switch>
    </Router>
    </>
  )
}

export default UnAuthRoute