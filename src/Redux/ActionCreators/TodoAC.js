import React from 'react'
const ADD_TODO = 'ADD_TODO'
const IS_ADD_OPEN = 'IS_ADD_OPEN'
const ADD_DAILY_TODO = 'ADD_DAILY_TODO'
const ADD_WEACLY_TODO = 'ADD_WEACLY_TODO'
const IS_DAILY_TODOS_OPEN = 'IS_DAILY_TODOS_OPEN'
const IS_MONTHLY_TODOS_OPEN = 'IS_MONTHLY_TODOS_OPEN'


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
