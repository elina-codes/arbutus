import React from "react"
import { Button, OpenContactModalButton, Section } from "components"
import * as Mui from "@material-ui/core"
import ScrollAnimation from "react-animate-on-scroll"
import { routes } from "src/constants"

const FooterDoubleCta = () => {
  const startLeasing = {
    subtitle: "Start leasing equipment",
    description: `The first step takes less than a minute and we’ll get back to you within 1 business day..`,
    button: <OpenContactModalButton>Get started</OpenContactModalButton>,
    inner: true,
    light: true,
    center: true,
  }
  const areYouABroker = {
    subtitle: "Are you a broker?",
    description: `We have great relationships with our brokers and offer quick approvals for capital leasing..`,
    button: (
      <Button to={routes.brokers.path} color="primary">
        Learn more
      </Button>
    ),
    inner: true,
    light: true,
    center: true,
  }

  return (
    <Section dark>
      <Mui.Grid container spacing={5}>
        <Mui.Grid item xs={12} md>
          <ScrollAnimation
            animateIn="animate__fadeInRight"
            animateOnce
            duration={0.7}
          >
            <Section {...startLeasing}></Section>
          </ScrollAnimation>
        </Mui.Grid>
        <Mui.Grid item xs={12} md>
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            animateOnce
            duration={0.7}
          >
            <Section {...areYouABroker}></Section>
          </ScrollAnimation>
        </Mui.Grid>
      </Mui.Grid>
    </Section>
  )
}

export default FooterDoubleCta
