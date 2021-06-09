import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';




const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    height: 60,
    backgroundColor: '#2E3B55',
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function IntakeFooter() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.appBar}>

      </AppBar>
    </React.Fragment>
  );
}
