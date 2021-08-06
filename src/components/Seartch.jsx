import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsAsync } from '../Redux/AsyncActions/AsyncActions'

export const Seartch = () => {

   const dispatch = useDispatch()

   const { asyncPosts } = useSelector(store => store.SeartchRed)


   console.log(asyncPosts);
   return (
      <div className="seartch">
         <button onClick={() => dispatch(getPostsAsync())}>lj,fdbnm</button>
      </div>
   )
}
