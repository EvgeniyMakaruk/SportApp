import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMonthlyTodo } from '../../Redux/ActionCreators/TodoAC'

export const WeaklyTargets = ({ weaklyTodos }) => {
   const dispatch = useDispatch()

   return (
      <div>
         <h3>Задачи на неделю</h3>
         {
            weaklyTodos.map((el, index) =>
               <div key={index} className="TodoTargets">
                  <p>{el.title}</p>
                  <div>
                     <button onClick={() => dispatch(deleteMonthlyTodo(index))}>отменить</button>
                     <button>	сделано</button>
                  </div>
               </div>
            )
         }
      </div>
   )
}
