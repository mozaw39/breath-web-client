import Axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { UserContext, UserDispatchContext } from '../UserContext';

const API_URL = "http://localhost:8080/Breath/webapi/authenticated/allusers/"

export default function useQuery({username, password}){
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const userContext = useContext(UserContext);
    const userDispatchContext = useContext(UserDispatchContext);

    useEffect(
       function (){
        const fetchCall = () => {
        userDispatchContext({...userContext, isLoading: true})
        Axios.get(API_URL + username, {
            auth: {
                userContext.user.username,
                userContext.user.password
            }
        })
      .then((repos) => {
          console.log("result: " + repos);
          setData(repos.data)
        userDispatchContext({...userContext, isLoading: false});
      }).catch( (error) => userDispatchContext({...userContext, error: true}) );
    }
    if(password && username) fetchCall();
    }
    
    , [userContext])



    return error;
}