import React from "react"
import PropTypes from "prop-types"

const primaryButton = ({ text }) => (
  <button>{text}</button>
)

primaryButton.propTypes = {
  text: PropTypes.string,
}

primaryButton.defaultProps = {
  text: `default`,
}

export default primaryButton

