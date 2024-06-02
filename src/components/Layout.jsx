import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useLocation } from 'react-router-dom'
import StickyNavbar from './header/StickyNavbar'


const Layout = ({children}) => {
    const location = useLocation();
    const isErrorPage = location.pathname === "/*";
  return (
    <>
      {!isErrorPage && <Header />}
      {!isErrorPage && <StickyNavbar />}
      {children}
      {!isErrorPage && <Footer />}
    </>
  )
}

export default Layout