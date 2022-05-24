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
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <div className='mb-6 pt-3 rounded bg-gray-200'>            
            <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Username </label>
            <input 
              className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              type="text" 
              name="username" 
              value={loginData.username}
              onChange={onInputChange}/>
          </div>

          <div className='mb-6 pt-3 rounded bg-gray-200'>
            <label className='block text-gray-700 text-sm font-bold mb-2 ml-3'> Password </label>
            <input        
              className='bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3'
              type="password" 
              name="password" 
              value={loginData.password}
              onChange={onInputChange}/>
          </div>
          <div className='flex justify-end'>
            <a href="/" className='text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6'>Forgot your password?</a>
          </div>

          <button type="submit" className='bg-purple-600 rounded hover:bg-purple-700 text-white font-bold py-2 shadow-lg hover:shadow-xl transition duration-200 '>
            Login
          </button>
        </form>
  )
}

export default Login