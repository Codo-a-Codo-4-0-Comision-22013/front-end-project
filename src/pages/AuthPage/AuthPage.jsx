import React from 'react'
import Login from '../../components/login/Login'

const AuthPage = () => {
  return (
    <>
      <h1>Login</h1>
      <Login/>

      <p>If you don't have an account you can register here!</p>
      <button>
        Register
      </button>
    </>
  )
}

export default AuthPage