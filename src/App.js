import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import {auth, google, facebook, twitter, github} from './config/fire'
import {signInWithPopup, signOut} from 'firebase/auth' 

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  
  const LoginFalse = () => (
    <>
      <h1>Login please...</h1>
      <button style={{width:150, backgroundColor:'#de5246', color:'white'}}
      onClick={() => login(google)}>
        Login with Google
      </button>
      <button style={{width:150, backgroundColor:'#3b5998', color:'white'}}
      onClick={() => login(facebook)}>
        Login with Facebook
      </button>
      <button style={{width:150, backgroundColor:'#00acee', color:'white'}}
      onClick={() => login(twitter)}>
        Login with Twitter
      </button>
      <button style={{width:150, backgroundColor:'black', color:'white'}}
      onClick={() => {login(github)}}>
        Login with GitHub
      </button>
    </>
  )
  
  const LoginTrue = () => (
    <>
      <h1>Welcome!</h1>
      <img src={user.photoURL} style={{width:120}}/>
      <p>Welcome {user.displayName}! Your account {user.email} has been successfully logged in at {user.metadata.lastSignInTime}</p>
      <button style={{width:150}} onClick={logout}>
        Logout
      </button>
    </>
  )
  
  const login = async(provider) => {
    const result = await signInWithPopup(auth, provider) 
    setUser(result.user)
    setIsLogin(true)
    console.log(result)
  }

  const logout = async() => {
    const result = await signOut(auth)
    setUser(null)
    setIsLogin(false)
    console.log(result)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
      {isLogin && user ? <LoginTrue/> : <LoginFalse/>}

      </header>
    </div>
  );
}

export default App;
