import React from 'react'
import { changeFormTodo, isAddTodoOpen } from '../../Redux/ActionCreators/TodoAC'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Targets.scss'


export const NewTargets = () => {

   const dispatch = useDispatch()

   const { daylyTodos, toggleTodoOpen, todoValue } = useSelector(store => store.TodoRed)

   const todoArr = []
   console.log(todoArr);
   {
      daylyTodos.forEach((el, index) => {
         if (el.title.length !== 0) {
            todoArr.push(el)
         }
      })
   }


   const prevDefTodo = (e) => {
      e.preventDefault()
      
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

            {toggleTodoOpen && <button onClick={() => dispatch(isAddTodoOpen(false))}>Добавить</button>}

            {
               !toggleTodoOpen && <>
                  <button type='submit' onClick={() => dispatch(changeFormTodo(value))}>На день</button>
                  <button  >На неделю</button>
                  <button onClick={() => dispatch(isAddTodoOpen(true))}>Отмена</button>
               </>
            }



         </form>
         {

            todoArr.map((el, index) =>
               <div key={index} className="TodoTargets">
                  <p>{el.title}</p>
                  <div>
                     <button>отменить</button>
                     <button>	сделано</button>
                  </div>
               </div>
            )
         }

      </div>
   )
}
