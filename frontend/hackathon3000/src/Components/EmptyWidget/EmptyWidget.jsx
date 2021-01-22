import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GridContext from '../GridProvider/GridProvider';
import Calendar from '../Calendar/Calendar';
import MachineWidget from '../Widgets/MachineWidget';
import SandwichWidget from '../Widgets/SandwichWidget';
import NewsFacebook from '../Widgets/NewsFacebook';
import PostFacebook from '../Widgets/PostFacebook';
import './EmptyWidget.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
  },
}));

const map = new Map([
  ['Calendrier', <Calendar />],
  ['Machines', <MachineWidget />],
  ['Sandwich', <SandwichWidget />],
  ['News Facebook', <NewsFacebook />],
  ['Post Facebook', <PostFacebook />],
]);

export default function EmptyWidget(props) {
  const classes = useStyles();
  const [showChoices, setShowChoices] = useState(false);
  const { items, setItems } = useContext(GridContext);

  const changeItems = (id, name) => {
    let newItems = [...items];
    newItems[id] = { id: items[id].id, element: map.get(name) };
    setItems(newItems);
  };

  return (
    <div className={`${classes.root} empty-widget`}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<Icon>add_circle</Icon>}
        onClick={() => setShowChoices(!showChoices)}
      >
        Ajouter un Widget
      </Button>
      {showChoices && (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Choisissez le widget que vous voulez
            </ListSubheader>
          }
        >
          <ListItem button onClick={() => changeItems(props.id, 'Calendrier')}>
            <ListItemText primary="Calendrier" />
          </ListItem>
          <ListItem button onClick={() => changeItems(props.id, 'Machines')}>
            <ListItemText primary="Machines" />
          </ListItem>
          <ListItem button onClick={() => changeItems(props.id, 'Sandwich')}>
            <ListItemText primary="Sandwich" />
          </ListItem>
          <ListItem button onClick={() => changeItems(props.id, 'News Facebook')}>
            <ListItemText primary="News Facebook" />
          </ListItem>
          <ListItem button onClick={() => changeItems(props.id, 'Post Facebook')}>
            <ListItemText primary="Post Facebook" />
          </ListItem>
        </List>
      )}
    </div>
  );
}
