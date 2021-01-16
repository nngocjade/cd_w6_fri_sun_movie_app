import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  navStyles: {
    backgroundColor: "rgb(105, 105, 105)",
  },
});
const PublicNavbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.navStyles} position="sticky">
        <Toolbar>
          <IconButton arial-label="app" color="inherit">
            <Menu />
          </IconButton>
          <Typography variant="h6">Movie App</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default PublicNavbar;
