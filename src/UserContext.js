import React, {createContext, useState} from 'react';

const defaultValue ={
    user: {}, // user context
    isLoggedIn: false, //auth context
    isLoading: false, //app state
    error: false
}

const UserContext = createContext(defaultValue);
const UserDispatchContext = createContext(defaultValue);

function UserContextProvider({children}){
    const [state, setState] = useState({
        defaultValue
    });
    return (
        <UserContext.Provider value={state}>
        <UserDispatchContext.Provider value={setState}>
            {children}
        </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export {defaultValue, UserContext, UserDispatchContext, UserContextProvider}