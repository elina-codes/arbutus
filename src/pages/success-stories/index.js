import React from "react"
import Layout from "components/layout"
import { graphql, StaticQuery } from "gatsby"
import images from "src/images"
import pageSections from "src/page-content/success-stories"
import { StaticImage } from "gatsby-plugin-image"
import { OpenContactModalButton, Section, CardGrid } from "components"
const seo = {
  title: "Success Stories",
}

const BgImage = () => (
  <StaticImage
    layout="fullWidth"
    placeholder="blurred"
    alt=""
    src="../../images/banner-success.jpg"
    style={{ gridArea: "1/1" }}
    fit="cover"
    formats={["auto", "jpg", "png", "jpeg"]}
  />
)

const topBannerData = {
  title: "Success stories",
  description:
    "We have been helping Western Canada lease heavy equipment for over 40 years. Here are some stories from our happy clients.",
  cta: <OpenContactModalButton>Schedule a chat</OpenContactModalButton>,
  topImage: BgImage,
}

const SuccessStoriesPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  const successStories =
    posts?.map(({ node: post }) => ({
      meta: post?.frontmatter?.location,
      title: post?.frontmatter.title,
      text: post?.excerpt,
      image: {
        src:
          post?.frontmatter?.featuredimage?.childImageSharp?.gatsbyImageData
            ?.images?.fallback?.src || images.bg.logo,
      },
      url: post?.fields.slug,
    })) || []

  const { howWeveHelped } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section {...howWeveHelped}>
        <CardGrid data={successStories} leftAlign />
      </Section>
    </Layout>
  )
}

const successStoriesQuery = () => (
  <StaticQuery
    query={graphql`
      query SuccessStoriesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "success-story" } } }
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
    render={(data, count) => <SuccessStoriesPage data={data} count={count} />}
  />
)

export default successStoriesQuery
