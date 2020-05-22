/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react")
const { RecoilRoot } = require("recoil")
require('./src/styles/index.scss')

exports.wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      {element}
    </RecoilRoot>
  )
}

