import React from "react";
import { LoginResponse } from '../zoomcare-api';

export const UserContext = React.createContext<LoginResponse>({authToken: '', username: ''});