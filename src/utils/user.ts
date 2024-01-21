import { decodedToken } from './jwt';
import { getFromLocalStorage } from './storage';

export const getUserId = () => {
    const authToken = getFromLocalStorage('auth');
    if (authToken) {
        const decodedData = decodedToken(authToken);
        return decodedData;
    }
};
