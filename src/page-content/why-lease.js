import React from "react"
import { Button } from "components"
import { routes } from "src/constants"
import { GiReceiveMoney as FinancingIcon } from "react-icons/gi"

const pageSections = {
  benefits: {
    title: "Benefits of equipment leasing",
    subtitle: "Keep your financials healthy and your business on track",
    description: `Leasing equipment offers business owners flexibility, lower risk and expense-side predictability and is a popular way to finance small business growth.`,
    content: [
      {
        icon: FinancingIcon,
        title: `Up to 100% financing`,
        text:
          "In most instances, we only ask for the first rental payment in advance, which is uncommon in our industry.",
      },
      {
        icon: FinancingIcon,
        title: `Tailored payment terms`,
        text:
          "We work with you to design a payment plan that suits you and your business.",
      },
      {
        icon: FinancingIcon,
        title: `Potential tax savings`,
        text:
          "Our leases are written as rental agreements, and in many instances, 100% of the monthly rental can be written off. Talk to your accountant about the tax benefits you may be entitled to.",
      },
      {
        icon: FinancingIcon,
        title: `Improve your balance sheet`,
        text:
          "Leasing keeps your financials healthy and your business growth on track. ",
      },
      {
        icon: FinancingIcon,
        title: `Protect your cash flow`,
        text:
          "We work with you to design a payment plan that suits you and your business.",
      },
      {
        icon: FinancingIcon,
        title: `Get your equipment fast`,
        text:
          "Securing a contract often relies on securing certain equipment. We provide you with financing faster than anyone in the business. (else?)",
      },
    ],
  },
  leasingFaq: {
    title: "Equipment leasing FAQ",
    subtitle:
      "Lease financing shouldn’t be complicated.  Give us a call to learn more.",
    button: (
      <Button color="primary" to={routes.faq.path}>
        Full FAQ page
      </Button>
    ),
    accordionContent: [
      {
        header: "What is equipment leasing?",
        content: `NEED INFO`,
      },
      {
        header: "How does an equipment lease work?",
        content: `NEED INFO`,
      },
      {
        header: "Why is leasing better than buying equipment?",
        content: `NEED INFO`,
      },
      {
        header: "Are equipment lease payments tax deductible?",
        content: `If you lease equipment from us, you are allowed to return the equipment to Arbutus if you wish. However, most business owners take advantage of the end-of-term Purchase Option on their lease as it rarely makes sense to return the equipment.  They'll find it will either disrupt their workflow or because the equipment is worth more than the Purchase Option amount. If they need to upgrade they often buy out their equipment using the Purchase Option, then trade their existing equipment in at a dealer for newer or different equipment. `,
      },
      {
        header: "Which is better, leasing or buying?",
        content: `NEED INFO`,
      },
      {
        header: "What is an equipment lease agreement?",
        content: `NEED INFO`,
      },
      {
        header: "Which is better, leasing or financing?",
        content: `NEED INFO`,
      },
    ],
  },
}

export default pageSections
