import React from 'react'
import { addDailyTodo, addWeaclyTodo, isAddTodoOpen, openDailyTodos, openMonthlyTodos } from '../../Redux/ActionCreators/TodoAC'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Targets.scss'
import { DailyTargets } from './DailyTargets2'
import { WeaklyTargets } from './WeaklyTargets'


export const NewTargets = () => {

   const dispatch = useDispatch()

   const { daylyTodos, toggleTodoOpen, weaklyTodos, isDailyTodosOpen, isMonthlyTodosOpen } = useSelector(store => store.TodoRed)

   const dailyTodoArr = []
   const weaklyTodoArr = []

   {
      weaklyTodos.forEach((el, index) => {
         if (el.title.length !== 0) {
            weaklyTodoArr.push(el)
         }
      })
   }

   {
      daylyTodos.forEach((el, index) => {
         if (el.title.length !== 0) {
            dailyTodoArr.push(el)
         }
      })
   }


   const prevDefTodo = (e) => {
      e.preventDefault()
      dispatch(isAddTodoOpen(value))
      setvalue('')

   }
   const [value, setvalue] = React.useState('')

   return (
      <div className="newTargets">
         <form action="" onSubmit={prevDefTodo}>
            <input
               required
               placeholder="Новое дело"
               type="text" value={value}
               onChange={(event) => setvalue(event.target.value)}
            />



            {
               !toggleTodoOpen && <>
                  <button type='submit' onClick={() => dispatch(addDailyTodo(value))}>На день</button>
                  <button onClick={() => dispatch(addWeaclyTodo(value))}>На неделю</button>
                  <button onClick={() => setvalue('')}>Очистить</button>
               </>
            }
         </form>
         <div className="openTasksButtons">
            <button onClick={() => dispatch(openDailyTodos())}>Задачи на день</button>
            <button onClick={() => dispatch(openMonthlyTodos())}>Задачи на неделю</button>
         </div>
         {isDailyTodosOpen && <DailyTargets dailyTodoArr={dailyTodoArr} />}
         {isMonthlyTodosOpen && <WeaklyTargets weaklyTodoArr={weaklyTodoArr} />}

      </div>
   )
}
