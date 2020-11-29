
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';

const Layout = ({ children, isMobile }) => {
  return (
    <>
      <Head>
        <meta name="description" content="chu quan cafe vietnam" />
        <title>Trendy</title>
      </Head>

      <Header
        isMobile={isMobile}
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout 