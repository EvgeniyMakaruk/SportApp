import React from 'react'
import { useSelector } from 'react-redux'

export const Reposts = () => {

   const { addRepostPost } = useSelector(store => store.SeartchRed)
   let unickRepost = [];
   addRepostPost.forEach(x => {
      if (!unickRepost.some(y => JSON.stringify(y) === JSON.stringify(x))) {
         unickRepost.push(x)
      }
   })



   console.log(unickRepost);
   return (
      <div className="reposts">
         {
            unickRepost.map(el =>
               <div className="renderUnicPosts">

                  <div>
                     <h3>{el.name}</h3>
                     <p>{el.title}</p>

                  </div>
                  <button >удалить</button>
               </div>


            )
         }
      </div>
   )
}
