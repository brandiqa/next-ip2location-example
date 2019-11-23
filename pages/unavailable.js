import React, { useContext } from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'
import { ProxyContext } from '../context/proxy-context'

const Unavailable = () => {
    const [proxy] = useContext(ProxyContext)
    const { countryName } = proxy

    return (
        <Layout>
            <Head>
                <title>Unavailable</title>
            </Head>

            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Sorry. Product is not available in <strong>{countryName}</strong> </h1>
                        <h2 className="subtitle">Click to join waiting list</h2>
                        <button className="button is-link">Subscribe to Alert Notification</button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Unavailable
