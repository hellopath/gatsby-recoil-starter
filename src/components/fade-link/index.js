import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const FadeLink = ({ to, children }) => (
  <TransitionLink
    to={to}
    exit={{ length: 0.4 }}
    entry={{ delay: 0.4 }}
    >
    {children}
  </TransitionLink>
)

export default FadeLink
