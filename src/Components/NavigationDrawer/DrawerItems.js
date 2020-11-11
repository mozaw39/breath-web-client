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
import WithAuthentication from '../../Pages/AuthenticatedPages/WithAuthentication';
import WithAuthorization from '../../Pages/AdminPages/withAuthorization';

const publicResources = ['home', 'formations'];
const authenticatedResources = ['profile', 'logout'];
const adminResources = ['dashboard'];

export default function DrawerItems(){
    return (
        <>
        <List>
          {publicResources.map((text, index) => (
            <ListItem component={Link} to={text} button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <HomeIcon color="inherit" /> : <CastForEducationIcon color="inherit" />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
          <WithAuthorization>
        <List>
          {adminResources.map((text, index) => (
            <ListItem component={Link} to={text} button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <DashboardIcon color="inherit" /> : <DashboardIcon color="inherit" />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
          </WithAuthorization>
        <Divider />
        <WithAuthentication>
        <List>
          {authenticatedResources.map((text, index) => (
            <ListItem component={Link} to={text} button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon color="inherit" /> : <ExitToAppIcon color="inherit" />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </WithAuthentication>
        </>
    );
}