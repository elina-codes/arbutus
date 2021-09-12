import React from "react"
import { Accordion, Link, PhoneLink } from "components"

const generalFAQ = [
  {
    header:
      "I am interested in a piece of used equipment; can you help me with that?",
    content: `Yes! We provide fast, flexible equipment leasing on new or used equipment for any industry. Give us a call and we can get you started.`,
  },
  {
    header: "How do I know I will qualify?",
    content: `As an independent financing company, we are not bound by the same decision-making practices and regulations of banks. We own our lease portfolio, so credit decisions are made in house. Give us a call – we’re here to find ways to say “yes”.`,
  },
  {
    header: "How much do I have to pay upfront? ",
    content: `We understand cash-flow and in many cases only need for the first rental payment in advance. This sets us apart from most lenders who require down payments.`,
  },
  {
    header: "I have equipment. I need cash. How can you help me with that?",
    content: `Call us to discuss a sale-leaseback option, where we purchase your equipment &amp; lease it back to you over time to improve your cashflow.`,
  },
  {
    header: "What are my options when my lease is up?",
    content: `At the end of your lease, you may exercise the Purchase Option or return the equipment to Arbutus. Most business owners take advantage of the end-of-term Purchase Option because the equipment is worth more than the Purchase Option amount, or because returning the equipment to Arbutus would disrupt their workflow.`,
  },
  {
    header: "My credit is not the best, can I still qualify for a lease?",
    content: `Even with imperfect credit, we will work with you to find a solution. Unlike our competitors, we base our decisions on a multitude of parameters including relationship, business performance and potential. We look at the big picture and don’t get stuck on the usual business algorithms and metrics.`,
  },
  {
    header: "How long will it take to approve my equipment lease application?",
    content: `We aim to make the lease financing process as simple and efficient as possible, to get you your equipment fast. Expect to hear from us in 1 business day regarding your application.`,
  },
]

const equipmentFaq = [
  {
    header: "How does an equipment lease work?",
    content: `Start by filling out an application and providing us with a background of your business and the equipment you want or need. Once your credit application is approved and a lease agreement is in place, we finalize the purchase and you to get to put your newly acquired equipment to work.`,
  },
  {
    header: "Are equipment lease payments tax deductible? ",
    content: `Equipment lease payments do often have tax advantages for business owners. Check with your accountant regarding your eligibility for deductions.`,
  },
  {
    header: "Which is better, leasing or buying?",
    content: `Leasing keeps your financials healthy and your business on track, by allowing you to keep your cash in your business – working for you, instead of tied up in a piece of equipment. Leasing also has potential tax advantages versus a lump sum purchase. `,
  },
  {
    header: "What is an equipment lease agreement?",
    content: `An equipment lease agreement is a contractual document that defines the agreed upon terms of our deal: term, payment, conditions, end-of-term purchase option etc.`,
  },
  {
    header: "Which is better, leasing or financing?",
    content: `A lease has more potential tax benefits than financing because it is written as a rental agreement, and in many cases, 100% of the monthly rental can be written off as a rental expense. When financing equipment, only the interest amount is tax deductible. Check with your accountant for details on your specific situation and for current tax information.`,
  },
]

const capitalFaq = [
  {
    header: "How do capital leases affect financial statements?",
    content: `Leasing keeps your financial statements healthy. A lease is written as a rental agreement, and in many cases, 100% of the monthly rental can be written off as a rental expense on your financial statements, rather than a depreciating asset. Talk to your accountant about the potential benefits and current tax information.`,
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
