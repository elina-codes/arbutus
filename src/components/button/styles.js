import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  accordion: {
    textAlign: "left",
  },
  accordionHeader: {
    background: theme.palette.primary.main,
    paddingLeft: theme.space.md,
    paddingRight: theme.space.md,
    paddingTop: theme.space.xs,
    paddingBottom: theme.space.xs,
    color: theme.palette.white,
    "& .MuiIconButton-root": {
      color: "inherit",
    },
  },
  accordionContent: {
    padding: theme.space.md,
  },
}))

export default styles
