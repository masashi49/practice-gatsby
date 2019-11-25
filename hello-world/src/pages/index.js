import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import PrimaryButton from '../components/primaryButton'
import Header from "../components/header";

// const IndexPage = () => (
//   <Layout>
//     <SEO title="こんにちわ" />
//     <h1>hello world</h1>
//     <p>ようこそあなたの new Gatsby サイトへ.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">page2</Link>
//   </Layout>
// )
//
// export default IndexPage
//
export default  () => (
  <div style={{color: '#555'}}>
    <ul>
      <li><Link to="/contact/">contactへ</Link></li>
      <li><Link to="/about/">aboutへ</Link></li>
    </ul>
    <Header headerText='indexについて'/>
    <h1>hello Gatsby!!!</h1>
    <p>what a world.</p>
    <img style={{display:'block'}} src="https://source.unsplash.com/random/400x200" alt="altです"/>
    <PrimaryButton text='プライマリボタン' />
  </div>
)

