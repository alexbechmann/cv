import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import GitHub from "./icons/GitHub";
import { Theme, IconButton, Avatar, Tooltip, NoSsr } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ProfilePicture from "./ProfilePicture";
import Typist from "react-typist";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
    // marginBottom: theme.spacing(3)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  grow: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        // style={{ background: "transparent" }}
        // elevation={0}
      >
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <ProfilePicture />
            <Typography variant="h6" color="inherit">
              <Typist
                startDelay={2000}
                avgTypingDelay={100}
                stdTypingDelay={50}
                cursor={{ hideWhenDone: true, hideWhenDoneDelay: 2000 }}
              >
                Alex Bechmann CV.
              </Typist>
            </Typography>
            <div className={classes.grow} />
            <Tooltip title="Browse some of my projects on GitHub">
              <IconButton
                color="inherit"
                href="https://github.com/alexbechmann"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
