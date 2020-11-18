import React from "react"

import CommonLayout from "../templates/common-layout/common-layout"
import SEO from '../components/seo/seo'

import Chip from "../components/chip/chip"

export default function Home() {
  return (
    <CommonLayout>
      <SEO title="Bienvenido"/>
      <main>
        <article>
            <h1>JavaScript Basics</h1>
            <p>JavaScript is a rich and expressive language...</p>
            <section>
                <Chip icon="Laravel" title="Laravel" />
                <Chip icon="Angular" title="Angular" />

                <h2>Syntax Basics</h2>
                <p>Understanding statements, variable naming, whitespace...</p>
            </section>
            <section>
                <h2>Operators</h2>
                <p>Operators allow you to manipulate values...</p>
            </section>
            <section>
                <h2>Conditional Code</h2>
                <p>Sometimes you only want to run a block of code under certain conditions...</p>
            </section>  
            <aside>
                <p>Viewed by 1503 people</p>
                <p>Author: John Smith</p>
            </aside>
        </article>
      </main>
    </CommonLayout>
  )
}
