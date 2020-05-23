/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { RecoilRoot } from "recoil"
import './src/styles/index.scss'

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      {element}
    </RecoilRoot>
  )
}
