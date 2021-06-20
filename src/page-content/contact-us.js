import { routes } from "src/constants"
import React from "react"
import { Button } from "components"

const pageSections = {
  location: {
    subtitle: "Vancouver, Canada",
    light: true,
    inner: true,
    dense: true,
    center: true,
  },
  locationDetails: {
    inner: true,
    dense: true,
  },
  sendMessage: {
    subtitle: "Send us a message",
    dark: true,
    inner: true,
    dense: true,
    center: true,
  },
  faq: {
    subtitle: "Frequently Asked Questions",
    description: `Questions about your equipment lease?
    Chances are you’ll find answers here.`,
    button: (
      <Button color="primary" to={routes.faq.path}>
        Read FAQ page
      </Button>
    ),
    light: true,
    inner: true,
    dense: true,
  },
}

export default pageSections
