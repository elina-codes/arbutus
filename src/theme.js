import { createMuiTheme } from "@material-ui/core/styles"

const config = {
  primary: "#01446f",
  secondary: "#ff5722",
  borderRadius: 10,
  sectionPadding: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
}

const arbutusTheme = {
  borderRadius: config.borderRadius,
  sectionPadding: config.sectionPadding,
  palette: {
    primary: {
      main: config.primary,
    },
    secondary: {
      main: config.secondary,
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      color: "inherit",
    },
    h2: {
      textTransform: "uppercase",
      fontSize: 10,
      color: config.secondary,
    },
    h3: {
      fontSize: 26,
      color: "inherit",
    },
    h4: {
      fontSize: 18,
      color: "inherit",
    },
    h5: {
      fontSize: 16,
      color: "inherit",
    },
  },
  overrides: {
    body: {
      color: config.primary,
    },
  },
}

export default createMuiTheme(arbutusTheme)
