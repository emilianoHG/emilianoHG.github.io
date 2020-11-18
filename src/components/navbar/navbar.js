import React from 'react'
import { Link } from 'gatsby'

import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/">
                My Personal site
            </Link>
        </div>
        <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/portfolio/">Portfolio</Link>
            <Link to="/contact/">Contact</Link>
            <Link to="/about/">About Us</Link>
        </div>
    </nav>
  )
}
