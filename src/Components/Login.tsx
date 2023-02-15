import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface Props {
  handleLogin: (data:any) => void;
}
const Login: React.FC<Props> = ({handleLogin}) => {
  const [show, setShow] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleClose = () => {
    handleLogin({username, password})
    setShow(false);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Please log in!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>username</Form.Label>
            <Form.Control value={username} onChange={({target:{value}}) => setUsername(value)} type="text" placeholder="Enter your username" />
            <Form.Text className="text-muted">
              Username
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={({target:{value}}) => setPassword(value)}  type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
    </Modal>

  );
};

export default Login;
