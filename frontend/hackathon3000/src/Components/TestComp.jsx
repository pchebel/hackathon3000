import React, { useEffect } from 'react';

const TestComp = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://graph.facebook.com/238625004520116?access_token=EAAGAHDhUTKMBAJPN464yh8FUyTFe0aSGeZAbkSWmIZBCdo4SkZC8nEQK9HoWQoMlMXgIedXNLvR31Jwd0MgbZBCKmixs6HE2UuBOhhL2tGIuzidKD23ygWZClkabyxbY9vRoyPdLdh0LSHyckSrNVom3mKXZAO0weVtmOqxdZCWbAZDZD'
      );
      const parsedData = await data.json();
      console.log(parsedData);
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default TestComp;
