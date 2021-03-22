import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  section: {
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    marginTop: theme.space.md,
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
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
  },
  black: {
    color: theme.palette.white,
    backgroundColor: theme.palette.black,
  },
  light: {
    backgroundColor: theme.palette.background.light,
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
          / 1fr 52%`,
      },
      "&.imageLeft": {
        gridTemplate: `
        "image main"
        / 52% 1fr`,
      },
    },
  },
  sectionMain: {
    gridArea: "main",
  },
  sectionImage: {
    gridArea: "image",
    display: "flex",
  },
  sectionContent: {
    "&:not(:first-child)": {
      marginTop: theme.space.lg,
    },
  },
  sectionButton: {
    marginTop: theme.space.md,
  },
  image: {
    boxShadow: "rgba(68,87,121,0.15)",
    borderRadius: theme.borderRadius,
    objectFit: "cover",
    boxShadow: "4px 8px 30px rgba(68, 87, 121, 0.15)",
  },
}))

export default styles
