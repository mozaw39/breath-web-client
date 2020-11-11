import Axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { UserContext, UserDispatchContext } from "../Context/UserContext";

const API_URL = "http://localhost:8080/Breath/webapi/authenticated/allusers/";

export default function useAuth({ username, password }) {
  const [error, setError] = useState(null);

  const userContext = useContext(UserContext);
  const userDispatchContext = useContext(UserDispatchContext);

  useEffect(
    function () {
      const fetchCall = () => {
        userDispatchContext({ ...userContext, isLoading: true });
        Axios.get(API_URL + username, {
          auth: {
            username,
            password,
          },
        })
          .then((repos) => {
            console.log("result: " + repos);
            userDispatchContext({
              ...userContext,
              isLoggedIn: true,
              isLoading: false,
              user: repos.data,
              error: false,
            });
          })
          .catch((error) =>
            userDispatchContext({ ...userContext, error: true })
          );
      };
      if (password && username) fetchCall();
    },

    [password, username]
  );

  return error;
}
