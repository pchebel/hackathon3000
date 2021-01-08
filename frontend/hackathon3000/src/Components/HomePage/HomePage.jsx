import { AppBar } from '@material-ui/core';
import { React, useEffect, useState } from 'react';
import DataChart from '../DataChart/DataChart';

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

    const actorResponse = await fetch('/api/actor', requestOptions);
    const actorUrl = await actorResponse.text();
    return actorUrl;
  };

  useEffect(() => {
    // const url = 'https://coronavirusapi-france.now.sh/AllLiveData';
    // const fetchedData = await fetch(url);
    // const objectData = await fetchedData.json();
    // const arr = objectData.allLiveFranceData;
    const changeActor = async () => {
      const actorUrl = await searchActor('Jean Dujardin');
      setData([actorUrl]);
    };
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
