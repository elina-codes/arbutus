import React from "react"
import { Button } from "components"

const pageSections = {
  recentArticles: {
    title: "Recent blog articles",
    subtitle: `Keeping you informed on the latest in equipment leasing or something.`,
    wideTitle: true,
    button: (
      <Button color="default" fullWidth>
        Load more blog articles
      </Button>
    ),
  },
}

export default pageSections
