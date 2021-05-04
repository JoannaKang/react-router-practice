import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { Link } from "react-router-dom"

function fourOfour () {
  return (
    <FirebaseAuthConsumer>
      {(user) => {
        if(user.isSignedIn) {
          return (<h1>You already logged in</h1>)
        } else {
          return(
          <>
          <h1>Please login</h1>
            <Link to="/login"><button style={{backgroundColor:"var(--color-yellow)", border: "0px", padding: "1rem", borderRadius:"2px"}}>Go to Login Page</button></Link>
          </>
          )
        }
      }}
    </FirebaseAuthConsumer>
  )
}

export default fourOfour;