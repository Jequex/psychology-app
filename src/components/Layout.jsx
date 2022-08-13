import React from "react"
import PropTypes from "prop-types"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout-div">
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
