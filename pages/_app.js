import React from 'react'
import App from 'next/app'
import 'bulma/css/bulma.css'
import { ProxyContextProvider } from '../context/proxy-context'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ProxyContextProvider>
        <Component {...pageProps} />
      </ProxyContextProvider>
    )
  }
}
