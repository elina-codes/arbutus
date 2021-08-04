import React from "react"
import { routes } from "src/constants"
import { List, ListItem } from "@material-ui/core"
import useStyles from "./styles"
import {
  PhoneLink,
  OpenContactModalButton,
  Link,
  Section,
  Text,
} from "components"
import { AiOutlineLinkedin as LinkedInIcon } from "react-icons/ai"
import { graphql, StaticQuery } from "gatsby"

const FooterMenu = ({ data }) => {
  const classes = useStyles()
  const { brokers, aboutUs, blog, contactUs } = routes
  const { edges: posts } = data.allMarkdownRemark

  const blogPosts =
    posts?.map(({ node: post }) => ({
      title: post?.frontmatter.title,
      href: post?.fields.slug,
    })) || []

  const sections = [
    {
      title: "Resources",
      items: [
        {
          title: aboutUs.title,
          href: aboutUs.path,
        },
        // {
        //   title: "News & Press",
        //   href: newsPress.path,
        // },
        {
          title: contactUs.title,
          href: contactUs.path,
        },
        {
          title: brokers.title,
          href: brokers.path,
        },
        {
          title: blog.title,
          href: blog.path,
        },
        {
          title: "Full application form",
          href: "#",
        },
      ],
    },
    {
      title: "Social Media",
      items: [
        {
          title: (
            <>
              <LinkedInIcon size={26} style={{ verticalAlign: "middle" }} />{" "}
              LinkedIn
            </>
          ),
          href: "https://ca.linkedin.com/company/arbutus-capital",
          external: true,
        },
      ],
    },
    {
      title: "Blog",
      flex: 3,
      items: blogPosts,
    },
    {
      title: "Contact Us",
      items: [
        {
          type: "button",
          button: <PhoneLink color="default" button />,
        },
        {
          type: "button",
          button: <OpenContactModalButton>Apply Now</OpenContactModalButton>,
        },
      ],
    },
  ]

  return (
    <Section black className={classes.footerMenu}>
      <nav className={classes.footerNav}>
        {sections.map((section, i) => (
          <div
            className={classes.footerMenuSection}
            key={`footerMenu-section-${i}`}
          >
            <Text variant="h4">{section?.title}</Text>
            <List>
              {section?.items?.map((item, j) => (
                <ListItem
                  disableGutters
                  className={classes.footerMenuListItem}
                  dense
                  key={`footerMenu-section-${i}-item-${j}`}
                >
                  {item.type === "button" ? (
                    item.button
                  ) : (
                    <Link
                      {...{
                        href: item?.href,
                        external: item?.external,
                        color: "inherit",
                      }}
                    >
                      {item.title}
                    </Link>
                  )}
                </ListItem>
              ))}
            </List>
          </div>
        ))}
      </nav>
    </Section>
  )
}

const footerMenuWithBlog = () => (
  <StaticQuery
    query={graphql`
      query FooterMenuBlogQuery {
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
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FooterMenu data={data} count={count} />}
  />
)

export default footerMenuWithBlog
