import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllPost, toggleModal } from '../../Redux/ActionCreators/WallAC'
import s from './Modal.module.scss'

export const Modal = ({ }) => {

   const dispatch = useDispatch()
   const { posts, isOpenModal } = useSelector(store => store.wallRed)

   return (
      <div className={s.Wrapmodal}>
         <div className={s.modal}>
            <p>Ты действительно хочешь удалить все посты</p>
            <div className={s.buttons}>
               <button onClick={() => dispatch(deleteAllPost())}>Удалить</button>
               <button onClick={() => dispatch(toggleModal(false))} >Отмена</button>
            </div>
         </div>
      </div>
   )
}
