import { IApiResponse } from '@/types/response';
import { IUser } from '@/types/user';
import baseApi from './api';

const profileApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getProfile: build.query<IApiResponse<IUser>, undefined>({
            query: () => ({
                url: '/profile',
            }),
        }),
    }),
});

export const { useGetProfileQuery } = profileApi;

export default profileApi.reducer;
