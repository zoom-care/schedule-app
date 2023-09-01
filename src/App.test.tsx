import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { IProviderProps } from './zoomcare-api';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/ZoomCare/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders providers', () => {
  render(<App />);
  const providerElements = screen.getAllByTestId('provider');
  expect(providerElements.length).toBeGreaterThan(0);
});

test('renders no providers message', () => {
  const emptyProviders: IProviderProps[] = [];
  jest.mock('./hooks/useAppointmentProviders', () => () => emptyProviders);

  render(<App />);
  const noProvidersElement = screen.getByText('No providers');
  expect(noProvidersElement).toBeInTheDocument();
});
