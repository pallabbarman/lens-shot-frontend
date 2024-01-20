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
        }),
        getFeedbacks: build.query<IApiResponse<IFeedback[]>, undefined>({
            query: () => ({
                url: '/feedback',
            }),
        }),
        getFeedback: build.query<IApiResponse<IFeedback>, string>({
            query: (id) => ({
                url: `/feedback/${id}`,
            }),
        }),
    }),
});

export const {
    useAddFeedbackMutation,
    useGetFeedbacksQuery,
    useGetFeedbackQuery,
} = feedbackApi;

export default feedbackApi.reducer;
