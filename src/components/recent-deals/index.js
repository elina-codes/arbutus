import React from "react"
import { CardGrid, Section } from "components"
import { graphql, StaticQuery } from "gatsby"

const RecentDeals = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  const recentDeals =
    posts?.map(({ node: post }) => {
      const {
        frontmatter: { title, amount, description, featuredimage },
      } = post || {}
      const dealAmount = amount ? `$${Number(amount).toLocaleString()}` : "N/A"
      return {
        meta: title,
        title: dealAmount,
        text: description,
        image: {
          src:
            featuredimage?.childImageSharp?.gatsbyImageData?.images?.fallback
              ?.src,
        },
      }
    }) || []

  return (
    <Section
      {...{
        title: `Recent Deals`,
        subtitle: `Personable title goes here`,
      }}
    >
      <CardGrid data={recentDeals} dark />
    </Section>
  )
}

const recentDealsQuery = () => (
  <StaticQuery
    query={graphql`
      query RecentDealsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
          filter: { frontmatter: { templateKey: { eq: "recent-deal" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                description
                amount
                title
                templateKey
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
    render={(data, count) => <RecentDeals data={data} count={count} />}
  />
)

export default recentDealsQuery
