import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      setUser(user);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  const handleGitHubSignIn = () =>{
    signInWithPopup(auth, gitHubProvider)
    .then(result =>{
      console.log(result);
      setUser(result.user);
    })
    .catch(err =>{
      console.log(err);
    })
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{
      console.log("signed out.");
      setUser(null);
    }).catch(err => console.log(err));
  }

  return (
    <div className='text-center'>
      {
        user? <button onClick={handleSignOut} className='border-2 hover:cursor-pointer rounded-xl p-2 bg-green-500'>Sign Out</button> : <div><h1>Please Login</h1>
        <button onClick={handleGoogleSignIn} className='border-2 hover:cursor-pointer rounded-xl p-2 bg-green-500'>Sign In with Google</button>
        <button onClick={handleGitHubSignIn} className='border-2 hover:cursor-pointer rounded-xl p-2 bg-green-500'> Sign In wit GITHUB </button>
        </div>
      }
      
      {
        user && <div>
          <h1>{user.displayName}</h1>
          <h3>{user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      }
    </div>
  );
};

export default Login;