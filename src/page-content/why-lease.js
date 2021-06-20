import React from "react"
import { Button } from "components"
import { routes } from "src/constants"

const pageSections = {
  benefits: {
    title: "Benefits of equipment leasing",
    subtitle: `Title about explaining benefits`,
    description: `Leasing equipment offers business owners flexibility, lower risk and expense-side predictability and is a popular way to finance small business growth.`,
  },
  leasingFaq: {
    title: "Equipment leasing FAQs",
    subtitle: "Personable title goes here",
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
