import React from 'react'
import MyAvatar from '../images/MyAvatar.jpg'
import { Paginator } from '../assets/Paginator/Paginator'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, deletePost, toggleModal } from '../Redux/ActionCreators/WallAC'
import { Modal } from '../assets/Modal/Modal'

export const Wall = () => {

   const dispatch = useDispatch()
   

   const { posts, isOpenModal } = useSelector(store => store.wallRed)



   console.log(posts);
   const [value, setValue] = React.useState('')
   const prevDef = (event) => {
      event.preventDefault()
      dispatch(addPost(value))
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
            <p className="MyNameIs">Привет меня зовут Женя и это моя страница <br />
              
            </p>
            {
               isOpenModal && <Modal />
            }
            <form action="" onSubmit={prevDef}>
               <input
                  type='"text'
                  required
                  placeholder="Текст"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
               />
               <button type='submit'>Добавить</button>
            </form>

            {posts.length >= 2 && <button onClick={() => dispatch(toggleModal(true))} className="deleteALlposts">Удалить все посты</button>}

            {currentPost.map((el, index) =>
               el &&
               <div key={index} className="postOnMyWall" >

                  <img src={MyAvatar} alt="" />

                  <p>{el}</p>
                  <button onClick={() => dispatch(deletePost(index))}>delete</button>
               </div>
            )}


            {posts.length >= 6 && <Paginator postsPerPage={postsPerPage} posts={posts}
               paginate={paginate} />}


         </div>

      </div>
   )
}
