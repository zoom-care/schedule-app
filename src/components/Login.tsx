import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const LoginEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const target = e.target as typeof e.target & {
      username: HTMLInputElement,
      password: HTMLInputElement
    }

    const { username, password } = target;

    localStorage.setItem('user-info', JSON.stringify({
      username: username.value, password: password.value,
    }));

    navigate('/clinic');
  }

  return (
    <form onSubmit={LoginEvent} className='login-form'>
      <input type="text" name="username" placeholder='Username' required />
      <input type="password" name="password" placeholder='Password' required />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login