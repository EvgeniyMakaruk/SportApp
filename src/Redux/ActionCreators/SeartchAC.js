import React from 'react'
const GET_ASYNC_POSTS = 'GET_ASYNC_POSTS'
const REMOVE_POST = 'REMOVE_POST'
const REPOST_POST = 'REPOST_POST'
const DELETE_REPOST_POST='DELETE_REPOST_POST'
const DELETE_ALL_REPOST_POST='DELETE_ALL_REPOST_POST'

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
export const deleteRepostPost = (payload) => ({
   type: DELETE_REPOST_POST,
   payload,
})
export const deleteAllRepostPost = (payload) => ({
   type: DELETE_ALL_REPOST_POST,
   payload,
})