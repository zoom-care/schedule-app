import { useState, useEffect, useContext, createContext } from 'react';
import { useZoomCareApi } from '../hooks/useZoomCareApi';
import { Login, LoginResponse } from '../zoomcare-api';

const defaultCredentials : Login = {
    username: 'demo',
    password: '123'
}

const initialResponse = { username : '', authToken: ''};

const AuthContext = createContext<LoginResponse>(initialResponse);

export const AuthProvider = ({ children } : any) => {
    const [user, setUser] = useState<LoginResponse>(initialResponse);
    const [loading, setLoading] = useState(true);
    const { onSignIn } = useZoomCareApi();

    useEffect(() => {
        setLoading(true);

        onSignIn(defaultCredentials).then((response) => {
            setUser(response);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        }) 
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}