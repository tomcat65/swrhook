//import {GetStaticProps} from 'next';

import useSWR from 'swr'
import { fetchPosts } from '../utilities';


function GetPosts() {
  const url=`${process.env.NEXT_PUBLIC_DB_HOST}posts`;
  const init={
    headers:{
      "key":process.env.NEXT_PUBLIC_API_KEY,
    }
  }
  console.log(url,init)
  const {data, error,isValidating} = useSWR('myPosts',()=>fetchPosts(url,init))
console.log(useSWR('myPosts',()=>fetchPosts(url,init)))
  console.log('data:',data,"error:",error)
  if (isValidating) return <h1>Loading...</h1>;
  if (!data||error||data.error) return <p>Loading failed...{data?.error}</p>;
  
  return (
    <>
    <ul>
      {data.map((post: { title: string|undefined; id:number }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    </>
    
  )
}

// export const getStaticProps:GetStaticProps = async () => {
  
//   return {
//     props:{
//      posts:data
//     }
//   }
// }

export default GetPosts;

