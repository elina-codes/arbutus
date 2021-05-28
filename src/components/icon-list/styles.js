import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  iconList: {
    textAlign: "left",
    listStyle: "none",
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
  singleCol: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  iconListItem: {
    display: "flex",
    flex: "0 0 47%",
    marginBottom: theme.space.md,
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.space.lg,
    },
  },
  iconListIconContainer: {
    display: "flex",
    width: 35,
    marginRight: theme.space.sm,
    opacity: 0.5,
    [theme.breakpoints.up("sm")]: {
      width: 50,
    },
  },
  iconListContent: {
    flex: 1,
  },
  iconListTitle: {
    paddingTop: theme.space.xs,
  },
  prefix: {
    opacity: 1,
    alignSelf: "flex-start",
    width: "auto",
  },
  iconListPrefix: {
    fontWeight: 900,
    lineHeight: 1,
    fontSize: 80,
    [theme.breakpoints.up("sm")]: {
      fontSize: 120,
    },
  },
}))

export default styles
