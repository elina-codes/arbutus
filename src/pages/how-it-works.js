import React from "react"
import Layout from "components/layout"
import images from "src/images"
import pageSections from "src/content/how-it-works"
import { IconList, OpenContactModalButton, Section } from "components"

const seo = {
  title: "How it works",
}

const topBannerData = {
  title: "How it works",
  description:
    "Discover how to secure equipment financing with Arbutus Capital.",
  cta: <OpenContactModalButton>Start your lease</OpenContactModalButton>,
  bgImage: images.banners.howItWorks,
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
        const { subtitle, description, image } = section
        const alternate = i % 2
        const position = alternate ? "left" : "right"
        const direction = alternate ? "Right" : "Left"
        return (
          <Section
            {...{
              key: `section-${subtitle}-${i}`,
              image: { position, direction, ...image },
            }}
          >
            <IconList
              singleCol
              data={[
                {
                  title: subtitle,
                  titleVariant: "h3",
                  text: description,
                  prefix: `${i + 1}`,
                },
              ]}
            />
          </Section>
        )
      })}
    </Layout>
  )
}

export default HowItWorksPage
