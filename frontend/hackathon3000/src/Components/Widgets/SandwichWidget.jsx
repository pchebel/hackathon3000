import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    heigth: '100%',
    width: '100%',
  },
  statusText: {
    marginLeft: 10,
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
  },
  roundAvailable: {
    verticalAlign: 'bottom',
    marginRight: 20,
    float: 'right',
    color: 'green',
  },
  roundUnavailable: {
    verticalAlign: 'bottom',
    marginRight: 20,
    float: 'right',
    color: 'red',
  },
});

const SandwichWidget = () => {
  const classes = useStyles();
  const [sandwiches, setSandwiches] = useState([]);

  // const currentState = [{"nom":"machine_0","occupe":false},{"nom":"machine_1","occupe":true},{"nom":"machine_2","occupe":true},{"nom":"machine_3","occupe":true}];

  useEffect(() => {
    fetch('http://localhost:8000/api/sandwich')
      .then((res) => res.json())
      .then((machines) => {
        setSandwiches(machines);
      });
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Sandwich de la cafet
        </Typography>

        {sandwiches.map((machine) => {
          return (
            <Typography className={classes.statusText} variant="body2" component="p">
              {machine.nom}
              <FiberManualRecordIcon
                className={machine.disponible ? classes.roundAvailable : classes.roundUnavailable}
              />
            </Typography>
          );
        })}
      </CardContent>
      {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
    </Card>
  );
};

export default SandwichWidget;
