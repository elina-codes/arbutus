import React from "react"
import { string, node, object } from "prop-types"
import {
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardActionArea as MuiCardActionArea,
  CardMedia as MuiCardMedia,
  CardContent as MuiCardContent,
} from "@material-ui/core"
import { Text } from "components"

const Card = ({ title, meta, image, actions, children }) => {
  return (
    <MuiCard>
      <MuiCardActionArea>
        {image.src && (
          <MuiCardMedia
            component="img"
            alt={image.alt}
            height="140"
            image={image.src}
            title={image.alt}
          />
        )}
        <MuiCardContent>
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
        </MuiCardContent>
      </MuiCardActionArea>
      {actions && <MuiCardActions>{actions}</MuiCardActions>}
    </MuiCard>
  )
}

Card.propTypes = {
  title: string,
  meta: string,
  image: object,
  actions: node,
  children: node,
}

export default Card
