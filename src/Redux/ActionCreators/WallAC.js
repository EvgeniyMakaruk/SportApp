import React from 'react'

const ADD_POSTS = 'ADD_POSTS'
const DELETE_POST = 'DELETE_POST'
const DELETE_ALL_POST = 'DELETE_ALL_POST'
const TOGGLE_MODAL = 'TOGGLE_MODAL'

export const addPost = (payload) => ({
   type: ADD_POSTS,
   payload,
})
export const deletePost = (payload) => ({
   type: DELETE_POST,
   payload,
})
export const deleteAllPost = (payload) => ({
   type: DELETE_ALL_POST,
   payload,
})
export const toggleModal = (payload) => ({
   type: TOGGLE_MODAL,
   payload,
})





