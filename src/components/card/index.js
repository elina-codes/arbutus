import React from "react"
import classNames from "classnames"
import * as MUI from "@material-ui/core"
import { Link, Text } from "components"
import ScrollAnimation from "react-animate-on-scroll"
import useStyles from "./styles"
import { FaChevronRight as ReadMoreIcon } from "react-icons/fa"

const Card = ({ dark, delay, title, meta, image, url, children }) => {
  const classes = useStyles()
  const actions = url ? (
    <Link
      href={url}
      external={!url.startsWith("/") && !url.startsWith("#")}
      className={classes.actionLink}
    >
      Read more <ReadMoreIcon className={classes.readMoreIcon} />
    </Link>
  ) : null

  return (
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      animateOnce
      duration={0.5}
      style={{ height: "100%" }}
      {...{ delay }}
    >
      <MUI.Card className={classNames({ [classes.dark]: dark })}>
        {image.src && (
          <MUI.CardMedia
            component="img"
            loading="lazy"
            alt={image.alt}
            height="140"
            image={image.src}
            title={image.alt}
          />
        )}
        <MUI.CardContent>
          {meta && (
            <Text gutterBottom variant="caption">
              {meta}
            </Text>
          )}
          {title && (
            <Text gutterBottom variant="h5" component="h3">
              {title}
            </Text>
          )}
          {children}
        </MUI.CardContent>
        {actions && <MUI.CardActions>{actions}</MUI.CardActions>}
      </MUI.Card>
    </ScrollAnimation>
  )
}

export default Card
