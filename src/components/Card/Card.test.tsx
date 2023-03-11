import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const MOCK_DATA = [{
  id: 1,
  name: 'Clinic A',
  address: '1455 NW Irving',
  city: 'Portland',
  state: 'Oregon',
  zipcode: '97209',
  appointments: [
    {
      provider: {
        id: 1,
        name: 'Provider A',
        credentials: 'P.A.',
        language: 'English, Spanish',
        phoneNumber: '+1 555-555-5555',
      },
      list: [
        {
          id: 1,
          clinicId: 1,
          durationInMinutes: 30,
          startTime: '2020-02-08 20:30-07:00',
          formatedTime: '9:30 PM',
        },
        {
          id: 3,
          clinicId: 1,
          durationInMinutes: 60,
          startTime: '2020-04-20 13:30-07:00',
          formatedTime: '3:30 PM',
        },
        {
          id: 6,
          clinicId: 1,
          durationInMinutes: 60,
          startTime: '2020-07-10 11:45-07:00',
          formatedTime: '1:45 PM',
        },
      ],
    },
    {
      provider: {
        id: 3,
        name: 'Provider C',
        credentials: 'M.C.',
        language: 'Spanish',
        phoneNumber: '+1 555-555-1234',
      },
      list: [
        {
          id: 7,
          clinicId: 1,
          durationInMinutes: 30,
          startTime: '2020-08-21 14:30-07:00',
          formatedTime: '4:30 PM',
        },
      ],
    },
  ],
}];

test('Card component test', () => {
  render(<Card appointments={MOCK_DATA}/>);
  const card = screen.getByTestId('card');
  expect(card).toBeInTheDocument();
});
