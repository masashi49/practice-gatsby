import React from "react"
import { Link } from "gatsby"
import Header from "../components/header";

export default  () => (
  <div style={{color: '#222'}}>
    <ul>
      <li><Link to="/">index</Link></li>
      <li><Link to="/about/">aboutへ</Link></li>
    </ul>
    <Header headerText='contact'/>
    <p>このページはcontact</p>
  </div>
)

