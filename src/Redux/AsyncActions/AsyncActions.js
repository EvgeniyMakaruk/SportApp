import { getAsyncPosts } from "../ActionCreators/SeartchAC"


export const getPostsAsync = ({currentPage}) => {
   return dispatch => {
      fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10_page=${currentPage}`)

         .then(response => response.json())
         .then(json => dispatch(getAsyncPosts(json)))


   }
}