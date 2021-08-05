import React from 'react'
import { addDailyTodo, addUnicTodos, addWeaclyTodo, isAddTodoOpen, openAllTodos, openDailyTodos, openMonthlyTodos } from '../../Redux/ActionCreators/TodoAC'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Targets.scss'
import { DailyTargets } from './DailyTargets2'
import { WeaklyTargets } from './WeaklyTargets'
import { AllTodosModal } from '../../assets/AllTodosModal/AllTodosModal'


export const NewTargets = () => {

   const dispatch = useDispatch()

   const { daylyTodos, toggleTodoOpen, weaklyTodos, unickTodos, isAllTodoOpen,
      isDailyTodosOpen, isMonthlyTodosOpen, allCompletedTodos } = useSelector(store => store.TodoRed)

   let answer = [];
   allCompletedTodos.forEach(x => {
      if (!answer.some(y => JSON.stringify(y) === JSON.stringify(x))) {
         answer.push(x)
      }
   })

   const allTodos = answer.length




   const prevDefTodo = (e) => {
      e.preventDefault()
      dispatch(isAddTodoOpen(value))
      setvalue('')
   }

   const dispatchDailyTodo = (str) => {
      if (str.length !== 0) {
         dispatch(addDailyTodo(value))
      }
   }
   const dispatchWeaclyTodo = (str) => {
      if (str.length !== 0) {
         dispatch(addWeaclyTodo(value))
      }
   }
   const [value, setvalue] = React.useState('')

   const [allTodoOpen, setallTodoOpen] = React.useState(false)


   return (

      <div className="newTargets">

         <li onClick={()=>setallTodoOpen(true)}>Выполненные задачи <strong>{allTodos}</strong></li>
         {allTodoOpen && <AllTodosModal allTotos={answer} setallTodoOpen={setallTodoOpen} />}

         <form action="" onSubmit={prevDefTodo}>
            <input
               required
               placeholder="Новое дело"
               type="text" value={value}
               onChange={(event) => setvalue(event.target.value)}
            />



            {
               !toggleTodoOpen && <>
                  <button onClick={() => dispatchDailyTodo(value)}>На день</button>
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
