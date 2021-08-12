import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import ArticleLayout from "../components/article-layout"
import Content, { HTMLContent } from "../components/Content"

const RecentDeal = ({ data }) => {
  const { markdownRemark: post } = data
  const PostContent = HTMLContent || Content
  const bgImage =
    post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images
      .fallback.src || ""
  return (
    <ArticleLayout
      bgImage={bgImage}
      title={post?.frontmatter.title}
      description={post?.frontmatter?.amount}
      variant="recentDeal"
    >
      <PostContent content={post?.frontmatter?.description} />
    </ArticleLayout>
  )
}

RecentDeal.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default RecentDeal

export const pageQuery = graphql`
  query RecentDealByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        amount
        description
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  }
`
