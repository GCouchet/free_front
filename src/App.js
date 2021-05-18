import React, { useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types'
// import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header.js";
//import Centros from "./components/Centros"


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/fondos/back13.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },   
}))

function App(props) {
  const classes = useStyles()

  return (
      <main className={classes.root}>
        <Helmet>
          <title>Freeride</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Header/>
        {props.children}
      </main>
  );
  
}

export default App;

App.propTypes = {
  children: PropTypes.element
}
