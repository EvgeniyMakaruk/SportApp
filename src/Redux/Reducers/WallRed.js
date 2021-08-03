import React from 'react'
const ADD_POSTS = 'ADD_POSTS'

const initialState = {
   posts: [],
   
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
      default:
         return state
   }

}
