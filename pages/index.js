import React, {
  useContext,
  useEffect,
} from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../layout/layout'
import { ProxyContext } from '../context/proxy-context'

const Home = ({newProxy, errorCode, errorMessage}) => {
  // Display error messages
  if (errorCode) {
    return <Error statusCode={errorCode} title={errorMessage} />
  }

  // Save new proxy state
  const [proxy, setProxy] = useContext(ProxyContext)  
  useEffect(() => {
    let ignore = false
    if(newProxy && !ignore) {
      setProxy(newProxy)
    }      
     return () => { ignore = true; }
  }, [newProxy])

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Home</h1>
            <h2 className="subtitle">Checking availability in your country...</h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}

Home.getInitialProps = async ({ req }) => {  
  if (req) { // This code will run in server mode
    const api_key = process.env.NEXT_SERVER_IP2PROXY_API || 'demo'
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const localAddresses = ['::1', '127.0.0.1', 'localhost']
    let proxyUrl = `https://api.ip2proxy.com/?key=${api_key}&package=PX2`
    // If ipAddress is not localhost, add it to the query parameter
    if (!localAddresses.includes(ipAddress))
      proxyUrl.concat(`&ip=${ipAddress}`)    
    try {
      const response = await fetch(proxyUrl)
      const json = await response.json()
      console.log(json)
      if (json.response != 'OK')
        return { errorCode: 500, errorMessage: json.response }
      const { isProxy, proxyType, countryName } = json
      const newProxy = { ipAddress, isProxy, proxyType, countryName }
      return{ newProxy }
    } catch (error) {
      return { errorCode: error.code, errorMessage: error.message.replace(api_key, 'demo') }
    }
  }
  return { newProxy: null } // This line will run in client mode
}

export default Home
