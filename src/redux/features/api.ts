import { getBaseUrl } from '@/utils/url';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../app';

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
        prepareHeaders(headers, api) {
            const { auth } = api.getState() as RootState;

            if (auth) {
                headers.set('Authorization', auth?.accessToken);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['comments', 'feedback'],
});

export default baseApi;
