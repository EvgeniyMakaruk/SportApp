import React from 'react'
import s from './AllTodosModal.module.scss'

export const AllTodosModal = ({allTotos,setallTodoOpen}) => {
   console.log(allTotos);
   return (
      <div className={s.modal}>
         <h4>Твои выполненные дела</h4>
         <ul>
         {
            allTotos.map(el=><p>{el.title}</p>)
         }
         </ul>
         <button onClick={()=>setallTodoOpen(false)}>Закрыть</button>
      </div>
   )
}
