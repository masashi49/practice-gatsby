import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="こんにちわ" />
    <h1>こんにちわこれはh1</h1>
    <p>ようこそあなたの new Gatsby サイトへ.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">page 2へ</Link>
  </Layout>
)

export default IndexPage
