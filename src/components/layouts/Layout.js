
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, isMobile }) => {
  return (
    <>
      <Header
        isMobile={isMobile}
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout 