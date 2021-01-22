import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './EmptyWidget.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
  },
}));

export default function EmptyWidget() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} empty-widget`}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<Icon>add_circle</Icon>}
      >
        Ajouter un Widget
      </Button>
    </div>
  );
}
