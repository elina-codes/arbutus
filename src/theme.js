import { createMuiTheme } from "@material-ui/core/styles"
import "fontsource-roboto-slab"

const config = {
  primary: "#01446f",
  secondary: "#ff5722",
  textPrimary: "#003354",
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
    marginBottom: "1em",
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
      fontFamily: "Roboto Slab",
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
      fontFamily: "Roboto Slab",
      fontSize: 36,
      fontWeight: 700,
      color: "inherit",
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 18,
      color: "inherit",
      lineHeight: 1.5,
      fontWeight: 500,
    },
    h5: {
      fontSize: 21,
      color: "inherit",
      lineHeight: 1.5,
      fontWeight: 700,
    },
    body2: {
      fontSize: 14,
      color: "inherit",
    },
    caption: {
      opacity: 0.7,
      fontSize: 12,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@keyframes override_slideInUp": {
          "0%": {
            transform: "translateY(50%)",
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
        a: {
          cursor: "pointer",
        },
        body: {
          color: config.textPrimary,
          lineHeight: 1.7,
          backgroundColor: "#fff",
        },
        p: {
          lineHeight: 1.7,
        },
        ".prewrap": {
          whiteSpace: "pre-wrap",
        },
        ".preline": {
          whiteSpace: "pre-line",
        },
        blockquote: {
          position: "relative",
          fontStyle: "italic",
          maxWidth: 700,
          paddingLeft: 70,
          paddingRight: 70,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "justify",
        },
      },
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
        fontWeight: 600,
      },
    },
    MuiAccordionSummary: {
      expandIcon: {
        transform: "rotate(90deg)",
        "&.Mui-expanded": {
          transform: "none",
        },
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
      },
    },
    MuiCardContent: {
      root: {
        textAlign: "left",
      },
    },
    MuiCardActions: {
      root: {
        justifyContent: "flex-end",
        paddingLeft: config.spacing.sm,
        paddingRight: config.spacing.sm,
        paddingBottom: config.spacing.sm,
        textTransform: "uppercase",
        fontWeight: 600,
        fontSize: 12,
      },
    },
    // Menu
    MuiMenu: {
      paper: {
        color: config.primary,
        minWidth: 160,
        boxShadow: "none",
      },
    },
    // Form
    MuiOutlinedInput: {
      input: {
        "&::placeholder": {
          color: config.textPrimary,
          opacity: "0.5 !important",
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
