import { IApiResponse } from '@/types/response';
import { IService } from '@/types/services';
import baseApi from './api';

const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addService: build.mutation<IApiResponse<IService>, IService>({
            query: (data) => ({
                url: '/services',
                method: 'POST',
                body: data,
            }),
        }),
        getServices: build.query<IApiResponse<IService[]>, undefined>({
            query: () => ({
                url: '/services',
            }),
        }),
        getService: build.query<IApiResponse<IService>, string>({
            query: (id) => ({
                url: `/services/${id}`,
            }),
        }),
        editService: build.mutation<
            IApiResponse<IService>,
            { id: string; data: Partial<IService> }
        >({
            query: ({ id, data }) => ({
                url: `/services/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['feedback'],
        }),
        deleteService: build.mutation<IApiResponse<IService>, string>({
            query: (id) => ({
                url: `/services/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useAddServiceMutation,
    useGetServicesQuery,
    useGetServiceQuery,
    useEditServiceMutation,
    useDeleteServiceMutation,
} = serviceApi;

export default serviceApi.reducer;
