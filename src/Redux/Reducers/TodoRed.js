import React from 'react'
const ADD_TODO = 'ADD_TODO'

const initialState = {
   todos: [
      { id: 1, completed: false, title:'Отжаться 20 раз'}
   ]

}

export const wallRed = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TODO: {
         return {

         }
      }
      default:
         return state
   }
}