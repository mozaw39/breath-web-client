import Axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { UserContext, UserDispatchContext } from "../Context/UserContext";

const API_URL = "http://localhost:8080/Breath/webapi/";

export default function useQuery(url) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const userContext = useContext(UserContext);
  const userDispatchContext = useContext(UserDispatchContext);

  useEffect(
    function () {
      const fetchCall = () => {
        userDispatchContext({ ...userContext, isLoading: true });
        Axios.get(API_URL + url, {
          auth: {
            username: userContext.user.login,
            password: userContext.user.mdp,
          },
        })
          .then((repos) => {
            console.log("result: " + repos);
            setData(repos.data);
            console.log("data: " + data);
            userDispatchContext({ ...userContext, isLoading: false });
          })
          .catch((error) =>
            userDispatchContext({ ...userContext, error: true })
          );
      };
      // if(password && username)
      //   if (!data)
      fetchCall();
    },
    [url]
  );

  return { data, error };
}
