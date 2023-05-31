import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
