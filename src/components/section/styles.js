import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  section: {
    padding: theme.spacing(3),
    ...theme.sectionPadding,
  },
  hero: {
    minHeight: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
  },
  sectionHeading: {
    textAlign: "left",
    maxWidth: 780,
  },
  headingTitles: {
    maxWidth: 540,
  },
  buttonContainer: {
    marginTop: theme.space.xl,
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  dark: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
  sectionInner: {
    display: "grid",
    gridTemplate: `
      "main"`,
    columnGap: "5%",
    rowGap: theme.space.md,
    "&.imageRight, &.imageLeft": {
      gridTemplate: `
        "main"
        "image"`,
    },
    [theme.breakpoints.up("md")]: {
      "&.imageRight": {
        gridTemplate: `
          "main image"
          / 1fr 1fr`,
      },
      "&.imageLeft": {
        gridTemplate: `
        "image main"
        / 1fr 1fr`,
      },
    },
  },
  sectionContent: {
    gridArea: "main",
  },
  sectionImage: {
    gridArea: "image",
  },
  sectionButton: {
    marginTop: theme.space.md,
  },
  image: {
    boxShadow: "rgba(68,87,121,0.15)",
    borderRadius: theme.borderRadius,
  },
}))

export default styles
