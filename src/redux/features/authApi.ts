import { IApiResponse } from '@/types/response';
import { IUser } from '@/types/user';
import { setToLocalStorage } from '@/utils/storage';
import baseApi from './api';
import { userLoggedIn } from './authSlice';

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userRegistration: build.mutation<IApiResponse<IUser>, IUser>({
            query: (data) => ({
                url: '/auth/signup',
                method: 'POST',
                body: data,
            }),
        }),
        userLogin: build.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(_arg, api) {
                try {
                    const result = await api.queryFulfilled;

                    setToLocalStorage('auth', result.data?.data?.accessToken);
                    api.dispatch(userLoggedIn(result.data?.data?.accessToken));
                } catch (error) {
                    console.error(error);
                }
            },
        }),
    }),
});

export const { useUserLoginMutation, useUserRegistrationMutation } = authApi;

export default authApi.reducer;
