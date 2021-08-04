import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDailyTodo, toggleCompleted } from '../../Redux/ActionCreators/TodoAC'

export const DailyTargets = ({ dailyTodoArr, toodleTodoCompete, daylyTodos }) => {
   const dispatch = useDispatch()


   return (
      <div>
         <h3>Задачи на день</h3>
         {
            daylyTodos.map((el, index) =>
               <div key={index} className="TodoTargets">
                  <p>{el.title}</p>
                  <div>
                     <button onClick={() => dispatch(deleteDailyTodo(index))}>отменить</button>
                     <button toodleTodoCompete={() => toodleTodoCompete(index)}>сделано</button>
                  </div>
               </div>
            )
         }
      </div>
   )
}
