/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionState } from "gatsby-plugin-transition-link"
import Header from "components/header"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 }
  }
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <TransitionState>
          {({transitionStatus}) => {
            const visibility = ['entering', 'entered'].includes(transitionStatus) ? 'visible' : 'hidden'
            return (
              <motion.div
                initial="hidden"
                animate={visibility}
                variants={variants}
                transition={{
                  ease: "easeOut",
                  duration: 0.6
                }}
                >
                {children}
              </motion.div>
            )
          }}
        </TransitionState>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
