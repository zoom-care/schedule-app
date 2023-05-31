import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentAuthToken } from './authSlice';

const RequireAuth = () => {
  const token = useSelector(currentAuthToken);
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
