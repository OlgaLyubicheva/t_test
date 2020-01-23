import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';


import BaseBlock from './components/BaseBlock';
import BlueList from './components/BlueList';
import { Money, Ball } from './components/CustomIcons';
import FeedbackList from './components/FeedbackList';

import './styles.css';

const App = () => {
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
                <IconButton  color="inherit">
                  <FavoriteIcon />
                </IconButton>
              </Grid>  
            </Grid>            
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <BaseBlock header={{
          title: 'Name of the service',
          action: [
            {type: 'icon', alabel: 'share', icon: <ShareIcon />},
            {type: 'icon', alabel: 'add to favorites', icon: <FavoriteBorderIcon />},
          ]
        }}>
          <BlueList items={[
            {text: 'Basketball', icon: <Ball /> },
            {text: '100 usd', icon: <Money /> },
            {text: '12, Street st. Prague 1', icon: <LocationOnIcon /> },
            {text: 'Mon, Tue, Wed, Thu, Fri, Sat, Sun', icon: <DateRangeIcon /> },
            {text: 'Can come to your home', icon: <HomeIcon /> },
          ]}/>
        </BaseBlock>

        <BaseBlock header={{title: 'Contacts'}}>
          <BlueList items={[
            {text: 'test-email@gmail.com', icon: <EmailIcon /> },
            {text: '+123456789614', icon: <PhoneIcon /> },
          ]}/>
        </BaseBlock>

        <BaseBlock header={{title: 'Buy'}}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </BaseBlock>

        <BaseBlock header={{title: 'Service description'}}>
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounc
        </BaseBlock>

        <BaseBlock header={{title: 'Feedbacks about service'}}>
          <FeedbackList items={[
              {ftext: 'Ivan Banha', stext: 'But I must explain to you how all this'},
              {ftext: 'Ivan Banha', stext: 'But I must explain to you how all this'},
            ]}/>
        </BaseBlock>
      </main>
      <footer></footer>   
    </>
  );
};

export default App;