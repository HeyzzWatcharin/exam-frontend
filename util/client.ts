import axios from 'axios';

let localStorageToken: string | null = '';

if (typeof window !== 'undefined') {
  localStorageToken = window.localStorage.getItem('token');
}

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',

  timeout: 100 * 1000,

  withCredentials: false,
});

export const saveUserToken = (token: string) => {
  localStorage.setItem('token', token);
};

export default client;
