import { AppBar } from '@material-ui/core';
import { React, useEffect, useState } from 'react';
import DataChart from '../DataChart/DataChart';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const url = 'https://coronavirusapi-france.now.sh/AllLiveData';
    const fetchedData = await fetch(url);
    const objectData = await fetchedData.json();
    const arr = objectData.allLiveFranceData;
    console.log(arr);
    setData(arr);
  }, []);

  return (
    <div>
      <AppBar />
      Home Page!!
      <DataChart data={data} />
    </div>
  );
};

export default HomePage;
