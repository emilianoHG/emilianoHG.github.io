import React from "react"

import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

import '../../styles/global.css'

export default function CommonLayout({ children }) {
  return (
    <div>
        <Navbar></Navbar>
        { children }
        <Footer></Footer>
    </div>
    )
}
