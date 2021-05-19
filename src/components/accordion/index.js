import React from "react"
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import useStyles from "./styles"
import { Text } from "components"

const Accordion = ({ data = [], ...props }) => {
  const classes = useStyles()

  return (
    <div {...props}>
      {data.map((item, i) => (
        <MuiAccordion key={item.header} className={classes.accordion}>
          <MuiAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i}d-content`}
            id={`panel${i}d-header`}
            className={classes.accordionHeader}
          >
            <Text>{item.header}</Text>
          </MuiAccordionSummary>
          <MuiAccordionDetails className={classes.accordionContent}>
            <Text preLine>{item.content}</Text>
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  )
}

export default Accordion
