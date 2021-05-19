import React from "react"
import Layout from "components/layout"
import { OpenContactModalButton, PageMenu, Section, Text } from "components"
import placeholderData from "src/placeholder-data"
import iwsContent from "src/content/industries"
import { renderPageContentAndMenu } from "src/helpers"

const seo = {
  title: "Industries We Serve",
}

const topBannerData = {
  title: "Equipment leasing for any industry",
  description:
    "We serve British Columbia, Manitoba, Alberta, and Saskatchewan, and have been one of Western Canada's top equipment leasing companies for over 40 years.",
  cta: <OpenContactModalButton>Get a personalized plan</OpenContactModalButton>,
  bgImage: placeholderData.bannerImage,
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
        const light = !!alternate
        return (
          <Section
            {...{
              key: section?.id,
              light,
              image: { position, ...image },
              ...sectionProps,
            }}
          >
            <ul
              style={{
                columnCount: 2,
                marginBottom: 0,
                marginLeft: 0,
                listStyle: "none",
              }}
            >
              {content.map(item => (
                <li key={item} style={{ marginBottom: "0.5em" }}>
                  <Text>{item}</Text>
                </li>
              ))}
            </ul>
          </Section>
        )
      })}
    </Layout>
  )
}

export default IndustriesWeServePage
