import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const PostFacebook = () => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const postFacebook = async () => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    };
    fetch(
      'https://graph.facebook.com/100421482058128/feed?access_token=EAAGAHDhUTKMBANqxsFGrwowlmUOuEd5CNC1SoWlZBMRSWcmgkZCo4xsTzch8f7udsUsnG2Qo7ISA1i6zUhCygSQnZBeN4b6zUz9nwDCjg05QvHEJTcn5u2eqpfu4vRkN9oqXFzFnySpGAZBK3hrAvFOxI75UnDX2y6tKr77gsr4A7m9liy9H',
      requestOptions
    );

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  return (
    <div className="post-facebook">
      <TextField
        id="standard-basic"
        label="Postez ici"
        onChange={(event) => setMessage(event.target.value)}
      />

      <Button variant="contained" color="primary" className={classes.button} onClick={postFacebook}>
        Poster sur Facebook !
      </Button>
    </div>
  );
};

export default PostFacebook;
