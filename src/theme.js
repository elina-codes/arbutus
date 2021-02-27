import { createMuiTheme } from "@material-ui/core/styles"

const palette = {
  primary: "#01446f",
  secondary: "#ff5722",
}

const arbutusTheme = {
  palette: {
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.secondary,
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
      color: palette.secondary,
    },
    h3: {
      fontSize: 26,
      color: "inherit",
    },
    h4: {
      fontSize: 18,
      color: "inherit",
    },
  },
  overrides: {
    body: {
      color: palette.primary,
    },
  },
}

export default createMuiTheme(arbutusTheme)
