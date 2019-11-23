import React from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'

const Abuse = () => (
    <Layout>
        <Head>
            <title>Abuse</title>
        </Head>

        <section className="hero is-danger">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Sorry! TOR Visitors not allowed</h1>
                    <h2 className="subtitle">As much as we respect individual privacy, we would rather protect ourselves from users abusing privacy networks </h2>
                </div>
            </div>
        </section>
    </Layout>
)

export default Abuse
