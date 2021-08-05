import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCompletedTodos, deleteDailyTodo, toggleCompleted } from '../../Redux/ActionCreators/TodoAC'

export const DailyTargets = ({ daylyTodos }) => {
   const dispatch = useDispatch()





   return (
      <div>
         <h3>Задачи на день</h3>

         {

            daylyTodos.map((el, index) =>

               <div className={` ${el.completed ? "TodoTargetsActive" : "TodoTargets"}`} key={index}  >

                  <p>{el.title}</p>
                  <div>
                     <button onClick={() => dispatch(deleteDailyTodo(index))}>отменить</button>
                     <button onClick={() => dispatch(toggleCompleted(index))}>сделано</button>
                  </div>
               </div>

            )
         }

      </div>
   )
}
//