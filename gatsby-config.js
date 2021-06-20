module.exports = {
  siteMetadata: {
    title: `Arbutus Capital`,
    description: `For over 40 years, Arbutus Capital has been helping businesses find the right equipment with a financing plan that fits their needs. Arbutus Capital We offers leasing for new and used equipment for construction, industrial, restaurant and corporate businesses. Learn how we can help you scale your business in Canada.`,
    author: `Elina Goldin`,
    image: "src/images/arbutus-icon.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/images/uploads`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `arbutus-capital`,
        short_name: `arbutus`,
        start_url: `/`,
        background_color: `#01446f`,
        theme_color: `#01446f`,
        display: `minimal-ui`,
        icon: `src/images/arbutus-icon.png`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          `gatsby-remark-reading-time`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
