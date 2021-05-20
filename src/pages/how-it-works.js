import React from "react"
import Layout from "components/layout"
import placeholderData from "src/placeholder-data"
import pageSections from "src/content/how-it-works"
import { OpenContactModalButton, Section, Text } from "components"

const seo = {
  title: "How it works",
}

const topBannerData = {
  title: "How it works",
  description:
    "Discover how to secure equipment financing with Arbutus Capital.",
  cta: <OpenContactModalButton>Start your lease</OpenContactModalButton>,
  bgImage: placeholderData.bannerImage,
}

const HowItWorksPage = () => {
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section
        title="5 simple steps for leasing equipment"
        subtitle="Personable title goes here"
        description={`Your situation and needs are unique, that’s why decisions are made on a case by case basis.
        Through these 5 easy steps, we’ll find a plan that works for you and your business.`}
      />
      {pageSections.map((section, i) => {
        const { description, image, ...sectionProps } = section
        const alternate = i % 2
        const position = alternate ? "left" : "right"
        const direction = alternate ? "Right" : "Left"
        return (
          <Section
            {...{
              key: `section-${section.title}-${i}`,
              image: { position, direction, ...image },
              // ["data-step"]: i + 1,
              ...sectionProps,
            }}
          >
            <Text>{description}</Text>
          </Section>
        )
      })}
    </Layout>
  )
}

export default HowItWorksPage
