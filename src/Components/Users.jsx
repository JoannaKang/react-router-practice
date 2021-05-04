import firebase from "firebase/app";
import "firebase/auth";

import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { useHistory } from "react-router-dom"


function Users () {

  const history = useHistory();

  function signOut () {
    firebase.auth().signOut();
    history.push('/login')
  }

  return (
    <FirebaseAuthConsumer>
      {(user) => {
        return(
          <>
            <h1>{user.user.email}</h1>
            <h1>{user.user.displayName}</h1>
            <button onClick={signOut}>Sign Out</button> 
          </>
        )
      }}
      
    </FirebaseAuthConsumer>
  )
}

export default Users