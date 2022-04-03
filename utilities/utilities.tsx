
export const useFetch=async (resource:string)=>{
  
  const data=await(await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}${resource}`,init)).json()
  return data
}
const init={
  headers:{
    "key":process.env.NEXT_PUBLIC_API_KEY,
  }
}
export const baseURL=process.env.NEXT_PUBLIC_DB_HOST