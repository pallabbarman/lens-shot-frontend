import { IApiResponse } from '@/types/response';
import baseApi from './api';

const portfolioApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPortfolios: build.query<IApiResponse<string[]>, undefined>({
            query: () => ({
                url: '/portfolio',
            }),
        }),
    }),
});

export const { useGetPortfoliosQuery } = portfolioApi;

export default portfolioApi.reducer;
