import React from 'react'
const GET_ASYNC_POSTS = 'GET_ASYNC_POSTS'
const REMOVE_POST = 'REMOVE_POST'
const REPOST_POST = 'REPOST_POST'

export const getAsyncPosts = (payload) => ({
   type: GET_ASYNC_POSTS,
   payload,
})
export const removePost = (payload) => ({
   type: REMOVE_POST,
   payload,
})
export const repostPost = (payload) => ({
   type: REPOST_POST,
   payload,
})