import React from "react"
import CommonLayout from "../templates/common-layout/common-layout"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <CommonLayout>
      <h1>404</h1>
      <Link to="/">Volver a inicio</Link>
    </CommonLayout>
  )
}
