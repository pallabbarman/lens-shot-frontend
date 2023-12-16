import { isProduction } from './environment';

const productionUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL;
const developmentUrl = process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

export const getBaseUrl = () => {
    if (isProduction()) {
        return productionUrl;
    } else {
        return developmentUrl;
    }
};
