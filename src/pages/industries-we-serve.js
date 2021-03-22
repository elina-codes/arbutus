import React from "react"
import Layout from "components/layout"
import { PageMenu, Section } from "components"
import placeholderData from "../placeholder-data"
import { iwsContent } from "./industries-we-serve-content"
import { renderPageContentAndMenu } from "../helpers"
import classNames from "classnames"

const seo = {
  title: "Industries We Serve",
}

const topBannerData = {
  title: "Equipment leasing for any industry",
  description:
    "We serve British Columbia, Manitoba, Alberta, and Saskatchewan, and have been one of Western Canada's top equipment leasing companies for over 40 years.",
  cta: "Get a personalized plan",
  bgImage: placeholderData.bannerImage,
}

const IndustriesWeServePage = () => {
  const { menuSections, pageSections } = renderPageContentAndMenu(iwsContent)

  return (
    <Layout {...{ seo, topBannerData }}>
      <PageMenu sections={menuSections} />
      {pageSections.map((section, i) => {
        const { content, image, ...sectionProps } = section
        const alternate = i % 2
        const position = alternate ? "right" : "left"
        const light = alternate
        return (
          <Section
            {...{ light, image: { position, ...image }, ...sectionProps }}
          >
            <ul style={{ columnCount: 2 }}>
              {content.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
        )
      })}
    </Layout>
  )
}

export default IndustriesWeServePage
