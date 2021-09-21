import React from "react"
import Layout from "components/layout"
import { graphql, StaticQuery } from "gatsby"
import images from "src/images"
import pageSections from "src/page-content/blog"
import { StaticImage } from "gatsby-plugin-image"
import { Section, CardGrid } from "components"
const seo = {
  title: "Blog",
}

const BgImage = () => (
  <StaticImage
    layout="fullWidth"
    placeholder="blurred"
    alt=""
    src="../../images/banner-blog.jpg"
    style={{ gridArea: "1/1" }}
    fit="cover"
    formats={["auto", "jpg", "png", "jpeg"]}
  />
)

const topBannerData = {
  title: "Blog articles",
  description:
    "We have been providing equipment leases for over 40 years, and pride ourselves on being industry experts. ",
  topImage: BgImage,
}

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  const blogPosts = posts.map(({ node: post }) => ({
    meta: post?.fields.readingTime.text,
    title: post?.frontmatter.title,
    text: post?.excerpt,
    image: {
      src:
        post?.frontmatter?.featuredimage?.childImageSharp?.gatsbyImageData
          ?.images?.fallback?.src || images.bg.logo,
    },
    url: post?.fields.slug,
  }))

  const { recentArticles } = pageSections || {}
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section {...recentArticles}>
        <CardGrid data={blogPosts} leftAlign />
      </Section>
    </Layout>
  )
}

const blogQuery = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
    render={(data, count) => <BlogPage data={data} count={count} />}
  />
)

export default blogQuery
