import { Token } from "./types";

export const readLocalToken = () => {
  const localToken = localStorage.getItem('token');
  return localToken ? JSON.parse(localToken) : null;
};

export const isValidToken = (token: Token) =>
  token?.hasOwnProperty('authToken');

export const formatTime = (date: string) => date.split(' ')[1];
