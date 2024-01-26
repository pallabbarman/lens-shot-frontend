import { IFeedback } from '@/types/feedback';
import { IApiResponse } from '@/types/response';
import baseApi from './api';

const feedbackApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addFeedback: build.mutation<IApiResponse<IFeedback>, IFeedback>({
            query: (data) => ({
                url: '/feedback',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['feedback'],
        }),
        getFeedbacks: build.query<IApiResponse<IFeedback[]>, undefined>({
            query: () => ({
                url: '/feedback',
            }),
            providesTags: ['feedback'],
        }),
        getFeedback: build.query<IApiResponse<IFeedback>, string>({
            query: (id) => ({
                url: `/feedback/${id}`,
            }),
        }),
        editFeedback: build.mutation<
            IApiResponse<IFeedback>,
            { id: string; data: Partial<IFeedback> }
        >({
            query: ({ id, data }) => ({
                url: `/feedback/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['feedback'],
        }),
        deleteFeedback: build.mutation<IApiResponse<IFeedback>, string>({
            query: (id) => ({
                url: `/feedback/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['feedback'],
        }),
    }),
});

export const {
    useAddFeedbackMutation,
    useGetFeedbacksQuery,
    useGetFeedbackQuery,
    useEditFeedbackMutation,
    useDeleteFeedbackMutation,
} = feedbackApi;

export default feedbackApi.reducer;
