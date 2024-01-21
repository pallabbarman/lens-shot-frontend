import { JwtPayload, jwtDecode } from 'jwt-decode';

export interface DecodedTokenProps extends JwtPayload {
    userId: string;
}

export const decodedToken = (token: string): DecodedTokenProps => {
    return jwtDecode(token);
};
