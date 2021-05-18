import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Courgette',
    },
    title: {
        color: '#00163B',
        fontSize: '4.5rem',
    },
    container: {
        textAlign: 'center',
    },
    goDown: {
        color: '#00163B',
        fontSize: '4rem'
    }
}))


export default function Welcome(){
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
      }, []);

    return (
        <div className={classes.root}>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={37}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br /> Freeride
                    </h1>
                    <Scroll to="centros" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown}/>
                    </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}