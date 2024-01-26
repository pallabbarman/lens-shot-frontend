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
            invalidatesTags: ['comments'],
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
        editComment: build.mutation<
            IApiResponse<IComment>,
            { id: string; data: Partial<IComment> }
        >({
            query: ({ id, data }) => ({
                url: `/comments/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['comments'],
        }),
        deleteComment: build.mutation<IApiResponse<IComment>, string>({
            query: (id) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['comments'],
        }),
    }),
});

export const {
    useAddCommentMutation,
    useGetCommentsQuery,
    useGetCommentQuery,
    useEditCommentMutation,
    useDeleteCommentMutation,
} = commentApi;

export default commentApi.reducer;
