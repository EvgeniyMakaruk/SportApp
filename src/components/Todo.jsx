import React from 'react'
import { Link, Route } from 'react-router-dom'
import '../App.scss'
import { NewTargets } from './Todos/NewTargets'

export const Todo = () => {
   return (
      <div className="Todo">
         <ul>
            <li>Новые цели</li>
            <li>Посмотреть цели</li>
            <NewTargets/>
            

         </ul>
      </div>
   )
}
