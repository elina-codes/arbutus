import { createMuiTheme } from "@material-ui/core/styles"

const config = {
  primary: "#01446f",
  secondary: "#ff5722",
  textPrimary: "#003354",
  textLight: "#757575",
  white: "#fff",
  light: "#F7F8FA",
  borderRadius: 10,
  boxShadow: "4px 8px 30px rgba(68, 87, 121, 0.15)",
  sectionPaddingX: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  sectionPaddingY: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  sectionPaddingDenseY: {
    paddingTop: 40,
    paddingBottom: 40,
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
  "&.strong": {
    fontWeight: "800",
  },
}

const arbutusTheme = {
  borderRadius: config.borderRadius,
  boxShadow: config.boxShadow,
  sectionPadding: { ...config.sectionPaddingX, ...config.sectionPaddingY },
  sectionPaddingX: config.sectionPaddingX,
  sectionPaddingY: config.sectionPaddingY,
  sectionPaddingDense: config.sectionPaddingDenseY,
  palette: {
    primary: {
      main: config.primary,
    },
    secondary: {
      main: config.secondary,
    },
    white: config.white,
    black: "#000",
    text: {
      main: config.textPrimary,
    },
    background: {
      light: config.light,
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
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 18,
      color: "inherit",
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 21,
      color: "inherit",
      lineHeight: 1.5,
      fontWeight: 900,
    },
    body2: {
      fontSize: 14,
    },
    caption: {
      color: config.textLight,
      fontSize: 12,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@keyframes override_slideInUp": {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "@keyframes override_fadeInUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "@keyframes override_fadeInDown": {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "@keyframes override_fadeInLeft": {
          "0%": {
            opacity: 0,
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "@keyframes override_fadeInRight": {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        ".animate__slideInUp": {
          animationName: "override_slideInUp",
          animationDuration: 0.5,
        },
        ".animate__fadeInUp": {
          animationName: "override_fadeInUp",
          animationDuration: 0.5,
        },
        ".animate__fadeInDown": {
          animationName: "override_fadeInDown",
          animationDuration: 0.5,
        },
        ".animate__fadeInLeft": {
          animationName: "override_fadeInLeft",
          animationDuration: 0.5,
        },
        ".animate__fadeInRight": {
          animationName: "override_fadeInRight",
          animationDuration: 0.5,
        },
        body: {
          color: config.textPrimary,
          lineHeight: 1.5,
          backgroundColor: "#fff",
        },
        ".prewrap": {
          whiteSpace: "pre-wrap",
        },
        ".preline": {
          whiteSpace: "pre-line",
        },
      },
    },
    body: {
      color: config.textPrimary,
      lineHeight: 1.5,
    },
    MuiTypography: {
      root: {
        whiteSpace: "pre-line",
        ...typographyCommon,
      },
    },
    MuiPaper: {
      root: {
        "&.dark": {
          color: config.white,
          backgroundColor: config.primary,
        },
      },
    },
    MuiButton: {
      contained: {
        boxShadow: config.boxShadow,
      },
    },
    // Card
    MuiCard: {
      root: {
        height: "100%",
        boxShadow: config.boxShadow,
      },
    },
    MuiCardMedia: {
      root: {
        marginBottom: 0,
        height: "auto",
      },
    },
    MuiCardActionArea: {
      root: {
        textAlign: "left",
      },
    },
    // Form
    MuiOutlinedInput: {
      input: {
        "&::placeholder": {
          color: config.textPrimary,
        },
      },
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          top: 0,
          "& legend": {
            display: "none",
          },
        },
      },
    },
    MuiInputBase: {
      root: {
        background: config.white,
        color: `internal-light-dark(${config.textPrimary}, ${config.textPrimary})`,
      },
      input: {
        color: config.textPrimary,
        animation: "none",
        "&::placeholder": {
          color: config.textPrimary,
        },
      },
    },
    MuiFormLabel: {
      root: {
        color: config.light,
        textAlign: "left",
      },
    },
    MuiInputLabel: {
      outlined: {
        color: config.light,
        transform: "none",
        position: "static",
        lineHeight: "inherit",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 4,
        "&.MuiInputLabel-marginDense": {
          transform: "none",
        },
        "&.MuiInputLabel-shrink": {
          color: config.light,
          transform: "none",
        },
      },
    },
    MuiFormControl: {
      root: {
        color: config.textPrimary,
      },
      fullWidth: {
        marginBottom: config.spacing.sm,
      },
    },
  },
}

export default createMuiTheme(arbutusTheme)
