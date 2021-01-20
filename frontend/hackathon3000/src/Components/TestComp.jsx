import React, { useEffect } from 'react';

const TestComp = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://graph.facebook.com/238625004520116?access_token=EAAGAHDhUTKMBAE0D1zO8B1ZAgJWXcOqPZBO2c5Gl8lOQWPpseHHuybylScGhffYZBpOuLsVIhtJjLAo9qUVZAWB9NuyyjPB7P3Cx4d8gdWZCPmSEpGo62yv5MZAy9ePx5k7TZB7D89zBk7lao7y7SPq5w08IZAmd6ae7Eny7Crkg48EI9H2YykZB1VH5fRjcVGlnJkV6wZB5IoUBP84XVZCdTmpGg6fediMlxVifI9KIOsYFwZDZD'
      );
      const parsedData = await data.json();
      console.log(parsedData);
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default TestComp;
