import axios from 'axios';
import Router from 'next/router';

let localStorageToken: string | null = '';

if (typeof window !== 'undefined') {
  localStorageToken = window.localStorage.getItem('token');
}

const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',

  timeout: 100 * 1000,

  // headers: {
  //   'Content-type': 'application/json',
  //   Authorization: `Bearer ${localStorageToken}`,
  // },
  withCredentials: false,
});

export const saveUserToken = (token: string) => {
  localStorage.setItem('token', token);
};

export default client;
