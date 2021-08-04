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




   const prevDefTodo = (e) => {
      e.preventDefault()
      dispatch(isAddTodoOpen(value))
      setvalue('')
   }

   const dispatchDailyTodo=(str)=>{
      if(str.length!==0){
         dispatch(addDailyTodo(value))
      }
   }
   const dispatchWeaclyTodo=(str)=>{
      if(str.length!==0){
         dispatch(addWeaclyTodo(value))
      }
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
                  <button onClick={() =>dispatchDailyTodo(value) }>На день</button>
                  <button onClick={() => dispatchWeaclyTodo(value)}>На неделю</button>
                  <button onClick={() => setvalue('')}>Очистить</button>
               </>
            }
         </form>
         <div className="openTasksButtons">
            <button onClick={() => dispatch(openDailyTodos())}>Задачи на день  <strong>{daylyTodos.length}</strong></button>
            <button onClick={() => dispatch(openMonthlyTodos())}>Задачи на неделю  <strong>{weaklyTodos.length}</strong></button>
         </div>
         {isDailyTodosOpen && <DailyTargets daylyTodos={daylyTodos} />}
         {isMonthlyTodosOpen && <WeaklyTargets weaklyTodos={weaklyTodos} />}

      </div>
   )
}
