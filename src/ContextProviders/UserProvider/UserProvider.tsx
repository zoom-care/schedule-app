import React, { useContext, useEffect, useState } from "react";
import { IUserContext, LoginResponse } from "../../zoomcare-api";

const UserContext = React.createContext({} as IUserContext);

let initialUser: LoginResponse | null;

try {
    initialUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (!initialUser?.username) initialUser = null;
} catch {
    console.log('The user json object could not be parsed');
    initialUser = null;
}

export const UserProvider = (props: any) => {
    const [user, setUser] = useState(() => initialUser);

    //Send boolean to check if redirect is needed
    const handleSetUser = (newUser: LoginResponse) => {
        setUser(newUser);
    }

    const contextValue = { user, handleSetUser };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser hook must be used within a UserProvider")
    return context;
}