import React from 'react'
import Login from '../../components/login/Login'

const AuthPage = () => {
  return (
    <>
      <header className='bg-white max-w-lg mx-auto'>
        <a href="/">
          <h1 className='text-4xl font-bold text-center'>Login</h1>
        </a>
      </header>

      <main className='bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl'>

        <section>
          <h3 className='font-bold text-2xl'>Welcome to start up</h3>
          <p className='text-gray-600 pt-2'>Sign in to your account</p>
        </section>

        <section className='mt-10'>
          <Login/>
        </section>

      </main>

      <div className='max-w-lg mx-auto text-center mt-12 mb-6'>
        <p>If you don't have an account you can register here! <a href="/" className='font-bold hover:underline' >Sign up</a></p>
      </div>

      <footer className='max-w-lg mx-auto flex justify-center'>
        <a href='/' className='hover:underline'>Contact</a>
        <span className='mx-3'>.</span>
        <a href='/' className='hover:underline'>Privacy</a>
      </footer>
    </>
  )
}

export default AuthPage