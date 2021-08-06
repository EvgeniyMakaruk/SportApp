import React from 'react'
const GET_ASYNC_POSTS = 'GET_ASYNC_POSTS'
const REMOVE_POST = 'REMOVE_POST'
const REPOST_POST = 'REPOST_POST'
const DELETE_REPOST_POST='DELETE_REPOST_POST'
const DELETE_ALL_REPOST_POST='DELETE_ALL_REPOST_POST'


const initialState = {
   asyncPosts: [],
   addRepostPost: []


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
      case REMOVE_POST: {
         return {
            ...state,
            asyncPosts: [
               ...state.asyncPosts.filter(n => n.id !== action.payload)
            ]
         }
      }
      case REPOST_POST: {
         return {
            ...state,
            addRepostPost:[
               ...state.addRepostPost, {name:action.payload.email, completed:true, title:action.payload.body, id:action.payload.id }
            ]

         }
      }
      case DELETE_REPOST_POST: {
         return {
            ...state,
            addRepostPost: [
               ...state.addRepostPost.filter((n,index) => index !== action.payload)
            ]
         }
      }
      case DELETE_ALL_REPOST_POST: {
         return {
            ...state,
            addRepostPost: [
               
            ]
         }
      }
      default:
         return state
   }

}