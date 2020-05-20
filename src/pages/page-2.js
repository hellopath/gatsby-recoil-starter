import React from "react"
// import { PageProps, Link } from "gatsby"
import Layout from "components/layout"
import SEO from "components/seo"
import TransitionLink from "gatsby-plugin-transition-link"

const SecondPage = (props) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 ({props.path})</p>
    {/* <Link to="/">Go back to the homepage</Link> */}
    <TransitionLink
      to={`/`}
      exit={{ length: 0.4 }}
      entry={{ delay: 0.4 }}
      >
        Go back to the homepage
    </TransitionLink>
  </Layout>
)

export default SecondPage
