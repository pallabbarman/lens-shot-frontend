import { IContact } from '@/types/contact';
import { IApiResponse } from '@/types/response';
import baseApi from './api';

const contactApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        contact: build.mutation<IApiResponse<IContact>, IContact>({
            query: (data) => ({
                url: '/contact',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useContactMutation } = contactApi;

export default contactApi.reducer;
