import React from "react"
import Layout from "components/layout"
import { OpenContactModalButton, PageMenu, Section, Text } from "components"
import { StaticImage } from "gatsby-plugin-image"
import iwsContent from "src/page-content/industries"
import { renderPageContentAndMenu } from "src/helpers"

const seo = {
  title: "Industries We Serve",
}

const BgImage = () => (
  <StaticImage
    layout="fullWidth"
    placeholder="blurred"
    alt=""
    src="../images/banner-industries.jpg"
    style={{ gridArea: "1/1" }}
    fit="cover"
    formats={["auto", "jpg", "png", "jpeg"]}
  />
)

const topBannerData = {
  title: "Equipment leasing for most industries",
  description:
    "We serve British Columbia, Alberta, Saskatchewan, and Manitoba, and have been one of Western Canada's top equipment leasing companies for over 40 years.",
  cta: <OpenContactModalButton>Get a personalized plan</OpenContactModalButton>,
  topImage: BgImage,
}

const IndustriesWeServePage = () => {
  const { menuSections, pageSections } = renderPageContentAndMenu(iwsContent)

  return (
    <Layout {...{ seo, topBannerData }}>
      <PageMenu sections={menuSections} />
      {pageSections.map((section, i) => {
        const { menuItem, altTitle, content, image, ...sectionProps } = section
        const alternate = i % 2
        const position = alternate ? "right" : "left"
        const direction = alternate ? "Left" : "Right"
        const light = !!alternate
        return (
          <Section
            {...{
              key: section?.id,
              light,
              image: { position, direction, ...image },
              verticalCenter: !content,
              ...sectionProps,
            }}
          >
            {content && (
              <ul
                style={{
                  columnCount: 2,
                  marginBottom: 0,
                  marginLeft: 0,
                  listStyle: "none",
                }}
              >
                {content?.map(item => (
                  <li key={item} style={{ marginBottom: "0.5em" }}>
                    <Text>{item}</Text>
                  </li>
                ))}
              </ul>
            )}
          </Section>
        )
      })}
    </Layout>
  )
}

export default IndustriesWeServePage
