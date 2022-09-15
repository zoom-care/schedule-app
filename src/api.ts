import { readLocalToken, isValidToken } from './utils';

const formRequest = (url: string) => {
  const token = readLocalToken();
  if (isValidToken(token)) {
    return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token.authToken,
      },
    });
  }
  return Promise.reject();
};

export const getAppointments = async () =>
  await formRequest('api/appointments')
    .then((response) => {
      if (response?.status === 403) {
        throw Error();
      }
      return response;
    })
    .then((response) => response?.json());

export const getClinic = (id: number) =>
  formRequest(`api/clinics/${id}`)
    .then((response) => {
      if ([403, 404].includes(response?.status)) {
        throw Error();
      }
      return response;
    })
    .then((response) => response?.json());
