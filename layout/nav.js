import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a href="/" className="navbar-item"><strong>Product Store</strong></a>
    </div>
    <div className="navbar-menu">
      <a className="navbar-item" href="/">Home</a>
      <Link href='/landing'>
        <a className="navbar-item">Landing</a>
      </Link>
      <Link href='/unavailable'>
        <a className="navbar-item">Unavailable</a>
      </Link>
      <Link href='/abuse'>
        <a className="navbar-item">Abuse</a>
      </Link>
    </div>
  </nav>
)

export default Nav
