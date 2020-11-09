import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const publicResources = ['home', 'formations'];
const authenticatedResources = ['profile', 'logout'];
const adminResources = ['dashboard'];

export default function DrawerItems(){
    return (
        <>
        <List>
          {publicResources.map((text, index) => (
            <ListItem component={Link} to={text} button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <HomeIcon color="secondary" /> : <CastForEducationIcon color="secondary" />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {adminResources.map((text, index) => (
            <ListItem component={Link} to={text} button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <DashboardIcon color="secondary" /> : <DashboardIcon color="secondary" />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {authenticatedResources.map((text, index) => (
            <ListItem component={Link} to={text} button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon color="secondary" /> : <ExitToAppIcon color="secondary" />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </>
    );
}