import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../Redux/AsyncActions/AsyncActions'
import { useState } from 'react'

export const Seartch = () => {

   const dispatch = useDispatch()

   const [currentPage, setcurrentPage] = useState(1)
   const [fetching, setfetching] = useState(true)


   const { asyncPosts } = useSelector(store => store.SeartchRed)
   React.useEffect(() => {
      if (fetching) {
         dispatch(getPostsAsync())
      }
   }, [])




   React.useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return () => {
         document.removeEventListener('scroll', scrollHandler)
      }
   })
   const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)<100){
         console.log('scroll');
      }

   }

   console.log(asyncPosts);



   return (
      <div className="seartch">

         {
            asyncPosts.map(el => <p>{el.name}</p>)
         }


      </div>
   )
}
