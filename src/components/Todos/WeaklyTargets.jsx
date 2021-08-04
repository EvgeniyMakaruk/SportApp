import React from 'react'

export const WeaklyTargets = ({ weaklyTodoArr }) => {


   return (
      <div>
         {
            weaklyTodoArr.map((el, index) =>
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
