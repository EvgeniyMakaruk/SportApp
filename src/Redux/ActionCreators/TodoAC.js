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

export const addTodo = (payload) => ({
   type: ADD_TODO,
   payload,
})
export const isAddTodoOpen = (payload) => ({
   type: IS_ADD_OPEN,
   payload,
})
export const addDailyTodo = (payload) => ({
   type: ADD_DAILY_TODO,
   payload,
})
export const addWeaclyTodo = (payload) => ({
   type: ADD_WEACLY_TODO,
   payload,
})
export const openDailyTodos = (payload) => ({
   type: IS_DAILY_TODOS_OPEN,
})
export const openMonthlyTodos = (payload) => ({
   type: IS_MONTHLY_TODOS_OPEN,
})
export const deleteDailyTodo = (payload) => ({
   type: DELETE_DAILY_TODO,
   payload
})
export const deleteMonthlyTodo = (payload) => ({
   type: DELETE_WEAKLY_TODO,
   payload
})
export const toggleCompleted = (payload) => ({
   type: TOGGLE_COMPLETED,
   payload
})
export const addCompleted = (payload) => ({
   type: ADD_COMPLETED,
   payload
})
export const addUnicTodos = (payload) => ({
   type: UNICK_TODOS,
   payload
})




