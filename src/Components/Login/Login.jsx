import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider;

  const handleGoogleSignIn = () =>{
    alert("d");
    signInWithPopup(auth, provider)
    .then(result =>{
      const user = result.user;
      setUser(user);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className='text-center'>
      <h1>Please Login</h1>
      <button onClick={handleGoogleSignIn} className='border-2 hover:cursor-pointer rounded-xl p-2 bg-green-500'>Sign In with Google</button>
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