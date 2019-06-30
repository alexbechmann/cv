import React, { Fragment } from "react";
import { withStyles, makeStyles, Theme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Footer from "./Footer";
import Header from "./Header";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default Layout;
