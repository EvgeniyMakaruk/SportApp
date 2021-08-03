import React from 'react'
import s from './Paginator.module.scss'

export const Paginator = ({ postsPerPage, posts, paginate }) => {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil((posts.length / postsPerPage)); i++) {
      pageNumbers.push(i)
   }
   return (
      <div className={s.paginator}>
         <ul className="pagination">
            {
               pageNumbers.map(number => (
                  <li onClick={() => paginate(number)}
                     className="pageItem"
                     key={number}>{number}
                  </li>
               ))
            }
         </ul>
      </div>
   )
}
