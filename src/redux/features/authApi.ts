import baseApi from './api';

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                data,
            }),
        }),
    }),
});

export const { useUserLoginMutation } = authApi;

export default authApi.reducer;
