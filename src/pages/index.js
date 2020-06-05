import React from "react"
import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import {
  useRecoilValue,
  useRecoilValueLoadable
} from "recoil"
import {
  headerInputTextState,
  currentUserInfoQuery
} from "state"
import FadeLink from "components/fade-link"

function CurrentUser({userID}) {
  const user = useRecoilValueLoadable(currentUserInfoQuery(userID))
  // const user = { state: 'hasValue', contents: { name: 'PA-TH' } }
  const name = useRecoilValue(headerInputTextState)
  return user.status === 'hasValue'
    ? <div>Hi {name} with {user.contents.name}</div>
    : <span className={`ml-1`}>Loading...</span>
  // switch (user.state) {
  //   case 'hasValue':
  //     return <span>Hi {name} with {user.contents.name}</span>
  //   case 'loading':
  //     return <span className={`ml-1`}>Loading...</span>
  //   case 'hasError':
  //     throw user.contents
  //   default :
  //     return <span className={`ml-1`}>Loading...</span>
  // }
}

const IndexPage = () => {
  const name = useRecoilValue(headerInputTextState)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        <CurrentUser userID={name} />
      </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div className={`mb-20 max-w-xs`}>
        <Image />
      </div>
      <FadeLink to={`/page-2/`}>Go to page 2</FadeLink>
    </Layout>
  )
}

export default IndexPage
