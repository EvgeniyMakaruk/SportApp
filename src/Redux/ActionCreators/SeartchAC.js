import React from 'react'
const GET_ASYNC_POSTS = 'GET_ASYNC_POSTS'

export const getAsyncPosts = (payload) => ({
   type: GET_ASYNC_POSTS,
   payload,
})