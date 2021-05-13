import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SmoothCollapse from "react-smooth-collapse"
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '40px',
    variant: "outlined",
    marginBottom: '6rem',
    //flexBasis: '440px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Courgette',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});
//<Collapse in={false} {...(checked ? { timeout: 700 } : {})}>    </Collapse>

export default function Location({ place, checked }) {
  const classes = useStyles();
  return (
    <SmoothCollapse expanded={checked} heightTransition=".8s ease">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.image}
          title={place.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
        </CardContent>
      </Card>
    </SmoothCollapse>
  );
}