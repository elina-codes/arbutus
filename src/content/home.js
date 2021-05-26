import { routes } from "src/constants"
import React from "react"
import { Button, OpenContactModalButton } from "components"
import images from "src/images"
import { GiReceiveMoney as FinancingIcon } from "react-icons/gi"
import { IoMdCheckmarkCircleOutline as CheckIcon } from "react-icons/io"

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
      direction: "Left",
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
    content: [
      {
        icon: FinancingIcon,
        text: `Up to 100% financing`,
      },
      {
        icon: FinancingIcon,
        text: `Flexible payment terms`,
      },
      {
        icon: FinancingIcon,
        text: `Protect your cash flow`,
      },
      {
        icon: FinancingIcon,
        text: `Potential tax savings`,
      },
      {
        icon: FinancingIcon,
        text: `Get your equipment fast`,
      },
    ],
  },
  reasons: {
    dark: true,
    subtitle: `Reasons to partner with us`,
    content: [
      {
        icon: CheckIcon,
        title: "Challenged credit is not a problem",
        text:
          "We provide quick approvals for equipment leasing for those with challenged or bad credit.",
      },
      {
        icon: CheckIcon,
        title: "Fast and flexible",
        text:
          "Everyone’s situation is unique. We will listen and find a way to offer easy equipment financing in as little as 1 business day.",
      },
      {
        icon: CheckIcon,
        title: "Great customer service",
        text:
          "We work fast. Give us a call and Elizabeth, Mike, or Joey will speak with you directly.",
      },
      {
        icon: CheckIcon,
        title: "We don’t say no to any industry",
        text:
          "Whatever your industry, if you need equipment lease financing, we will make it work.",
      },
    ],
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
    content: [
      {
        icon: FinancingIcon,
        text: "1. Define",
      },
      {
        icon: FinancingIcon,
        text: "2. Apply",
      },
      {
        icon: FinancingIcon,
        text: "3. Review",
      },
      {
        icon: FinancingIcon,
        text: "4. Approve",
      },
      {
        icon: FinancingIcon,
        text: "5. Acquire",
      },
    ],
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
