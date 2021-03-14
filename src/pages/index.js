import React from "react"
import Layout from "components/layout"
import { Banner, Section } from "components"
import placeholderData from "../placeholder-data"
import { Button } from "@material-ui/core"

const seo = {
  title: "Home",
}

const topBannerData = {
  title: "Home",
  description: placeholderData.paragraph,
  cta: placeholderData.button,
  bgImage: placeholderData.image,
}

const pageSections = {
  industriesWeServe: {
    title: "Industries we serve",
    subtitle: `Here to serve you.
    Whatever the industry.`,
    description: `As one of Western Canada’s top equipment leasing companies, we serve all industries in British Columbia, Alberta, Manitoba and Saskatchewan.`,
  },
  aboutUs: {
    title: "About us",
    subtitle: "40 years of heavy equipment leasing",
    description: `From construction equipment to used restaurant equipment, we customize equipment leases to fit your unique needs. We find the most competitive and flexible capital leasing solutions, and find them fast. 

    Arbutus Capital is one of the top equipment leasing companies serving British-Columbia, Alberta, Saskatchewan and Manitoba. That’s because even if you find yourself with imperfect credit, we work with you to find the best solution. 
    
    We’re here to find ways to say yes.`,
    image: {
      src: placeholderData.image,
      position: "right",
      alt: "Placeholder",
    },
    button: "View more industries",
  },
  benefits: {
    title: "Benefits of equipment leasing",
    subtitle: `We’re here to help you succeed.`,
    description: `Deciding between leasing versus buying equipment can be difficult, so here are some of the core benefits you can expect from leasing equipment with us.`,
    button: "View more benefits",
  },
  reasons: {
    dark: true,
    subtitle: `Reasons to partner with us`,
  },
  process: {
    title: "Our 5 step process",
    subtitle: `Getting equipment has never been easier.`,
    description: `With 40 years of experience, we’ve streamlined our process and pride ourselves on financing equipment faster than anyone in the business.`,
    button: "More details",
  },
  helped: {
    title: `How we've helped people`,
    subtitle: `People first.
    Something about us caring.`,
    button: "More success stories",
  },
}

const IndexPage = () => (
  <Layout {...{ seo, topBannerData }}>
    <Section {...pageSections?.industriesWeServe}>
      {/* <Card image={placeholderData.image} title="Test title">
        Oh hi
        </Card>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Section>
    <Banner
      cta={
        <Button color="secondary" variant="contained">
          {placeholderData.button}
        </Button>
      }
    >
      Do something over here
    </Banner>
    <Section {...pageSections?.aboutUs}></Section>
    <Section {...pageSections?.benefits}></Section>
    <Section {...pageSections?.reasons}></Section>
    <Section {...pageSections?.process}></Section>
    <Section {...pageSections?.helped}></Section>
  </Layout>
)

export default IndexPage
