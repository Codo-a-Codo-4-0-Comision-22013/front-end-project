import React, { useState } from 'react'

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password:'' });


  const onInputChange = (e) => {
    const { name, value } = e.target
    
    setLoginData((prev) => ({...prev, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData)
    
    // const options = {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(jsonData)
    // };

    // fetch('https://jsonplaceholder.typicode.com/login', options)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json)
    //     });     
}


  return (
  <div className="login">
    <div className="login-header">
      <div className="login-header-logo">

        <form onSubmit={handleSubmit}>
          <label>
            <span>Username: </span>
            <input 
              type="text" 
              placeholder="Username" 
              name="username" 
              value={loginData.username}
              onChange={onInputChange}/>
          </label>
          <br/>

          <label>
            <span>Password: </span>
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={loginData.password}
              onChange={onInputChange}/>
          </label>
          <br/>

          <button type="submit">
            Login
          </button>
        </form>

      </div>
    </div>
  </div>
  )
}

export default Login