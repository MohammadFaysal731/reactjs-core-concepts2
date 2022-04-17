import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import './App.css';
import { useState } from "react";
const auth = getAuth(app)
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();


  const handleGoogleSingIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error('error', error)
      })
  }

  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  }

  const handleFaceBookSingIn = () => {
    signInWithPopup(auth, faceBookProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {/*    {condition ?true :false} */}
      {
        user.uid ? <button onClick={handleSingOut}>Sing out</button> :
          <>
            <button onClick={handleGoogleSingIn}>Google Sing In</button>
            <button onClick={handleFaceBookSingIn}>FaceBook Sing In</button>
            <button onClick={handleGithubSingIn}>Github Sing In</button>
          </>
      }
      <h2>Name:{user.displayName}</h2>
      <p>I Know email address:{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
