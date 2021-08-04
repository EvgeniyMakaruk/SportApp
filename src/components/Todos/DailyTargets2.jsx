import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const DailyTargets = ({ dailyTodoArr }) => {


   return (
      <div>
         {
            dailyTodoArr.map((el, index) =>
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
