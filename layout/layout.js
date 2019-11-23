import Head from 'next/head'
import Nav from './nav'
import ProxyView from '../components/proxy-view'

const Layout = (props) => (
  <div>
    <Head>
      <title>IP2Location Example</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <section className="section">
      <div className="container">
        {props.children}
        <ProxyView />
      </div>
    </section>
  </div>
)

export default Layout
