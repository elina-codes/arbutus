const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, "src/components"),
        images: path.resolve(__dirname, "src/images"),
      },
    },
  })
}
