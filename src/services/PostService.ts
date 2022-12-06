import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPosts } from '../models/IPosts'

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["POST"],
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPosts[], number>({
            query: (limit: number = 5) => ({
                url: "/posts",
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ["POST"]
        }),

        createPost: builder.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ["POST"]
        }),

        updatePost: builder.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post
            }),
            invalidatesTags: ["POST"]
        }),
        
        deletePost: builder.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: "DELETE",
                body: post
            }),
            invalidatesTags: ["POST"]
        })
            
        })
})