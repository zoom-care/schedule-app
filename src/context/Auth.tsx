import { useState, useEffect, createContext } from 'react';
import { useZoomCareApi } from '../hooks/useZoomCareApi';
import { Login } from '../zoomcare-api';

export const AuthProvider = ({ children } : any) => {
    const AuthContext = createContext({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const { onSignIn } = useZoomCareApi();

    const defaultCredentials : Login = {
        username: 'demo',
        password: '123'
    }

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