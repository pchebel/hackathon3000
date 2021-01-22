import React, { useState, useRef, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Switch, FormControlLabel } from '@material-ui/core';
import DragItem from '../DragItem/DragItem';
import { Grid, GridItem } from '../Grid/Grid';
import GridContext from '../GridProvider/GridProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HomePage = () => {
  const { items, moveItem, isDraggable, setIsDraggable } = useContext(GridContext);
  const classes = useStyles();
  const [navBarHeight, setNavBarHeight] = useState(0);
  const navBarRef = useRef(null);

  useEffect(() => {
    setNavBarHeight(navBarRef.current.clientHeight);
  }, []);

  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar ref={navBarRef}>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={isDraggable}
                onChange={() => setIsDraggable(!isDraggable)}
                name="rearranger"
                color="secondary"
              />
            }
            label="Réarranger"
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid navBarHeight={navBarHeight}>
        {items.map((item) => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>{item.element}</GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
