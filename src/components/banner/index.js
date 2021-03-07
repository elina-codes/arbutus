import React from "react"
import { array, node } from "prop-types"
import useStyles from "./styles"
import { Section } from "components"
import { Box, Typography } from "@material-ui/core"

const Banner = ({ children, cta, data }) => {
  const classes = useStyles()
  const formatDataList = data => (
    <ul className={classes.bannerList}>
      {data.map((item, i) => (
        <li key={`item-${i}-${item}`} className={classes.bannerListItem}>
          <Typography variant="h5" component="span">
            {item}
          </Typography>
        </li>
      ))}
    </ul>
  )
  return (
    <Section dark className={classes.banner}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {data ? (
          formatDataList(data)
        ) : (
          <>
            <div>
              <Typography variant="h5" component="span">
                {children}
              </Typography>
            </div>
            {cta}
          </>
        )}
      </Box>
    </Section>
  )
}

Banner.propTypes = {
  children: node,
  cta: node,
  data: array,
}

export default Banner
