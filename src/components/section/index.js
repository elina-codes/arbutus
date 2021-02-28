import React from "react"
import { bool, string, node } from "prop-types"
import useStyles from "./styles"
import SectionHeading from "./heading"
import { Button } from "@material-ui/core"

const Section = ({
  bgImage,
  button,
  children,
  className,
  description,
  hero,
  subtitle,
  title,
  ...props
}) => {
  const classes = useStyles()

  return (
    <div
      className={[classes.section, hero ? classes.hero : "", className].join(
        " "
      )}
      {...props}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <SectionHeading {...{ title, subtitle, description, hero }} />
      {children}
      {button && (
        <Button variant="contained" color="secondary">
          {button}
        </Button>
      )}
    </div>
  )
}

Section.propTypes = {
  align: string,
  bgImage: string,
  button: string,
  children: node,
  description: string,
  hero: bool,
  subtitle: string,
  title: string,
}

export default Section
