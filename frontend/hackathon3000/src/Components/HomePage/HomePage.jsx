import { AppBar } from '@material-ui/core';
import { React, useEffect, useState } from 'react';
import DataChart from '../DataChart/DataChart';

const API_URL = 'https://hackathon3000.osc-fr1.scalingo.io';

const HomePage = () => {
  const [data, setData] = useState([]);

  const searchActor = async (actorName) => {
    const formdata = new FormData();
    formdata.append('name', actorName);
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    const actorResponse = await fetch(`${API_URL}/api/actor`, requestOptions);
    const actorUrl = await actorResponse.text();
    return actorUrl;
  };

  const changeActor = async () => {
    const actorUrl = await searchActor('Jean Dujardin');
    setData([actorUrl]);
  };

  useEffect(() => {
    changeActor();
  }, []);

  return (
    <div>
      <AppBar position="static">Home Page!!</AppBar>
      <DataChart data={data} />
    </div>
  );
};

export default HomePage;
