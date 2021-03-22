import React from "react"
import { array, string } from "prop-types"
import useStyles from "./styles"
import classNames from "classnames"
import { Section, Text } from "components"

const PageMenu = ({ className, sections = [] }) => {
  const classes = useStyles()

  return (
    <Section dark className={classNames(classes.pageMenu, className)}>
      <ul className={classes.pageMenuList}>
        {sections.map(section => (
          <li key={section.target} className={classes.pageMenuListItem}>
            <Text variant="h4" component="span">
              <a className={classes.sectionTitle} href={section.target}>
                {section.title}
              </a>
            </Text>
          </li>
        ))}
      </ul>
    </Section>
  )
}

PageMenu.propTypes = {
  sections: array,
  className: string,
}

export default PageMenu
