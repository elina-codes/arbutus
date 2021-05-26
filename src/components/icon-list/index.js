import React from "react"
import classNames from "classnames"
import { Text } from "components"
import useStyles from "./styles"

const IconList = ({ data }) => {
  const classes = useStyles()

  return (
    <ul className={classes.iconList}>
      {data.map((item, i) => {
        const { icon: Icon, prefix, title, text } = item
        return (
          <li key={`iconList-item-${title}`} className={classes.iconListItem}>
            <div
              className={classNames(classes.iconListIconContainer, {
                [classes.prefix]: !!prefix,
              })}
            >
              {Icon && <Icon size={50} color="#fff" />}
              {prefix && <div className={classes.iconListPrefix}>{prefix}</div>}
            </div>
            <div className={classes.iconListContent}>
              <Text variant="h5">{title}</Text>
              <Text>{text}</Text>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default IconList
