// import { Link } from "gatsby"
 import PropTypes from "prop-types"
 import React from "react"
//
// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )
//
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }
//
// export default Header

export default props =>(
  <h1>{props.headerText}:::{props.arbitraryPhrase}</h1>
)


// 上の表記は下のReactと同じ。
// export default class Header extends React.Component {
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       headerText: props.headerText,
//       arbitraryPhrase: props.arbitraryPhrase,
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>{this.state.headerText}</h1>
//         <p>{this.state.arbitraryPhrase}</p>
//       </div>
//     )
//   }
// }
