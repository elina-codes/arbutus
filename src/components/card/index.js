import React from "react"
import { string, node } from "prop-types"
import {
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardActionArea as MuiCardActionArea,
  CardMedia as MuiCardMedia,
  CardContent as MuiCardContent,
  Typography,
} from "@material-ui/core"
import useStyles from "./styles"

const Card = ({ title, meta, image, actions, children }) => {
  const classes = useStyles()

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
            <Typography gutterBottom variant="caption">
              {meta}
            </Typography>
          )}
          {title && (
            <Typography gutterBottom variant="h5" component="h3">
              {title}
            </Typography>
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
