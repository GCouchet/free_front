import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Location from "./Locations"
import axios from 'axios'
import useWindowPosition from '../hooks/useWindowPosition';


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginLeft: '8rem',
      marginRight: '8rem',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '0',
        marginRight: '0',
      },
    },
      loc: {
        flex: "1 0 400px", //style={{flex: "1 0 400px"}}
      },

  }))

function Centros() {
    const classes = useStyles()
    const [centros, setCentros] = useState([])
    const checked = useWindowPosition('header')

    useEffect(() => {
        axios
          .get("/api/v1.0/location")
          .then((res) => setCentros(res.data))
          .catch((err) => console.log(err))
      },[])

    return (
        <div className={classes.root} id='centros'>
            {centros.map((centro) => (
              <div className={classes.loc}>
                <Location place={centro} checked={checked} />
              </div>
            ))}
        </div>
    )
}

export default Centros