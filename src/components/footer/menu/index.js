import React from "react"
import { Box, Button, List, ListItem } from "@material-ui/core"
import useStyles from "./styles"
import placeholderData from "src/placeholder-data"
import { Link, Section, Text } from "components"

const FooterMenu = () => {
  const classes = useStyles()

  const sections = [
    {
      title: "Resources",
      items: placeholderData.navData,
    },
    {
      title: "Social Media",
      items: [
        {
          title: placeholderData.icon,
          href: "/",
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
          buttonProps: {
            variant: "contained",
          },
          title: placeholderData.button.text,
        },
        {
          type: "button",
          buttonProps: {
            variant: "contained",
            color: "secondary",
          },
          title: placeholderData.button.text,
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
                  dense
                  key={`footerMenu-section-${i}-item-${j}`}
                >
                  {item.type === "button" ? (
                    <Button variant="contained" {...item.buttonProps}>
                      {item.title}
                    </Button>
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
