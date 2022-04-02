import {GetStaticProps} from 'next';

import useSWR from 'swr'

async function fetchPosts() {
  try {
    const response = await fetch('http://localhost:4001/api/posts',{
      headers:{
        key:"TangoAlphaVictor65 after all is ok"
      }
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
function GetPosts() {
  const {data, error} = useSWR('myPosts',()=>fetchPosts())
console.log(data)
if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  return (
    <>
    <ul>
      {data?.map((post: { title: string|undefined; id:number }) => (
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

