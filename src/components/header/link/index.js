import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { string, node } from "prop-types"
import { Link } from "@material-ui/core"
import useStyles from "./styles"

const HeaderLink = ({ to, children }) => {
  const classes = useStyles()

  return (
    <Link
      component={GatsbyLink}
      to={to}
      color="inherit"
      className={classes.root}
    >
      {children}
    </Link>
  )
}

HeaderLink.propTypes = {
  to: string,
  children: node,
}

export default HeaderLink
