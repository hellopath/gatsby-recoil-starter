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
        atoms: path.resolve(__dirname, 'src/atoms/'),
        selectors: path.resolve(__dirname, 'src/selectors/'),
        styles: path.resolve(__dirname, 'src/styles/')
      }
    }
  })
}
