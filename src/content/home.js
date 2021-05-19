import { routes } from "src/constants"
import React from "react"
import { Button, OpenContactModalButton } from "components"
import images from "src/images"

const pageSections = {
  industriesWeServe: {
    title: "Industries we serve",
    subtitle: `Here to serve you.
    Whatever the industry.`,
    description: `As one of Western Canada’s top equipment leasing companies, we serve all industries in British Columbia, Alberta, Manitoba and Saskatchewan.`,
    button: (
      <Button color="primary" to={routes.industries.path}>
        View more industries
      </Button>
    ),
  },
  aboutUs: {
    title: "About us",
    subtitle: "40 years of heavy equipment leasing",
    description: `From construction equipment to used restaurant equipment, we customize equipment leases to fit your unique needs. We find the most competitive and flexible capital leasing solutions, and find them fast. 

    Arbutus Capital is one of the top equipment leasing companies serving British-Columbia, Alberta, Saskatchewan and Manitoba. That’s because even if you find yourself with imperfect credit, we work with you to find the best solution. 
    
    We’re here to find ways to say yes.`,
    image: {
      src: images.about.family,
      position: "right",
      alt: "Placeholder",
    },
    button: (
      <Button to={routes.industries.path} color="primary">
        View more industries
      </Button>
    ),
  },
  benefits: {
    title: "Benefits of equipment leasing",
    subtitle: `We’re here to help you succeed.`,
    description: `Deciding between leasing versus buying equipment can be difficult, so here are some of the core benefits you can expect from leasing equipment with us.`,
    button: (
      <Button to={routes.whyLease.path} color="primary">
        View more benefits
      </Button>
    ),
  },
  reasons: {
    dark: true,
    subtitle: `Reasons to partner with us`,
  },
  process: {
    title: "Our 5 step process",
    subtitle: `Getting equipment has never been easier.`,
    description: `With 40 years of experience, we’ve streamlined our process and pride ourselves on financing equipment faster than anyone in the business.`,
    button: (
      <Button to={routes.howItWorks.path} color="primary">
        More details
      </Button>
    ),
  },
  startLeasing: {
    subtitle: "Start leasing equipment",
    description: `The first step takes less than a minute and we’ll get back to you within 1 business day..`,
    button: <OpenContactModalButton>Get started</OpenContactModalButton>,
    inner: true,
    light: true,
    center: true,
  },
  areYouABroker: {
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
  },
}

export default pageSections
