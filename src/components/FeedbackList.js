import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.72)',
    fontSize: 18,
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
  }
});

const FeedbackList = ({ items }) => {
  const classes = useStyles();
  return (
    <List >
      {
        items && items.map(item => {
          const {ftext, stext, ...props} = item;
          return (
            <>
              <ListItem button className={classes.root} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar {...props}>{ftext.split(' ').map(w => w[0].toUpperCase()).join('')}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div className={classes.head}>
                      {ftext}
                      <RadioGroup row>
                        <Radio icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon style={{ color: 'rgba(255, 180, 0, 0.87)' }}/>}/>
                        <Radio icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon style={{ color: 'rgba(255, 180, 0, 0.87)' }}/>}/>
                        <Radio icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon style={{ color: 'rgba(255, 180, 0, 0.87)' }}/>}/>
                        <Radio icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon style={{ color: 'rgba(255, 180, 0, 0.87)' }}/>}/>
                        <Radio icon={<StarBorderIcon />} checkedIcon={<StarBorderIcon style={{ color: 'rgba(255, 180, 0, 0.87)' }}/>}/>
                      </RadioGroup>
                      
                    </div>
                  }
                  secondary={stext}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          )}
        )
      }
    </List>
  );
};

export default FeedbackList;