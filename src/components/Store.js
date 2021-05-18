import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'


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

function Store() {
    const classes = useStyles()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
          .get("/api/v1.0/store/product")
          .then((res) => setProducts(res.data))
          .catch((err) => console.log(err))
      },[])

    return (
        <div className={classes.root} id='products'>
            {products.map((product) => (
              <div className={classes.loc}>
                {product.name}
              </div>
            ))}
        </div>
    )
}

export default Store