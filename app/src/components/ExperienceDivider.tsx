import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    height: 70,
    width: 3,
    borderRadius: 1.5,
    backgroundColor: theme.palette.primary.main,
    margin: 'auto'
  }
}));

const ExperienceDivider = () => {
  const classes = useStyles({});
  return <Box boxShadow={6} className={classes.divider} />;
};

export default ExperienceDivider;
