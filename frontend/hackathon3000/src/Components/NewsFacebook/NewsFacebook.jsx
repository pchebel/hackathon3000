import React, { useEffect, useState } from 'react';
import { SnackbarContent } from '@material-ui/core';


const NewsFacebook = () => {
  const [message1, setData1] = useState(null);
  const [message2, setData2] = useState(null);
  const [message3, setData3] = useState(null);
  const [message4, setData4] = useState(null);
  const [message5, setData5] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://graph.facebook.com/100421482058128/feed?access_token=EAAGAHDhUTKMBAJPN464yh8FUyTFe0aSGeZAbkSWmIZBCdo4SkZC8nEQK9HoWQoMlMXgIedXNLvR31Jwd0MgbZBCKmixs6HE2UuBOhhL2tGIuzidKD23ygWZClkabyxbY9vRoyPdLdh0LSHyckSrNVom3mKXZAO0weVtmOqxdZCWbAZDZD'
      );
      const parsedData = await data.json();
      setData1(parsedData.data[0].message);
      setData2(parsedData.data[1].message);
      setData3(parsedData.data[2].message);
      setData4(parsedData.data[3].message);
      setData5(parsedData.data[4].message);
      
    };
    fetchData();
  }, []);
  
  return( 
    <div>
      <SnackbarContent message={message1} />
      <SnackbarContent message={message2} />
      <SnackbarContent message={message3} />
      <SnackbarContent message={message4} />
      <SnackbarContent message={message5} />
    </div>
  );
};

export default NewsFacebook;
