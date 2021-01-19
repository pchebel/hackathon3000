import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
  const classes = useStyles();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const changeActor = async () => {
  //     const actorUrl = await searchActor('Jean Dujardin');
  //     setData([actorUrl]);
  //   };
  //   changeActor();
  // }, []);

  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Calendar />
    </div>
  );
};

export default HomePage;
