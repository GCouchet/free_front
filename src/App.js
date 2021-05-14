import React, { useEffect, useState } from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header.js";
import Centros from "./components/Centros"


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/fondos/back13.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },   
}))

function App() {
  const classes = useStyles()

  return (
      <main className={classes.root}>
        <CssBaseline>
        <Helmet>
          <title>Freeride</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Header/>
        <Centros />
        </CssBaseline>
      </main>
  );
  
}

export default App;