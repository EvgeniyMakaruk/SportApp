import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../Redux/AsyncActions/AsyncActions'
import { useState } from 'react'
import s from '../assets/Seartch.module.scss'
import { removePost, repostPost } from '../Redux/ActionCreators/SeartchAC'

export const Seartch = () => {

   const dispatch = useDispatch()

   const [currentPage, setcurrentPage] = useState(3)
   const [fetching, setfetching] = useState(true)



   const { asyncPosts, deletePostId,addRepostPost } = useSelector(store => store.SeartchRed)
   React.useEffect(() => {
      if (fetching) {

         dispatch(getPostsAsync(currentPage))

      }
   }, [])




   React.useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return () => {
         document.removeEventListener('scroll', scrollHandler)
      }
   })
   const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
         setfetching(true)
         setcurrentPage(prevState => prevState + 1)

      }

   }

   



   return (
      <div className={s.seartch}>

         {
            asyncPosts.map(el =>
               <div className={s.seartch__postList}>
                  <div>
                     <h3>{el.email}</h3>
                     <p>{el.body}</p>
                  </div>
                  <button onClick={()=>dispatch(repostPost(el))}  >Репост</button>
                  <button onClick={() => dispatch(removePost(el.id))}>Удалить</button>
               </div>
            )
         }


      </div>
   )
}
