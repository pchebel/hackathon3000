import React from 'react';
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
  },
  statusText: {
    marginLeft:10,
    fontSize:18,
    marginBottom: 10,
    marginTop:10,
  },
  roundAvailable: {
    marginLeft: 30,
    verticalAlign: 'bottom',
    color:'green',
  },
  roundUnavailable: {
    marginLeft: 30,
    verticalAlign: 'bottom',
    color:'red',
  },


});


const MachineWidget = () => {
    const classes = useStyles();

    const currentState = [{"nom":"machine_0","occupe":false},{"nom":"machine_1","occupe":true},{"nom":"machine_2","occupe":true},{"nom":"machine_3","occupe":true}];
  
    return (
      <Card className={classes.root}>
        <CardContent>

          <Typography variant="h5" component="h2">
            Machines à laver
          </Typography>

          {currentState.map(machine => { return ( 
                <Typography className = {classes.statusText} variant="body2" component="p">
                        {machine.nom}
                        <FiberManualRecordIcon className = {machine.occupe ? classes.roundUnavailable : classes.roundAvailable}/>
                </Typography>
          )})}


        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
};


export default MachineWidget;
