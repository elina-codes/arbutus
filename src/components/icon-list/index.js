import React from "react"
import classNames from "classnames"
import { Text } from "components"
import useStyles from "./styles"

const IconList = ({ data = [], singleCol, outlined }) => {
  const classes = useStyles()

  return (
    <ul
      className={classNames(classes.iconList, {
        [classes.singleCol]: singleCol,
      })}
    >
      {data.map((item, i) => {
        const { icon: Icon, prefix, title, text, titleVariant = "h5" } = item
        return (
          <li
            key={`iconList-item-${i}-${title}`}
            className={classes.iconListItem}
          >
            <div
              className={classNames(classes.iconListIconContainer, {
                [classes.prefix]: !!prefix,
                [classes.outlined]: outlined,
              })}
            >
              {Icon && <Icon size={50} />}
              {prefix && <div className={classes.iconListPrefix}>{prefix}</div>}
            </div>
            <div className={classes.iconListContent}>
              {title && (
                <Text variant={titleVariant} className={classes.iconListTitle}>
                  {title}
                </Text>
              )}
              {text && <Text>{text}</Text>}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default IconList
