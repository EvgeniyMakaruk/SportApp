import React from 'react'
import MyAvatar from '../images/MyAvatar.jpg'
import { Paginator } from '../assets/Paginator'

export const Wall = () => {

   const [posts, setPosts] = React.useState([])
   const [value, setValue] = React.useState('')
   const prevDef = (event) => {
      event.preventDefault()
      setPosts([...posts, value])
      setValue('')
   }


   const [currentPage, setCurrentPage] = React.useState(1)
   const [postsPerPage] = React.useState(5)
   const LastPostIndex = currentPage * postsPerPage
   const firstPostIndex = LastPostIndex - postsPerPage
   const currentPost = posts.slice(firstPostIndex, LastPostIndex)
   const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
   }


   return (
      <div className="Main">
         <div className="Main__me">
            <img src={MyAvatar} alt="" />
            <p>Привет меня зовут Женя и это моя страница <br />
               с спортивными достижениями
            </p>
            <form action="" onSubmit={prevDef}>
               <input
                  placeholder="Текст"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
               />
               <button type='submit'>Добавить</button>
            </form>



            {
               currentPost.map((el, index) =>
                  el &&
                  <div key={index} className="postOnMyWall" >
                     <img src={MyAvatar} alt="" />
                     <p>{el}</p>
                  </div>
               )
            }
            {
               posts.length >= 5 && <Paginator postsPerPage={postsPerPage} posts={posts}
                  paginate={paginate} />
            }

         </div>

      </div>
   )
}
