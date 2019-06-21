import { AUTH_TOKEN } from 'constants/auth';

export const getToken = () => localStorage.getItem(AUTH_TOKEN);
export const setToken = VALUE => localStorage.setItem(AUTH_TOKEN, VALUE);
export const removeToken = () => localStorage.removeItem(AUTH_TOKEN);
