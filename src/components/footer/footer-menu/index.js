import React from "react"
import { phoneNumber, routes } from "src/constants"
import { Box, List, ListItem } from "@material-ui/core"
import useStyles from "./styles"
import { Button, OpenContactModalButton, Link, Section, Text } from "components"
import { AiOutlineLinkedin as LinkedInIcon } from "react-icons/ai"

const FooterMenu = () => {
  const classes = useStyles()
  const { brokers, aboutUs, blog, contactUs } = routes

  const sections = [
    {
      title: "Resources",
      items: [
        {
          title: aboutUs.title,
          href: aboutUs.path,
        },
        {
          title: "News & Press",
          href: "#",
        },
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
      items: [
        {
          title:
            "Morbi condimentum elit sed odio facilisis, vel venenatis tortor fermentum.",
          href: "/",
        },
        {
          title: "Donec aliquet felis sed nulla consequat tempus.",
          href: "/",
        },
        {
          title: "Integer sed erat vehicula, malesuada erat id, finibus erat.",
          href: "/",
        },
      ],
    },
    {
      title: "Contact Us",
      items: [
        {
          type: "button",
          button: (
            <Button color="default" href={phoneNumber.href}>
              {phoneNumber.text}
            </Button>
          ),
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
      <Box display="flex">
        {sections.map((section, i) => (
          <Box
            className={classes.footerMenuSection}
            key={`footerMenu-section-${i}`}
            p={3}
            flex={section.flex || 2}
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
          </Box>
        ))}
      </Box>
    </Section>
  )
}

export default FooterMenu
