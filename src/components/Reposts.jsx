import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllRepostPost, deleteRepostPost } from '../Redux/ActionCreators/SeartchAC'

export const Reposts = () => {

   const { addRepostPost } = useSelector(store => store.SeartchRed)
   const dispatch = useDispatch()




   return (
      <div className="reposts">

         {addRepostPost.length>=2 && <button onClick={() => dispatch(deleteAllRepostPost())} className="reposDeleteAll">Удалить все</button>}
         {addRepostPost.length === 0 && <p className="NoReposts">У вас нету репостов</p>}
         {
            addRepostPost.map((el, index) =>
               <div className="renderUnicPosts">

                  <div>
                     <h3>{el.name}</h3>
                     <p>{el.title}</p>

                  </div>
                  <button onClick={() => dispatch(deleteRepostPost(index))} >удалить</button>
               </div>


            )
         }
      </div>
   )
}
