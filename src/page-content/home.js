import React from "react"
import { routes } from "src/constants"
import { Button } from "components"
import images from "src/images"
import icons from "src/icons"
import { IoMdCheckmarkCircleOutline as CheckIcon } from "react-icons/io"
import {
  GiFarmTractor as DefineIcon,
  GiPartyPopper as AcquireIcon,
} from "react-icons/gi"
import { TiClipboard as ApplyIcon } from "react-icons/ti"
import { BsClockHistory as ReviewIcon } from "react-icons/bs"
import { AiOutlineLike as ApprovalIcon } from "react-icons/ai"

const pageSections = {
  industriesWeServe: {
    title: "Industries we serve",
    subtitle: `Here to serve you,
    whatever the industry.`,
    description: `As one of Western Canada’s top equipment leasing companies, we serve most industries in British Columbia, Alberta, Saskatchewan, and Manitoba.`,
    button: (
      <Button color="primary" to={routes.industries.path}>
        View more industries
      </Button>
    ),
  },
  aboutUs: {
    title: "About us",
    subtitle: "40 years of heavy equipment leasing",
    content: `From construction equipment to used restaurant equipment, we customize equipment leases to fit your unique needs. We find the most competitive and flexible capital leasing solutions, and find them fast. 

    Arbutus Capital is one of the top equipment leasing companies serving British Columbia, Alberta, Saskatchewan, and Manitoba. That’s because even if you find yourself with imperfect credit, we work with you to find the best solution. 
    
    We’re here to find ways to say yes.`,
    image: {
      src: images.about.family,
      position: "right",
      alt: "Placeholder",
      direction: "Left",
      alignTop: true,
    },
    button: (
      <Button to={routes.aboutUs.path} color="primary">
        More about us
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
        icon: icons.benefits.financing,
        svg: true,
        text: `Up to 100% financing`,
      },
      {
        icon: icons.benefits.flexible,
        svg: true,
        text: `Flexible payment terms`,
      },
      {
        icon: icons.benefits.cashflow,
        svg: true,
        text: `Protect your cash flow`,
      },
      {
        icon: icons.benefits.tax,
        svg: true,
        text: `Potential tax savings`,
      },
      {
        icon: icons.benefits.fast,
        svg: true,
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
        title: "Imperfect Credit is not a problem",
        text:
          "We provide quick approvals for equipment leasing for a wide variety of credit types, including those with an imperfect credit history.",
      },
      {
        icon: CheckIcon,
        title: "Fast and flexible",
        text:
          "Everyone’s situation is unique. We will listen and find a way to offer easy equipment financing in as little as one business day.",
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
    description: `With 40 years of experience, we’ve streamlined our process and pride ourselves on financing equipment faster than anyone else in the business.`,
    button: (
      <Button to={routes.howItWorks.path} color="primary">
        More details
      </Button>
    ),
    content: [
      {
        icon: DefineIcon,
        text: "1. Define",
      },
      {
        icon: ApplyIcon,
        text: "2. Apply",
      },
      {
        icon: ReviewIcon,
        text: "3. Review",
      },
      {
        icon: ApprovalIcon,
        text: "4. Approve",
      },
      {
        icon: AcquireIcon,
        text: "5. Acquire",
      },
    ],
  },
}

export default pageSections
