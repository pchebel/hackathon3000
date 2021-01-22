import React, { useState, useRef, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DragItem from '../DragItem/DragItem';
import { Grid, GridImage, GridItem } from '../Grid/Grid';
import GridContext from '../GridProvider/GridProvider';
import Calendar from '../Calendar/Calendar';

// import DataChart from '../DataChart/DataChart';

// const API_URL = 'https://hackathon3000.osc-fr1.scalingo.io';

// const searchActor = async (actorName) => {
//   const formdata = new FormData();
//   formdata.append('name', actorName);
//   const requestOptions = {
//     method: 'POST',
//     body: formdata,
//     redirect: 'follow',
//   };

//   const actorResponse = await fetch(`${API_URL}/api/actor`, requestOptions);
//   const actorUrl = await actorResponse.text();
//   return actorUrl;
// };

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
  const { items, moveItem } = useContext(GridContext);
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
          <Button color="inherit">Réarranger</Button>
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
