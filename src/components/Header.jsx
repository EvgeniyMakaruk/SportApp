import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss'


export const Header = () => {
   return (
      <div className="HeaderContainer">
         <ul>
            <li><Link to="/">Стена</Link></li>
            <li><Link to='/Todo'>Список дел</Link></li>
            <li><Link>Истории</Link></li>
            <li><Link>Избранное</Link></li>
            <li><Link>Контакты</Link></li>
         </ul>
      </div>
   )
}
