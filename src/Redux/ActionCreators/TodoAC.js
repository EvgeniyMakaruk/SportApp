import React from 'react'
const ADD_TODO = 'ADD_TODO'
const IS_ADD_OPEN = 'IS_ADD_OPEN'
const CHANGE_VALUE_TODO='CHANGE_VALUE_TODO'


export const addTodo = (payload) => ({
   type: ADD_TODO,
   payload,
})
export const isAddTodoOpen = (payload) => ({
   type: IS_ADD_OPEN,
   payload,
})
export const changeFormTodo = (payload) => ({
   type: CHANGE_VALUE_TODO,
   payload,
})
