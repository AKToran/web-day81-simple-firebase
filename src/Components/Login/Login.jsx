import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {

  const provider = new GoogleAuthProvider;


  const handleGoogleSignIn = () =>{
    alert("d");
    signInWithPopup(auth, provider)
    .then(result =>{
      console.log(result);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className='text-center'>
      <h1>Please Login</h1>
      <button onClick={handleGoogleSignIn} className='border-2 hover:cursor-pointer rounded-xl p-2 bg-green-500'>Sign In with Google</button>
    </div>
  );
};

export default Login;