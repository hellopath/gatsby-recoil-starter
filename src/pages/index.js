import React from "react"
import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import { useRecoilValue } from "recoil"
import { headerInputTextState } from "atoms"
import FadeLink from "components/fade-link"

const IndexPage = () => {
  const name = useRecoilValue(headerInputTextState)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi {name}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <FadeLink to={`/page-2/`}>Go to page 2</FadeLink>
    </Layout>
  )
}

export default IndexPage
