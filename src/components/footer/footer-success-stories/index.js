import React from "react"
import { routes } from "src/constants"
import * as MUI from "@material-ui/core"
import { Button, Card, Section, Text } from "components"
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
      <MUI.Grid container spacing={5} justify="center">
        <MUI.Grid item sm={6} md>
          <Card
            meta="Alberta, Canada - Construction Equipment"
            image={{
              src: placeholderData.successStories.ss1,
              alt:
                "Offering customers more choice: how National Leasing end title.",
            }}
            title="Offering customers more choice: how National Leasing end title."
          >
            <Text variant="body2">
              Sometimes it seems like nothing goes right. We hear some crazy and
              inspirational stories of small business owners overcoming
              incredible challenges through had work and something something …
            </Text>
          </Card>
        </MUI.Grid>
        <MUI.Grid item sm={6} md>
          <Card
            delay={100}
            meta="Alberta, Canada - Construction Equipment"
            image={{
              src: placeholderData.successStories.ss2,
              alt: "Offering customers more choice.",
            }}
            title="Offering customers more choice."
          >
            <Text variant="body2">
              Sometimes it seems like nothing goes right. We hear some crazy and
              inspirational stories of small business owners overcoming
              incredible challenges through had work and something something and
              one more line to show you what happens when…
            </Text>
          </Card>
        </MUI.Grid>
        <MUI.Grid item sm={6} md>
          <Card
            delay={200}
            meta="Alberta, Canada - Construction Equipment"
            image={{
              src: placeholderData.successStories.ss3,
              alt:
                "Offering customers more choice: how National Leasing end title.",
            }}
            title="Offering customers more choice: how National Leasing end title."
          >
            <Text variant="body2">
              Sometimes it seems like nothing goes right. We hear some crazy and
              inspirational stories of small business owners overcoming
              incredible challenges through had work and something something …
            </Text>
          </Card>
        </MUI.Grid>
      </MUI.Grid>
    </Section>
  )
}

export default FooterSuccessStories
