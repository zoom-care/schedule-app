// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

describe('renderUI', () => {
  it('renders the UI with the correct data', async () => {
    // Set up the mock API responses
    const mockLoginResponse = {
      token: 'mock-token'
    };
    const mockAppointmentsResponse = {
      appointments: [
        {
          providerId: 'p1',
          provider: {
            name: 'Dr. Smith',
            credentials: 'MD',
            phone: '123-456-7890'
          },
          clinicId: 'c1',
          startTime: '9:00 AM'
        },
        {
          providerId: 'p1',
          provider: {
            name: 'Dr. Smith',
            credentials: 'MD',
            phone: '123-456-7890'
          },
          clinicId: 'c1',
          startTime: '9:30 AM'
        },
        {
          providerId: 'p2',
          provider: {
            name: 'Dr. Johnson',
            credentials: 'MD',
            phone: '123-456-7890'
          },
          clinicId: 'c2',
          startTime: '10:00 AM'
        }
      ]
    };
    const mockClinicsResponse = {
      clinic: {
        name: 'Clinic 1',
        address: '123 Main St, Anytown USA'
      }
    };
    const mockFetch = jest.fn().mockImplementation(path => {
      if (path === '/api/login') {
        return Promise.resolve({
          json: () => Promise.resolve(mockLoginResponse)
        });
      } else if (path === '/api/appointments') {
        return Promise.resolve({
          json: () => Promise.resolve(mockAppointmentsResponse)
        });
      } else if (path === '/api/clinics/c1') {
        return Promise.resolve({
          json: () => Promise.resolve(mockClinicsResponse)
        });
      } else {
        return Promise.reject(new Error('Unexpected API call'));
      }
    });
    global.fetch = mockFetch;

    // Render the UI
    await renderUI();

    // Check that the UI was rendered with the correct data
    const providersElement = document.getElementById('providers');
    expect(providersElement).toHaveTextContent('Dr. Smith (MD)');
    expect(providersElement).toHaveTextContent('123-456-7890');
    expect(providersElement).toHaveTextContent('Clinic 1');
    expect(providersElement).toHaveTextContent('123 Main St, Anytown USA');
    expect(providersElement).toHaveTextContent('9:00 AM');
    expect(providersElement).toHaveTextContent('9:30 AM');
    expect(providersElement).toHaveTextContent('Dr. Johnson (MD)');

