//import {GetStaticProps} from 'next';

import useSWR from 'swr'
//import { useFetch } from '../utilities';


function GetPosts() {
  
  const {data, error,isValidating} = useSWR('posts')
  console.log(useSWR('posts'))
    console.log('data:',data,"error:",error)
    if (isValidating) return <h1>Loading...</h1>;
    if (!data||error||data.error) return <p>Loading failed...{data?.error}</p>;
    
  
  return (
    
    <ul>
      {data.map((post: { title: string|undefined; id:number }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    
    
  )
}

// export const getStaticProps:GetStaticProps = async () => {
//   const url=`${process.env.NEXT_PUBLIC_DB_HOST}posts`;
  
//     return {
//     props:{
//      posts:await useFetch(url),
//     }
//   }
// }

export default GetPosts;

