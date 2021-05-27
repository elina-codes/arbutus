import React from "react"
import Layout from "components/layout"
import { Accordion, OpenContactModalButton, Banner, Section } from "components"
import images from "src/images"
import pageSections from "src/content/why-lease"

const seo = {
  title: "Why Lease",
}

const WhyLeasePage = () => {
  const { benefits, leasingFaq } = pageSections || {}

  const topBannerData = {
    title: "Why lease?",
    description:
      "Explore the benefits of leasing vs. buying equipment to help choose what’s right for you.",
    cta: <OpenContactModalButton>Start your lease</OpenContactModalButton>,
    bgImage: images.banners.whyLease,
  }

  const {
    accordionContent: leasingFaqContent,
    ...leasingFaqSection
  } = leasingFaq

  return (
    <Layout {...{ seo, topBannerData, showSuccessStories: true }}>
      <Section {...benefits}></Section>
      <Banner
        cta={<OpenContactModalButton>Get started</OpenContactModalButton>}
      >
        Have questions about financing an equipment lease? We’re here to help.
      </Banner>
      <Section {...leasingFaqSection}>
        <Accordion data={leasingFaqContent} />
      </Section>
    </Layout>
  )
}

export default WhyLeasePage
