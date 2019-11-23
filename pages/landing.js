import React, { useContext } from 'react'
import Head from 'next/head'
import Layout from '../layout/layout'
import { ProxyContext } from '../context/proxy-context'

const Landing = () => {
    let localPrice = 25000 // Kenyan Shilling
    let exchangeRate = 0;
    let currencySymbol = ''
    const [proxy] = useContext(ProxyContext)
    const { countryName } = proxy

    switch (countryName) {
        case 'Kenya':
            exchangeRate = 1;
            currencySymbol = 'KShs.'
            break;
        case 'United Kingdom':
            currencySymbol = '£'
            exchangeRate = 0.0076;
            break;
        default:
            break;
    }
    localPrice = (localPrice * exchangeRate).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

    return (
        <Layout>
            <Head>
                <title>Landing</title>
            </Head>

            <section className="hero is-warning">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Landing Page</h1>
                        <h2 className="subtitle">Product is available in {countryName}!</h2>
                        <button className="button is-link"><strong>Order Now</strong>  -  {currencySymbol} {localPrice} </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Landing
