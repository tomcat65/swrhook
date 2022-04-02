//import {GetStaticProps} from 'next';

import useSWR from 'swr'
import { fetchPosts } from '../utilities';


function GetPosts() {
  const url=`http://localhost:4001/api/posts`;
  const init={
    headers:{
      "key":"TangoAlphaVictor65 after all is ok",
    }
  }
  console.log(url,init)
  const {data, error,isValidating} = useSWR('myPosts',()=>fetchPosts(url,init))
console.log(useSWR('myPosts',()=>fetchPosts(url,init)))
  console.log('data:',data,"error:",error)
if (error||data.error) return <p>Loading failed...</p>;
  if (isValidating) return <h1>Loading...</h1>;
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

