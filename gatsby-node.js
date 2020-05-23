/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components/'),
        state: path.resolve(__dirname, 'src/state/'),
        styles: path.resolve(__dirname, 'src/styles/')
      }
    }
  })
}
