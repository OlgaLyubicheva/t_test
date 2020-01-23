import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    background: 'rgba(111, 207, 151, 0.22)',
    border: '1px solid rgba(39, 174, 96, 0.32)',
    borderRadius: 3,
    color: 'rgba(0, 0, 0, 0.72)',
    height: 48,
    padding: '0 20px',
    margin: '2px 0 0',
//     font-family: Roboto;
// font-style: normal;
// font-weight: normal;
    fontSize: 18,
  },
});

const BlueList = ({items}) => {
  const classes = useStyles();
  return (
    <List >
      {
        items && items.map(item => (
          <ListItem className={classes.root}>
            <ListItemIcon>
              {item.icon || ''}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))
      }
    </List>
  );
};

export default BlueList;