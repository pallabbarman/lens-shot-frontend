import { IComment } from '@/types/comment';
import { IApiResponse } from '@/types/response';
import baseApi from './api';

const commentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addComment: build.mutation<IApiResponse<IComment>, IComment>({
            query: (data) => ({
                url: '/comments',
                method: 'POST',
                body: data,
            }),
        }),
        getComments: build.query<IApiResponse<IComment[]>, undefined>({
            query: () => ({
                url: '/comments',
            }),
        }),
        getComment: build.query<IApiResponse<IComment>, string>({
            query: (id) => ({
                url: `/comments/${id}`,
            }),
        }),
        deleteComment: build.mutation<IApiResponse<IComment>, string>({
            query: (id) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useAddCommentMutation,
    useGetCommentsQuery,
    useGetCommentQuery,
    useDeleteCommentMutation,
} = commentApi;

export default commentApi.reducer;