import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/auth';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch: any = useDispatch();
  const onLogin = (e: any) => {
    e.preventDefault();
    const userData = {
      username: userEmail,
      password: password
    }
    dispatch(loginUser(userData));
  }
  return (
    <div className="container px-3 py-5 d-flex flex-column justify-content-center" style={{height: '100vh', width: '100vw'}}>
      <form className="w-50 mx-auto" onSubmit={onLogin} >
        <h3 className="text-center fw-900 fs-1">Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e => setUserEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
      </form>
    </div>

  );
}

export default Login;