import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { string, node } from "prop-types"
import { Link } from "@material-ui/core"
import useStyles from "./styles"

const FooterMenu = ({ children }) => {
  const classes = useStyles()

  return (
    <div>
      Bottom Menu{" "}
      <Link
        component={GatsbyLink}
        to="/"
        color="inherit"
        className={classes.root}
      >
        {children}
      </Link>
    </div>
  )
}

FooterMenu.propTypes = {
  to: string,
  children: node,
}

export default FooterMenu
