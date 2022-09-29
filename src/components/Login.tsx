import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: HTMLInputElement,
      password: HTMLInputElement
    }
    const { username, password } = target;

    localStorage.setItem('clinic-info', JSON.stringify({
      username: username.value,
      password: password.value,
    }));
    navigate('/clinic');
  }

  return (
    <form onSubmit={handleLogin} className='login-form'>
      <input type="text" name="username" placeholder='User Name' required />
      <input type="password" name="password" placeholder='Password' required />
      <button type='submit'>login</button>
    </form>
  )
}

export default Login