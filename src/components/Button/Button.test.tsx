import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button component test', () => {
  render(<Button label='test' />);
  const compoment = screen.getByTestId('button');

  expect(compoment).toBeInTheDocument();
  expect(compoment).toBeEnabled();
});


test('Button disabled', () => {
  render(<Button label='test' isDisabled={true} />);
  const compoment = screen.getByTestId('button');
    
  expect(compoment).toBeInTheDocument();
  expect(compoment).toBeDisabled();
});

