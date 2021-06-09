import React from 'react';
import { useHistory } from "react-router-dom";

// import Material UI styles
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function IntakeHeader () {
  const classes = useStyles();

  let history = useHistory();

  function handleClick() {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Just Utah Coders
          </Typography>
          <Button color="inherit" onClick={handleClick}>Home</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
