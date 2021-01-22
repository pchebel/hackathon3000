import React, { useEffect, useState, Component } from 'react';
import { TextField } from '@material-ui/core';

const PostFacebook = () => {
  const [message, setMessage] = useState('');
  const postFacebook = async () => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({message}),
    };
    fetch(
      'https://graph.facebook.com/100421482058128/feed?access_token=EAAGAHDhUTKMBANqxsFGrwowlmUOuEd5CNC1SoWlZBMRSWcmgkZCo4xsTzch8f7udsUsnG2Qo7ISA1i6zUhCygSQnZBeN4b6zUz9nwDCjg05QvHEJTcn5u2eqpfu4vRkN9oqXFzFnySpGAZBK3hrAvFOxI75UnDX2y6tKr77gsr4A7m9liy9H',
      requestOptions
    );

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  return (
    <div>
      <TextField id="standard-basic" label="Postez ici" onChange={(event) => setMessage(event.target.value)} />
      
      <button onClick={postFacebook}>Poster sur Facebook</button>
    </div>
  );
};

export default PostFacebook;
