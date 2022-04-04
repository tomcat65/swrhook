import useSWR from "swr"
import { Fallback } from "../typings"




interface Error {
  message:string
  info?:string
  status?:string|number
}


export const useFetch=async (resource:string,config:object={headers:{
  key:process.env.NEXT_PUBLIC_API_KEY
}})=>{
   const data=await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}${resource}`,config)
  if (!data.ok) {
    const error:Error= new Error('An error occurred while fetching the data.')
    
    error.info = await data.json()
    error.status = data.status
    throw error
  }
  return await data.json()
}



export const usePosts=()=>{

  const {data:posts, error:postsError} = useSWR('posts')
  return {posts,postsError}
}
export const useComments=()=>{
  const {data:comments, error:commentsError} = useSWR('comments')
  return {comments,commentsError}
}
export async function getStaticProps () {
  // `getStaticProps` is executed on the server side.
  const posts = await useFetch('posts')
  const comments= await useFetch('comments')
  return {
    props: {
      fallback: {
        'posts': posts,
        'comments':comments
      }
    }
  }
}