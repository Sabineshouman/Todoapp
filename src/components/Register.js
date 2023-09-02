import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebaseConfig';
import { Navigate } from 'react-router-dom';


function Register() {

    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")

    const signUp = () => {
    
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user; 
          console.log(user);
          
        })
          .catch((error) => {
          const errorCode = error.code; 
          alert(errorCode);
        
        });
    }

    const signIn = () => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
   
      })
      .catch((error) => {
      const errorCode = error.code;
      alert (errorCode);});

    }
    
  return (
    <div className='Register' >
      <div className='Register-header'>
        <h2>Register</h2>
      </div>
        <div className='Register-input'> 
            <input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}  />
        </div>

        <div className='Register-btn'> 
        <button onClick={signUp}> Sign up </button>
        <button onClick={signIn}> Sign in </button>
        </div>
    </div>
  )
}

export default Register