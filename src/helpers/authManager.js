import { AUTH_TOKEN } from 'constants/auth';
import { createLocalStorage } from "localstorage-ponyfill";

const localStorage = createLocalStorage({ mode : "memory" });
export const getToken = () => localStorage.getItem(AUTH_TOKEN);
export const setToken = VALUE => localStorage.setItem(AUTH_TOKEN, VALUE);
export const removeToken = () => localStorage.removeItem(AUTH_TOKEN);
