import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import SortIcon from '@material-ui/icons/Sort';
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
    appbar: {
        background: 'rgba(255,255,255,0.6)',
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#00163B',
        fontSize: '3.6rem',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    icon: {
        color: '#00163B',
        fontSize: '2rem',
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


export default function Header(){
    const [checked, setChecked] = useState(false);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const prevOpen = useRef(open);
    const anchorRef = useRef(null);

    useEffect(() => {
        setChecked(true);
      }, []);
    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
          }
        setOpen(false);
    };

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Freeride</h1>
                    <IconButton onClick={handleToggle}>
                        <SortIcon
                            ref={anchorRef}
                            className={classes.icon}
                        />
                    </IconButton>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper className={classes.appbar}>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow">
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>Store</MenuItem>
                                <MenuItem onClick={handleClose}>Login</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                </Toolbar>
            </AppBar>
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