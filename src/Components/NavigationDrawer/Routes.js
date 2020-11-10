import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../../Pages/AdminPages/Dashboard';
import Profile from '../../Pages/AuthenticatedPages/Profile';
import Formations from '../../Pages/Formations';
import Home from '../../Pages/Home';
import SignInPage from '../../Pages/SignInPage';
import SignUpPage from '../../Pages/SignUpPage';
import { UserContext } from '../../UserContext';

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/home" > <Home/> </Route>
            <Route path="/formations" > <Formations/> </Route>
            <Route path="/dashboard" > <Dashboard/> </Route>
            <Route path="/profile" > <Profile/> </Route>
            <Route path="/sign-in" > <SignInPage/> </Route>
            <Route path="/sign-up" > <SignUpPage/> </Route>
        </Switch>
            
    );
}