import React, { useContext, useState } from 'react';
import MainContext from '../core/MainContext';
import loginService from '../services/login-service';

const Login: React.FC = () => {
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setToken } = useContext(MainContext);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = await loginService.loginUser({
            username: username,
            password: password
        });
        
        setToken(token);
    };

    return (
        <div className="login__container">
            <h2>Please Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className='login__field'>
                    <label>
                        <p>User name</p>
                        <input type="text" onChange={e => setUserName(e.target.value)} />
                    </label>
                </div>
                <div className='login__field'>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className='login__buttons'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;