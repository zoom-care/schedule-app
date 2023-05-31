import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './authApiSlice';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';

const LoginScreen = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login({ username, password }).unwrap();
      navigate('/appointments');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    usernameRef?.current?.focus();
  }, []);

  const handleUserNameInput = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            ref={usernameRef}
            type="text"
            value={username}
            onChange={handleUserNameInput}
            aria-label="Enter Username"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handlePasswordInput}
            aria-label="Enter Password"
          ></Form.Control>
        </Form.Group>

        <Button
          disabled={isLoading}
          type="submit"
          variant="primary"
          className="mt-3"
        >
          Login
        </Button>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
