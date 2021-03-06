import React, { Fragment } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Footer from "./Footer";
import Header from "./Header";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles({});
  return (
    <Fragment>
      <Header />
      <div className={classes.root}>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
