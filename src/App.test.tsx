import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Appointments App', () => {
  render(<App />);
  const headerElement = screen.getByText(/Appointments App/i);
  expect(headerElement).toBeInTheDocument();
});
