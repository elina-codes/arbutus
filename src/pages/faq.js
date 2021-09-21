import React from "react"
import Layout from "components/layout"
import { Button, OpenContactModalButton, PageMenu, Section } from "components"
import { StaticImage } from "gatsby-plugin-image"
import faqContent from "src/page-content/faq"
import { renderPageContentAndMenu } from "src/helpers"

const seo = {
  title: "FAQ",
}

const BgImage = () => (
  <StaticImage
    layout="fullWidth"
    placeholder="blurred"
    alt=""
    src="../images/banner-faq.jpg"
    style={{ gridArea: "1/1" }}
    fit="cover"
    formats={["auto", "jpg", "png", "jpeg"]}
  />
)

const FAQPage = () => {
  const { menuSections, pageSections = [] } = renderPageContentAndMenu(
    faqContent
  )

  const viewButtonTarget = pageSections.find(s => s.id)?.id
  const topBannerData = {
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know for you to make a great decision. Just click on one of the sections below to find the answer.",
    cta: (
      <>
        <Button
          color="default"
          onClick={() => {
            document
              .getElementById(viewButtonTarget)
              .scrollIntoView({ behavior: "smooth" })
          }}
        >
          View FAQ
        </Button>
        <OpenContactModalButton>Chat directly with us</OpenContactModalButton>
      </>
    ),
    topImage: BgImage,
  }

  return (
    <Layout {...{ seo, topBannerData }}>
      <PageMenu sections={menuSections} />
      {pageSections.map((section, i) => {
        const {
          id,
          title,
          subtitle,
          description,
          content,
          component: Component,
          ...sectionProps
        } = section
        return (
          <Section
            {...{
              id,
              title,
              subtitle,
              description,
              key: `section-${title}-${i}`,
              ...sectionProps,
            }}
          >
            {content &&
              (Component ? <Component data={content} /> : <>{content}</>)}
          </Section>
        )
      })}
    </Layout>
  )
}

export default FAQPage
