import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  Typography,
} from "@material-ui/core"
import useStyles from "./styles"
import placeholderData from "src/placeholder-data"

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
          title: placeholderData.button,
        },
        {
          type: "button",
          buttonProps: {
            variant: "contained",
            color: "secondary",
          },
          title: placeholderData.button,
        },
      ],
    },
  ]

  return (
    <div className={classes.footerMenu}>
      <Box display="flex">
        {sections.map((section, i) => (
          <Box
            className={classes.footerMenuSection}
            key={`footerMenu-section-${i}`}
            p={3}
          >
            <Typography variant="h5">{section?.title}</Typography>
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
                      component={GatsbyLink}
                      href={item?.href}
                      external={item.external}
                      color="inherit"
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
    </div>
  )
}

export default FooterMenu
