import React from 'react'
const ADD_POSTS = 'ADD_POSTS'
const DELETE_POST = 'DELETE_POST'
const DELETE_ALL_POST = 'DELETE_ALL_POST'
const TOGGLE_MODAL = 'TOGGLE_MODAL'

const initialState = {
   posts: [],
   isOpenModal: false,

}

export const wallRed = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POSTS: {
         return {
            ...state,
            posts: [
               ...state.posts, action.payload
            ]
         }
      }
      case DELETE_POST: {
         return {
            ...state,
            posts: [
               ...state.posts.slice(0, action.payload).concat(...state.posts.slice(action.payload + 1))
            ]
         }
      }
      case DELETE_ALL_POST: {
         return {
            ...state,
            posts: [],
            isOpenModal: false,

         }
      }
      case TOGGLE_MODAL: {
         return {
            ...state,
            isOpenModal: action.payload


         }
      }
      default:
         return state
   }

}
