import React from 'react'

export const Paginator = ({ arr, paginate }) => {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil((arr.length / 5)); i++) {
      pageNumbers.push(i)
   }
   return (
      <div>
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
