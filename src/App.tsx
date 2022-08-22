import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import './App.css';
import ZoomCareCardList from './components/zoomCareCardList';
import { IUserData } from './types';

function App() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState<IUserData>();

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value)
  }, [])

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value)
  }, [])

  function handleButton() {
    axios.post("/api/login", {
      body: { "username":username, "password":password}
    })
    .then((response) => { 
      setUserData(response.data)
    }); 
  }

  if (userData) {
    return (
      <div className="App">
        <ZoomCareCardList username={userData.username} authToken={userData.authToken}/>
      </div>
    )
  }

  return (
      
    <Container component="main" maxWidth="xs" sx={{ mt: 5 }}>

      <div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div>
          <TextField
            variant="outlined" margin="normal" required fullWidth
            label="Username" autoComplete="username" autoFocus
            id="username" name="username" value={username} onChange={handleUsernameChange}
          />
          <TextField
            variant="outlined" margin="normal" required fullWidth
            label="Password" autoComplete="current-password"
            type="password" id="password" name="password" value={password} onChange={handlePasswordChange}
          />
          <Button
            fullWidth variant="contained" color="primary"
            type="submit" onClick={handleButton}
          >
            Sign In
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default App;
