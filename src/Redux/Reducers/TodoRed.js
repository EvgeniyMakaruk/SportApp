import React from 'react'
const ADD_TODO = 'ADD_TODO'
const IS_ADD_OPEN = 'IS_ADD_OPEN'
const CHANGE_VALUE_TODO = 'CHANGE_VALUE_TODO'

const initialState = {
   daylyTodos: [
      { completed: false, title: 'Отжаться 20 раз' },
   ],
   weaklyTodos: [
      { completed: false, title: 'присесть 20 раз' },
   ],
   toggleTodoOpen: false,
   todoValue: '',
   


}

export const TodoRed = (state = initialState, action) => {
   switch (action.type) {
      case ADD_TODO: {
         return {

         }
      }
      case IS_ADD_OPEN: {
         return {
            ...state,
            toggleTodoOpen: false
         }
      }
      case CHANGE_VALUE_TODO: {
         return {
            ...state,
            todoValue: action.payload,
            daylyTodos: [
               ...state.daylyTodos, { completed: false, title: action.payload }
            ],





         }
      }
      default:
         return state
   }
}