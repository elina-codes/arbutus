import React from "react"
import { string, node } from "prop-types"
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
        {image && (
          <MuiCardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title="Contemplative Reptile"
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
  image: string,
  actions: node,
  children: node,
}

export default Card
