import React from "react"
import Header from '../components/header'
import {Link} from "gatsby";

export default () => (
  <div style={{color:'teal'}}>
    <ul>
      <li><Link to="/">indexへ</Link></li>
      <li><Link to="/contact/">contactへ</Link></li>
    </ul>
    <Header
      headerText='Gatsbyaaについて'
      arbitraryPhrase='is arbitrary'
    />
    <Header headerText='2つめのheader'/>
    <h1>Abaout</h1>
    <p>pたぐです</p>
  </div>
)