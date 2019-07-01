import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GitHub from './icons/GitHub';
import { Theme, IconButton, Avatar, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  grow: {
    flexGrow: 1
  },
  avatar: {
    marginRight: theme.spacing(),
    border: `3px solid ${theme.palette.primary.dark}`
  }
}));

const Header = () => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Avatar className={classes.avatar} src="/me.jpg" />
            <Typography variant="h6" color="inherit">
              Alex Bechmann CV
            </Typography>
            <div className={classes.grow} />
            <Tooltip title="Browse some of my work on GitHub">
              <IconButton color="inherit" href="https://github.com/alexbechmann">
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
