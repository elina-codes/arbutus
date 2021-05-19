import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  section: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: theme.spacing(3),
    ...theme.sectionPadding,
    // "&[data-step]": {
    //   "&:before": {
    //     content: "attr(data-step)",
    //     fontSize: 120,
    //     fontWeight: 900,
    //     lineHeight: 0.9,
    //   },
    // },
  },
  dense: {
    ...theme.sectionPaddingDense,
  },
  inner: {
    borderRadius: theme.borderRadius,
    height: "100%",
    textAlign: "left",
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
    maxWidth: 540,
  },
  sectionHeadingDescription: {
    lineHeight: 2,
  },
  buttonContainer: {
    marginTop: theme.space.xl,
    "& .MuiButton-root": {
      marginRight: theme.space.sm,
    },
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
    color: theme.palette.text.main,
  },
  home: {
    color: theme.palette.text.main,
    backgroundColor: theme.palette.white,
    position: "relative",
    alignItems: "flex-start",
    overflow: "hidden",
    minHeight: 600,
    "&:after": {
      content: `''`,
      display: "block",
      position: "absolute",
      inset: "0 50% 0 auto",
      backgroundColor: theme.palette.white,
      height: "100%",
      width: "100%",
      transform: "skewX(-20deg)",
      transformOrigin: "bottom",
    },
    [theme.breakpoints.only("xs")]: {
      paddingBottom: 300,
      "&:after": {
        transform: "skewY(-7deg)",
        inset: "auto 0 240px 0",
      },
    },
  },
  sectionInner: {
    position: "relative",
    zIndex: 1,
    display: "grid",
    gridTemplate: `
      "main"`,
    columnGap: "5%",
    rowGap: theme.space.md,
    "&.imageRight, &.imageLeft": {
      gridTemplate: `
        "main"
        "image"
        / 100%`,
    },
    "&.imageFirst": {
      gridTemplate: `
        "image"
        "main"
        / 100%`,
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
  homeBannerInner: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
      maxWidth: "50%",
    },
  },
  homeBannerImage: {
    position: "absolute",
    inset: "auto 0 0 0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.only("xs")]: {
      height: 270,
    },
    [theme.breakpoints.up("sm")]: {
      inset: "0 0 0 auto",
      width: "50%",
    },
  },
  sectionMain: {
    gridArea: "main",
  },
  sectionContent: {
    "&:not(:first-child)": {
      marginTop: theme.space.lg,
    },
  },
  sectionButton: {
    marginTop: theme.space.md,
  },
  sectionImage: {
    gridArea: "image",
    display: "flex",
  },
  image: {
    borderRadius: theme.borderRadius,
    objectFit: "cover",
    boxShadow: theme.boxShadow,
  },
}))

export default styles
