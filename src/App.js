import React from "react";
import './App.css';


import firebase from "firebase/app";
import "firebase/auth";
import {  
  IfFirebaseAuthed,
  FirebaseAuthProvider,
  IfFirebaseUnAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import AuthRoute from './Components/AuthRoute'
import UnAuthRoute from './Components/UnAuthRoute'

import { config } from "./config.js";

function App() {

  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <IfFirebaseAuthed>
        {() => <AuthRoute/>}
      </IfFirebaseAuthed>
      <IfFirebaseUnAuthed>
        {() => <UnAuthRoute/>}
      </IfFirebaseUnAuthed>
    </FirebaseAuthProvider>
  );
}

export default App;
