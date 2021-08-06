import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../Redux/AsyncActions/AsyncActions'
import { useState } from 'react'
import s from '../assets/Seartch.module.scss'
import { getAsyncPosts, removePost, repostPost } from '../Redux/ActionCreators/SeartchAC'

export const Seartch = () => {

   const dispatch = useDispatch()

   const [currentPage, setcurrentPage] = useState(1)
   const [fetching, setfetching] = useState(true)
   const [totalCount, settotalCount] = useState(0)


   const { asyncPosts, deletePostId, addRepostPost } = useSelector(store => store.SeartchRed)
   React.useEffect(() => {
      if (fetching) {
         fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10_page=${currentPage}`)
            .then(response => response.json())
            .then(json => dispatch(getAsyncPosts(json)))
         setcurrentPage(prevState => prevState + 1)
         setfetching(false)



      }
   }, [fetching])




   React.useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return () => {
         document.removeEventListener('scroll', scrollHandler)
      }
   })
   const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
         setfetching(true)

         
      }

   }





   return (

      <div className={s.seartch}>
         {currentPage >3  && <a href="#" title="Вернуться к началу" className={s.topbutton}>Наверх</a>}
         {
            asyncPosts.map(el =>
               <div className={s.seartch__postList}>
                  <div>
                     <h3>{el.email}</h3>
                     <p>{el.body}</p>
                  </div>
                  <button onClick={() => dispatch(repostPost(el))}  >Репост</button>
                  <button onClick={() => dispatch(removePost(el.id))}>Удалить</button>
               </div>
            )
         }


      </div>
   )
}
