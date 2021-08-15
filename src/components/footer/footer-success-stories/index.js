import React from "react"
import { routes } from "src/constants"
import { Button, CardGrid, Section } from "components"
import { graphql, StaticQuery } from "gatsby"

const FooterSuccessStories = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  const successStories =
    posts?.map(({ node: post }) => ({
      meta: post?.frontmatter?.location,
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
        title: `How we've helped people`,
        subtitle: `Helping Business Owners Succeed`,
        button: (
          <Button to={routes.successStories.path} color="primary">
            More success stories
          </Button>
        ),
      }}
    >
      <CardGrid data={successStories} />
    </Section>
  )
}

const featuredSuccessStoriesQuery = () => (
  <StaticQuery
    query={graphql`
      query FeaturedSuccessStoriesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
          filter: {
            frontmatter: {
              templateKey: { eq: "success-story" }
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
              }
              frontmatter {
                location
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
    render={(data, count) => <FooterSuccessStories data={data} count={count} />}
  />
)

export default featuredSuccessStoriesQuery
