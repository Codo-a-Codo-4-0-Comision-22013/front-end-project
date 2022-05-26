import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <>
      <header>This is a header</header>
      
      <main className="body-bg min-h-screen pt-12 md:pt-20 pb-2 px-2">
       <Outlet/>
      </main>

      <footer>This is the footer</footer>
    </>
  )
}

export default Layout