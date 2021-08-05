import React from 'react'
import { useDispatch } from 'react-redux'
import { addCompleted, deleteMonthlyTodo, toggleCompleted } from '../../Redux/ActionCreators/TodoAC'

export const WeaklyTargets = ({ weaklyTodos }) => {
   const dispatch = useDispatch()

   return (
      <div>
         <h3>Задачи на неделю</h3>
         {
            weaklyTodos.map((el, index) =>
               <div key={index} className={` ${el.completed ? "TodoTargetsActive" : "TodoTargets"}`}>
                  <p>{el.title}</p>
                  <div>
                     <button onClick={() => dispatch(deleteMonthlyTodo(index))}>отменить</button>
                     <button disabled={el.completed} onClick={() => dispatch(addCompleted(index))}>	сделано</button>
                     
                  </div>
               </div>
            )
         }
      </div>
   )
}
