import { createContext } from 'react';
import { Login } from '../zoomcare-api';

export interface AuthContextValues {
  username: string | undefined;
  isAuthenticated: boolean;
  login: (credentials: Login) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextValues);

export default AuthContext;
