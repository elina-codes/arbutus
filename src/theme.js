import { createMuiTheme } from "@material-ui/core/styles"

const config = {
  primary: "#01446f",
  secondary: "#ff5722",
  borderRadius: 10,
  sectionPaddingX: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  sectionPaddingY: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  },
}

const typographyCommon = {
  "&:not(:last-child)": {
    marginBottom: "0.7em",
  },
}

const arbutusTheme = {
  borderRadius: config.borderRadius,
  sectionPadding: { ...config.sectionPaddingX, ...config.sectionPaddingY },
  sectionPaddingX: config.sectionPaddingX,
  sectionPaddingY: config.sectionPaddingY,
  palette: {
    primary: {
      main: config.primary,
    },
    secondary: {
      main: config.secondary,
    },
  },
  space: {
    ...config.spacing,
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 700,
      color: "inherit",
    },
    h2: {
      textTransform: "uppercase",
      fontSize: 14,
      fontWeight: 900,
      letterSpacing: 1,
      color: config.secondary,
    },
    h3: {
      fontSize: 36,
      fontWeight: 700,
      color: "inherit",
    },
    h4: {
      fontSize: 18,
      color: "inherit",
    },
    h5: {
      fontSize: 16,
      color: "inherit",
      fontWeight: 900,
    },
  },
  overrides: {
    body: {
      color: config.primary,
    },
    MuiTypography: {
      root: {
        ...typographyCommon,
      },
    },
  },
}

export default createMuiTheme(arbutusTheme)
