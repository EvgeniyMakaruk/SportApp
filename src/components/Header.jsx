import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.scss'


export const Header = () => {
   const { addRepostPost } = useSelector(store => store.SeartchRed)
   const dispatch = useDispatch()
   return (
      <div className="HeaderContainer">
         <ul>
            <li><Link to="/">Стена</Link></li>
            <li><Link to='/Todo'>Список дел</Link></li>
            <li><Link to='seartch'>Поиск</Link></li>
            <li><Link to='/Reposts'>Репосты <strong>{addRepostPost.length}</strong></Link></li>
            
         </ul>
      </div>
   )
}
