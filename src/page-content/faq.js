import React from "react"
import { Accordion, Link, PhoneLink } from "components"

const generalFAQ = [
  {
    header:
      "I am interested in a piece of used equipment; can you help me with that?",
    content: `NEED INFO`,
  },
  {
    header: "How do I know I will qualify?",
    content: `NEED INFO`,
  },
  {
    header: "How much do I have to pay upfront?",
    content: `NEED INFO`,
  },
  {
    header: "I have equipment. I need cash. How can you help me with that? ",
    content: `NEED INFO`,
  },
  {
    header: "What are my options when my lease is up?",
    content: `NEED INFO`,
  },
  {
    header: "My credit is not the best, can I still qualify for a lease?",
    content: `NEED INFO`,
  },
  {
    header: "How long will it take to approve my equipment lease application?",
    content: `NEED INFO`,
  },
  {
    header:
      "My revenue is impacted seasonally. Can I get a payment plan that provides some flexibility in months when sales are lower? ",
    content: `NEED INFO`,
  },
  {
    header: "What is the interest rate on equipment leasing?",
    content: `NEED INFO`,
  },
]

const equipmentFaq = [
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
    content: `If you lease equipment from us, you are allowed to return the equipment to Arbutus if you wish. However, most business owners take advantage of the end-of-term Purchase Option on their lease as it rarely makes sense to return the equipment.  They'll find it will either disrupt their workflow or because the equipment is worth more than the Purchase Option amount. If they need to upgrade they often buy out their equipment using the Purchase Option, then trade their existing equipment in at a dealer for newer or different equipment. 
      
    For more information about this, check out our blog article:\nInsert the name of a blog article here if it makes sense`,
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
]

const capitalFaq = [
  {
    header: "How do capital leases affect financial statements?",
    content: `NEED INFO`,
  },
  {
    header: "How do capital leases work?",
    content: `NEED INFO`,
  },
  {
    header:
      "What is the difference between a capital lease and a finance lease?",
    content: `NEED INFO`,
  },
]

const pageSections = {
  sections: [
    {
      description: (
        <>
          If you still can’t find an answer to your question, please give us a
          call at <PhoneLink /> or send us an email at{" "}
          <Link external href="mailto:lease@arbutuscapital.com">
            lease@arbutuscapital.com
          </Link>
        </>
      ),
      noPaddingBottom: true,
    },
    {
      menuItem: "subtitle",
      subtitle: "Credit, payments, and process",
      content: generalFAQ,
      component: Accordion,
    },
    {
      menuItem: "subtitle",
      subtitle: "Equipment leasing",
      content: equipmentFaq,
      component: Accordion,
    },
    {
      menuItem: "subtitle",
      subtitle: "Capital leasing",
      content: capitalFaq,
      component: Accordion,
    },
  ],
}

export default pageSections
