import React from 'react'
const GET_ASYNC_POSTS = 'GET_ASYNC_POSTS'


const initialState = {
   asyncPosts: []

}

export const SeartchRed = (state = initialState, action) => {
   switch (action.type) {
      case GET_ASYNC_POSTS: {
         return {
            ...state,
            asyncPosts: [
            ...state.asyncPosts, ...action.payload
            ]
         }
      }

      default:
         return state
   }

}