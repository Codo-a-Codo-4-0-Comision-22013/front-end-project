import React from 'react'

const Login = () => {
  const [loginData, setLoginData] = useState();

  const handleSubmit = (e) => {

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
          <label>Username:
            <input type="text" placeholder="Username"/><br/>
          </label>

          <label>Password:
            <input type="password" placeholder="Password"/><br/>
          </label>

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