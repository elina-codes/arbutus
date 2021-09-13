import React from "react"
import { Button } from "components"
import { routes } from "src/constants"
import icons from "src/icons"

const pageSections = {
  benefits: {
    title: "Benefits of equipment leasing",
    subtitle: "Keep your financials healthy and your business on track",
    description: `Leasing equipment offers business owners flexibility, lower risk and expense-side predictability and is a popular way to finance small business growth.`,
    content: [
      {
        icon: icons.benefits.financing,
        svg: true,
        title: `Up to 100% financing`,
        text:
          "In most instances, we only ask for the first rental payment in advance, which is uncommon in our industry.",
      },
      {
        icon: icons.benefits.flexible,
        svg: true,
        title: `Tailored payment terms`,
        text:
          "We work with you to design a payment plan that suits you and your business.",
      },
      {
        icon: icons.benefits.tax,
        svg: true,
        title: `Potential tax savings`,
        text:
          "Our leases are written as rental agreements, and in many instances, 100% of the monthly rental can be written off. Talk to your accountant about the tax benefits you may be entitled to.",
      },
      {
        icon: icons.benefits.balance,
        svg: true,
        title: `Improve your balance sheet`,
        text:
          "Leasing keeps your financials healthy and your business growth on track. ",
      },
      {
        icon: icons.benefits.cashflow,
        svg: true,
        title: `Protect your cash flow`,
        text:
          "We work with you to design a payment plan that suits you and your business.",
      },
      {
        icon: icons.benefits.fast,
        svg: true,
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
    ],
  },
}

export default pageSections
