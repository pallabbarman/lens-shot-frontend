import { isBrowser } from './window';

export const setToLocalStorage = (key: string, token: string) => {
    if (!key || !isBrowser) {
        return '';
    }

    return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
    if (!key || !isBrowser) {
        return '';
    }

    return localStorage.getItem(key);
};
