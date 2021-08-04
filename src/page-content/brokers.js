import {
  NumberCircleOne as OneIcon,
  NumberCircleTwo as TwoIcon,
  NumberCircleThree as ThreeIcon,
} from "phosphor-react"
import { IoMdCheckmarkCircleOutline as CheckIcon } from "react-icons/io"
import PlaceholderSSImage1 from "src/images/ss1.png"

const pageSections = {
  why: {
    subtitle: "Why broker with us",
    light: true,
    inner: true,
    dense: true,
    content: [
      {
        icon: OneIcon,
        text:
          "We are a B/C lender that specializes in high-risk deals. We make the deals that no one else can or wants to do.",
      },
      {
        icon: TwoIcon,
        text:
          "Approvals are not bound by checking off criteria boxes. We are empathetic to your client’s situation, so each deal is evaluated on its own merit, and we find a way to help you and your clients succeed. We even go the extra mile to keep your client in business during tough times.",
      },
      {
        icon: ThreeIcon,
        text:
          "We protect your business. We refer any of your existing customers back to you, should your client contact us directly about new business.",
      },
    ],
  },
  truePartnership: {
    subtitle: "A true partnership",
    description: `We have long, loyal relationships with our brokers because we care. 
    
    Contact us, and Elizabeth, Mike, or Joey will speak with you directly. 
    
    That’s our promise to you.`,
    dark: true,
    inner: true,
    dense: true,
  },
  moreReasons: {
    title: "More reasons to partner with us",
    subtitle: "Personable title goes here",
    content: [
      {
        icon: CheckIcon,
        title: "Fast and flexible",
        text:
          "Everyone’s situation is unique. We will listen and find a way to offer easy equipment financing in as little as 1 business day.",
      },
      {
        icon: CheckIcon,
        title: "Adaptable lending criteria",
        text:
          "We’re here to find ways to say yes. We will listen to and understand your client’s situation and find a way to make it work.",
      },
      {
        icon: CheckIcon,
        title: "Challenged credit is not a problem",
        text:
          "We provide quick approvals for equipment leasing for those with challenged or bad credit.",
      },
      {
        icon: CheckIcon,
        title: "We don’t say no to any industry",
        text:
          "Whatever your industry, if you need equipment lease financing, we will make it work.",
      },
      {
        icon: CheckIcon,
        title: "Great customer service",
        text:
          "We work fast. Give us a call and Elizabeth, Mike, or Joey will speak with you directly.",
      },
      {
        icon: CheckIcon,
        title: "We won’t cancel",
        text:
          "When we say yes - we do it. We don’t reject a deal 3/4s of the way through, and we keep you in the loop at every step.",
      },
    ],
  },
  recentDeals: {
    title: "Recent deals",
    subtitle: "Personable title goes here",
    content: [
      {
        meta: "Some other piece of equipment",
        image: {
          src: PlaceholderSSImage1,
          alt: "Some other piece of equipment",
        },
        title: "$12,000,000",
        text:
          "A growing company ordered new dozers, rock trucks and excavator to be delivered over a 12-month timeframe. We provided a capital lease facility with 72-month terms that would allow the customer to draw funds as needed to faciliate the random delivery of the equipment.",
      },
      {
        meta: "Some other piece of equipment",
        image: {
          src: PlaceholderSSImage1,
          alt: "Some other piece of equipment",
        },
        title: "$12,000,000",
        text:
          "A growing company ordered new dozers, rock trucks and excavator to be delivered over a 12-month timeframe. We provided a capital lease facility with 72-month terms that would allow the customer to draw funds as needed to faciliate the random delivery of the equipment.",
      },
      {
        meta: "Some other piece of equipment",
        image: {
          src: PlaceholderSSImage1,
          alt: "Some other piece of equipment",
        },
        title: "$12,000,000",
        text:
          "A growing company ordered new dozers, rock trucks and excavator to be delivered over a 12-month timeframe. We provided a capital lease facility with 72-month terms that would allow the customer to draw funds as needed to faciliate the random delivery of the equipment.",
      },
    ],
  },
}

export default pageSections
