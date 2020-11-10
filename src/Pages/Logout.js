import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { UserContext, UserDispatchContext, defaultValue } from '../UserContext'

export default function Logout(){
    const userContext = useContext(UserContext);
    const userDispatchContext = useContext(UserDispatchContext);
    userDispatchContext(defaultValue);
    return <Redirect to="/sign-in" />
}