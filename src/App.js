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
  const [centros, setCentros] = useState([])
  const classes = useStyles()

  useEffect(() => {
    axios
      .get("/api/v1.0/location")
      .then((res) => setCentros(res.data))
      .catch((err) => console.log(err))
  },[])

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