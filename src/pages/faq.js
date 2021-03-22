import React from "react"
import Layout from "components/layout"
import { Accordion, PageMenu, Section } from "components"
import placeholderData from "../placeholder-data"
import { faqContent } from "./faq-content"
import { renderPageContentAndMenu } from "../helpers"

const seo = {
  title: "FAQ",
}

const topBannerData = {
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know for you to make a great decision. Just click on one of the sections below to find the answer.",
  cta: placeholderData.button,
  bgImage: placeholderData.bannerImage,
}

const FAQPage = () => {
  const { menuSections, pageSections } = renderPageContentAndMenu(faqContent)

  return (
    <Layout {...{ seo, topBannerData }}>
      <PageMenu sections={menuSections} />
      {pageSections.map(section => {
        const {
          id,
          title,
          subtitle,
          description,
          content,
          component: Component,
        } = section
        return (
          <Section {...{ id, title, subtitle, description }}>
            {Component ? <Component data={content} /> : content}
          </Section>
        )
      })}
    </Layout>
  )
}

export default FAQPage
