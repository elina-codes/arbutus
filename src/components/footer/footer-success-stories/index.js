import React from "react"
import { routes } from "src/constants"
import { Button, CardGrid, Section } from "components"
import placeholderData from "src/placeholder-data"

const FooterSuccessStories = () => {
  return (
    <Section
      {...{
        title: `How we've helped people`,
        subtitle: `People first.
        Something about us caring.`,
        button: (
          <Button to={routes.successStories.path} color="primary">
            More success stories
          </Button>
        ),
      }}
    >
      <CardGrid data={placeholderData.successStories} />
    </Section>
  )
}

export default FooterSuccessStories
