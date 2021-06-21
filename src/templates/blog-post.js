import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import ArticleLayout from "../components/article-layout"
import Content, { HTMLContent } from "../components/Content"

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const PostContent = HTMLContent || Content
  const bgImage =
    post.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images
      .fallback.src || ""
  return (
    <ArticleLayout
      bgImage={bgImage}
      title={post?.frontmatter.title}
      description={`(${post?.fields.readingTime.text})`}
      variant="blog"
      showShareButtons
    >
      <PostContent content={post?.html} />
    </ArticleLayout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
