import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface LoginProps {
  updateToken: (token: { username?: string; password?: string }) => any;
}

const Login = ({ updateToken }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (ev: ChangeEvent<HTMLInputElement>) =>
    setUsername(ev.target.value);

  const handleChangePassword = (ev: ChangeEvent<HTMLInputElement>) =>
    setPassword(ev.target.value);

  const handleClick = async () => {
    try {
      const res = await fetch('api/login', {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const token = await res.json();
      updateToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ width: '600px' }}>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h5">Login</Typography>
            <TextField
              label="Username"
              onChange={handleChangeUsername}
              value={username}
            />
            <TextField
              label="Password"
              onChange={handleChangePassword}
              value={password}
              inputProps={{ type: 'password' }}
            />
            <Button color="primary" variant="contained" onClick={handleClick}>
              Login
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
