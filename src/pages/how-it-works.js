import React from "react"
import Layout from "components/layout"
import pageSections from "src/page-content/how-it-works"
import { StaticImage } from "gatsby-plugin-image"
import { Banner, IconList, OpenContactModalButton, Section } from "components"

const seo = {
  title: "How it works",
}

const BgImage = () => (
  <StaticImage
    layout="fullWidth"
    placeholder="blurred"
    alt=""
    src="../images/banner-howitworks.jpg"
    style={{ gridArea: "1/1" }}
    fit="cover"
    formats={["auto", "jpg", "png", "jpeg"]}
  />
)

const topBannerData = {
  title: "How it works",
  description:
    "Discover how to secure equipment financing with Arbutus Capital.",
  cta: <OpenContactModalButton>Start your lease</OpenContactModalButton>,
  topImage: BgImage,
}

const HowItWorksPage = () => {
  return (
    <Layout {...{ seo, topBannerData }}>
      <Section
        title="5 simple steps for leasing equipment"
        subtitle="We make the lease financing process as simple and efficient as possible"
        description={`Your situation and needs are unique, that’s why decisions are made on a case by case basis.
        
        Through these 5 easy steps, we’ll find a plan that works for you and your business.`}
      />
      {pageSections.map((section, i) => {
        const { subtitle, description, image } = section
        const alternate = i % 2
        const position = alternate ? "left" : "right"
        const direction = alternate ? "Right" : "Left"
        return (
          <>
            {i === 2 && (
              <Banner>
                <em>
                  Looking beyond credit criteria and forms, we take a personal
                  approach when getting to know you and your business.
                </em>
              </Banner>
            )}
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
          </>
        )
      })}
    </Layout>
  )
}

export default HowItWorksPage
