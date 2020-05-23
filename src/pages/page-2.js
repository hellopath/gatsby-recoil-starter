import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import { useRecoilValue } from "recoil"
import { headerInputTextState } from "state"
import FadeLink from "components/fade-link"

const SecondPage = (props) => {
  const name = useRecoilValue(headerInputTextState)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page from {name}</h1>
      <p>Welcome to page 2 ({props.path})</p>
      <FadeLink to={`/`}>Go back to the homepage</FadeLink>
    </Layout>
  )
}

export default SecondPage
