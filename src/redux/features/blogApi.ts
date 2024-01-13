import { IBlog } from '@/types/blog';
import { IApiResponse } from '@/types/response';
import baseApi from './api';

const blogApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addBlog: build.mutation({
            query: (data) => ({
                url: '/blogs',
                method: 'POST',
                body: data,
            }),
        }),
        getBlogs: build.query<IApiResponse<IBlog[]>, string>({
            query: (data) => ({
                url: `/blogs/${data ? `search=${data}` : ''}`,
            }),
        }),
        getBlog: build.query<IApiResponse<IBlog>, string>({
            query: (id) => ({
                url: `/blogs/${id}`,
            }),
        }),
    }),
});

export const { useAddBlogMutation, useGetBlogsQuery, useGetBlogQuery } =
    blogApi;

export default blogApi.reducer;
