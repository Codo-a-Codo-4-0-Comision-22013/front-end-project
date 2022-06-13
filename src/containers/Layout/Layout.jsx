import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      
      <main className="body-bg min-h-screen pt-12 md:pt-20 pb-2 px-2">
       <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

export default Layout