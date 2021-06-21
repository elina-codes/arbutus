import React from "react"
import { routes } from "src/constants"
import { Button, CardGrid, Section } from "components"
import { graphql, StaticQuery } from "gatsby"

const FooterBlog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  const blogPosts =
    posts?.map(({ node: post }) => ({
      meta: post?.fields.readingTime.text,
      title: post?.frontmatter.title,
      text: post?.excerpt,
      image: {
        src:
          post?.frontmatter.featuredimage.childImageSharp.gatsbyImageData.images
            .fallback.src,
      },
      url: post?.fields.slug,
    })) || []

  return (
    <Section
      {...{
        title: `More blog articles`,
        subtitle: `Featured posts`,
        button: (
          <Button to={routes.blog.path} color="primary">
            More blog posts
          </Button>
        ),
      }}
    >
      <CardGrid data={blogPosts} />
    </Section>
  )
}

const featuredBlogQuery = () => (
  <StaticQuery
    query={graphql`
      query FeaturedBlogQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              featuredpost: { eq: true }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
                readingTime {
                  text
                }
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    gatsbyImageData(layout: FIXED)
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FooterBlog data={data} count={count} />}
  />
)

export default featuredBlogQuery
