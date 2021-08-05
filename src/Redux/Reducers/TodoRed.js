import React from 'react'
const ADD_TODO = 'ADD_TODO'
const IS_ADD_OPEN = 'IS_ADD_OPEN'
const ADD_DAILY_TODO = 'ADD_DAILY_TODO'
const ADD_WEACLY_TODO = 'ADD_WEACLY_TODO'
const IS_DAILY_TODOS_OPEN = 'IS_DAILY_TODOS_OPEN'
const IS_MONTHLY_TODOS_OPEN = 'IS_MONTHLY_TODOS_OPEN'
const DELETE_DAILY_TODO = 'DELETE_DAILY_TODO'
const DELETE_WEAKLY_TODO = 'DELETE_WEAKLY_TODO,'
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
const ADD_COMPLETED = 'ADD_COMPLETED'
const UNICK_TODOS = 'UNICK_TODOS'
const OPEN_ALL_TODOS = 'OPEN_ALL_TODOS'


const initialState = {
   daylyTodos: [],
   weaklyTodos: [],
   toggleTodoOpen: false,
   todoValue: '',
   isDailyTodosOpen: true,
   isMonthlyTodosOpen: false,
   allCompletedTodos: [],
   unickTodos: [],
   


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
      case ADD_DAILY_TODO: {
         return {
            ...state,
            todoValue: action.payload,
            daylyTodos: [
               ...state.daylyTodos, { completed: false, title: action.payload }
            ],
         }
      }
      case ADD_WEACLY_TODO: {
         return {
            ...state,
            todoValue: action.payload,
            weaklyTodos: [
               ...state.weaklyTodos, { completed: false, title: action.payload }
            ],
         }
      }
      case IS_DAILY_TODOS_OPEN: {
         return {
            ...state,
            isDailyTodosOpen: true,
            isMonthlyTodosOpen: false,

         }
      }
      case IS_MONTHLY_TODOS_OPEN: {
         return {
            ...state,
            isMonthlyTodosOpen: true,
            isDailyTodosOpen: false,

         }
      }
      case DELETE_DAILY_TODO: {
         return {
            ...state,
            daylyTodos: [
               ...state.daylyTodos.slice(0, action.payload).concat(...state.daylyTodos.slice(action.payload + 1))
            ]
         }
      }
      case DELETE_WEAKLY_TODO: {
         return {
            ...state,
            weaklyTodos: [
               ...state.weaklyTodos.slice(0, action.payload).concat(...state.weaklyTodos.slice(action.payload + 1))
            ]
         }
      }
      case TOGGLE_COMPLETED: {
         return {
            ...state,
            daylyTodos: [
               ...state.daylyTodos.map((el, index) => {
                  if (index === action.payload) {
                     el.completed = !el.completed
                     state.allCompletedTodos.push({ completed: true, title: el.title })
                  }


                  return el
               })
            ],

         }
      }
      case ADD_COMPLETED: {
         return {
            ...state,
            weaklyTodos: [
               ...state.weaklyTodos.map((el, index) => {
                  if (index === action.payload) {
                     el.completed = !el.completed
                     state.allCompletedTodos.push({ completed: true, title: el.title })

                  }
                  return el
               })
            ],

         }
      }
      case UNICK_TODOS: {
         return {
            ...state,
            unickTodos: [
               ...state.unickTodos, action.payload.map(el => {
                  return { completed: true, title: el.title }
               })
            ]


         }
      }


      default:
         return state
   }
}