import React from "react"
import { array, node, object } from "prop-types"
import useStyles from "./styles"
import { Section, Text } from "components"
import * as MUI from "@material-ui/core"

const Banner = ({ children, cta, data }) => {
  const classes = useStyles()
  const formatDataList = data => (
    <ul className={classes.bannerList}>
      {data.map((item, i) => (
        <li key={`item-${i}-${item}`} className={classes.bannerListItem}>
          <Text variant="h5" component="span">
            {item}
          </Text>
        </li>
      ))}
    </ul>
  )
  return (
    <Section dense dark className={classes.banner}>
      <MUI.Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {data ? (
          formatDataList(data)
        ) : (
          <>
            <div>
              <Text variant="h4" strong component="span">
                {children}
              </Text>
            </div>
            <MUI.Button color={cta.color || "secondary"} variant="contained">
              {cta.text}
            </MUI.Button>
          </>
        )}
      </MUI.Box>
    </Section>
  )
}

Banner.propTypes = {
  children: node,
  cta: object,
  data: array,
}

export default Banner
