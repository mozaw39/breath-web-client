import Axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { UserContext, UserDispatchContext } from "../Context/UserContext";

const API_URL = "http://localhost:8080/Breath/webapi/";

export default function usePostQuery(url, postBody) {
  const [error, setError] = useState(null);
  const [isSignedUp, setSignedUp] = useState(false);
  const userContext = useContext(UserContext);
  const userDispatchContext = useContext(UserDispatchContext);

  useEffect(
    function () {
      const fetchCall = () => {
        console.log("we are in");
        console.log(postBody);
        userDispatchContext({ ...userContext, isLoading: true });
        Axios.post(API_URL + url, {
          // user context
          login: postBody.login,
          mdp: postBody.mdp,
          nom: postBody.nom,
          prenom: postBody.prenom,
          numTele: postBody.numTele,
          adresseMail: postBody.adresseMail,
        })
          .then((repos) => {
            console.log(repos);
            setSignedUp(true);
          })
          .catch((error) => {
            console.log("use PostQuery error: " + error);
            userDispatchContext({ ...userContext, error: true });
            setSignedUp(false);
          });
      };
      // if(password && username)
      if (postBody) fetchCall();
    },
    [url, postBody]
  );

  return { isSignedUp, error };
}
