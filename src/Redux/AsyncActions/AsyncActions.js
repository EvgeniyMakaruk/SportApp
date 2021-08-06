import { getAsyncPosts } from "../ActionCreators/SeartchAC"

export const getPostsAsync = () => {
   return dispatch => {
      fetch('https://jsonplaceholder.typicode.com/comments')
         .then(response => response.json())
         .then(json => dispatch(getAsyncPosts(json)))
   }
}