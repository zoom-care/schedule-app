import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import axios from "axios";
import {LoginResponse, Login} from './zoomcare-api';

function App() {

  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    getAuthToken();
  }, [])

  const getAuthToken = async () => {
    const requestBody: Login = {
      username: 'username',
      password: 'password'
    };

    let result: LoginResponse = (await axios.post<LoginResponse>('/api/login', requestBody)).data;
    setAuthToken(result.authToken);
  }

  return (
    <Box
      sx={{
        margin: "2em",
      }}
    >
 
    </Box>
  );
}

export default App;
