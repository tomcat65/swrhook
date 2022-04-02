
export const fetchPosts=async (url:string,init:object)=>{
  const result=await(await fetch(url,init)).json()
  return result
}