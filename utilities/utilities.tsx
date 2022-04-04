import useSWR from "swr"

export const useFetch=async (resource:string)=>{
 
  const init:RequestInit={
    headers:{
      "key":process.env.NEXT_PUBLIC_API_KEY
    }
  }
  const data=await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}${resource}`,init)
  if (!data.ok) {
    const error:Error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await data.json()
    error.status = data.status
    throw error
  }
  return await data.json()
}

export const baseURL=process.env.NEXT_PUBLIC_DB_HOST
export const usePosts=()=>{
  const {data:posts, error:postsError} = useSWR('posts')
  return {posts,postsError}
}
export const useComments=()=>{
  const {data:comments, error:commentsError} = useSWR('comments')
  return {comments,commentsError}
}