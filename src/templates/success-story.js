import React from "react"
import PropTypes from "prop-types"
// import { graphql } from "gatsby"
import ArticleLayout from "../components/article-layout"
import Content, { HTMLContent } from "../components/Content"

const SuccessStory = ({ data }) => {
  const { markdownRemark: post } = data
  const PostContent = HTMLContent || Content
  const bgImage =
    post?.frontmatter?.featuredimage?.childImageSharp?.gatsbyImageData?.images
      ?.fallback?.src || ""
  return (
    <ArticleLayout
      bgImage={bgImage}
      title={post?.frontmatter.title}
      description={post?.frontmatter?.location}
      variant="successStory"
    >
      <PostContent content={post?.html} />
    </ArticleLayout>
  )
}

SuccessStory.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SuccessStory

// export const pageQuery = graphql`
//   query SuccessStoryByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         location
//         featuredimage {
//           childImageSharp {
//             gatsbyImageData(layout: FIXED)
//           }
//         }
//       }
//     }
//   }
// `
