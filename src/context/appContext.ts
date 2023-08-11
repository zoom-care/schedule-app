import React from "react";
import { LoginResponse } from '../zoomcare-api';

export const AppContext = React.createContext<LoginResponse>({authToken: '', username: ''});