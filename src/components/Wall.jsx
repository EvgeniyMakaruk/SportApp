import React from 'react'
import MyAvatar from '../images/MyAvatar.jpg'

export const Wall = () => {

   const [posts, setPosts] = React.useState([])
   const [value, setValue] = React.useState('')
   const prevDef = (event) => {
      event.preventDefault()
      setPosts([...posts, value])
      setValue('')
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
               
               posts.map((el, index) =>
                  el&&
                  <div className="postOnMyWall" >
                     <img src={MyAvatar} alt="" />
                     <p>{el}</p>
                  </div>

            )
            }

         </div>

      </div>
   )
}
