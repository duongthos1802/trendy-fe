import NProgress from 'nprogress'
import Router from 'next/router'
import React from 'react'
import App from 'next/app'

import rootModel from '../models'
import { Provider } from 'react-redux'
import { init } from '@rematch/core'

import ErrorPage from 'next/error'
import Head from 'next/head'

import '../scss/index.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


const store = init({
  models: rootModel
})

class MyApp extends App {

  componentDidMount() {
  }

  render() {
    const { Component, pageProps } = this.props

    if (pageProps.statusCode) {
      return <ErrorPage statusCode={pageProps.statusCode} />
    }

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta name="theme-color" content="#000000" /> */}
          {/* <meta
            name="description"
            content="Web site created using create-react-app"
          /> */}
          <link rel="preload" href="/static/fonts/AvenirNextLTPro-Bold.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/static/fonts/AvenirNextLTPro-It.otf" as="font" crossOrigin="" />
          <link rel="preload" href="/static/fonts/AvenirNextLTPro-Regular.otf" as="font" crossOrigin="" />
          <title>Trendy</title>
        </Head>

        <Provider store={store}>
          <Component {
            ...pageProps
          }
          // isMobile={isMobile}
          />
        </Provider>

        {/* <Component {...pageProps} /> */}
      </>
    )
  }
}

export default MyApp