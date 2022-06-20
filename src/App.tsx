import './App.css';
import LoginService from './Services/Login/LoginService';
import useSWR from 'swr';
import { Login, LoginResponse } from './zoomcare-api';
import { useUser } from './ContextProviders/UserProvider/UserProvider';
import { useEffect } from 'react';
import Appointments from './Components/Appointments/Appointments';

const reqObjForLogin: Login = { username: 'oaca', password: '1234' };

function App() {
    const { user, handleSetUser } = useUser();
    const { data, error } = useSWR(user ? null : ['/api/login', reqObjForLogin], LoginService.login);

    useEffect(() => {
        if (data) handleSetUser(data);
    }, [data])

    if (error) return <span>Sorry, we got the following error: {error}</span>
    if (!data && !user) return <span>Loading...</span>

    return (
        <div className="App">
            <Appointments />
        </div>
    );
}

export default App;
