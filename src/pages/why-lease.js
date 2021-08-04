import React from "react"
import Layout from "components/layout"
import * as Mui from "@material-ui/core"
import {
  Accordion,
  OpenContactModalButton,
  Banner,
  Section,
  IconText,
  Text,
  Card,
} from "components"
import images from "src/images"
import pageSections from "src/page-content/why-lease"

const seo = {
  title: "Why Lease",
}

const WhyLeasePage = () => {
  const { benefits, leasingFaq } = pageSections || {}
  const { content: benefitsContent, ...benefitsSection } = benefits

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
      <Section {...benefitsSection}>
        <Mui.Grid container spacing={5}>
          {benefitsContent.map(b => (
            <Mui.Grid
              key={`values-${b.title}`}
              container
              direction="column"
              item
              xs={12}
              sm={6}
              md={4}
              alignItems="center"
            >
              <Card
                iconTitle={
                  <IconText
                    icon={b.icon}
                    color={b.iconColor || "inherit"}
                    text={b.title}
                    size="md"
                    center
                    dark
                  />
                }
              >
                <Text center>{b.text}</Text>
              </Card>
            </Mui.Grid>
          ))}
        </Mui.Grid>
      </Section>
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
