//import {GetStaticProps} from 'next';


import { useComments, usePosts } from '../utilities';
//import { useFetch } from '../utilities';

function GetPosts() {
  const {posts,postsError}=usePosts()
  const {comments,commentsError}=useComments()
  if (!posts) return <h1>Loading posts...</h1>;
    if (postsError) return <p>Loading posts failed...{postsError.message}<br/>Status is: {postsError.status}</p>;
  console.log("comments",comments)
  console.log("commentsError",commentsError)
  
  if (!comments) return <h1>Loading comments...</h1>;
  if (commentsError) return <p>Loading comments failed...{commentsError.message}<br/>Status is: {commentsError.status}</p>;
  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {posts.map((post: { title: string|undefined; id:number}) => (
         <div key={post.id}>
           <li >{post.title}</li>
           <h4>comments:</h4>
           <ul key={`coments${post.id}`}>
            {comments.filter((c: { postId: number; })=>c.postId==post.id).map((comment: { comment: string|undefined; id:number;author:string }) => (
<div key={comment.id}>
  
            <li >{comment.comment}<br/>
            by:{comment.author}</li>
          <br/>
</div>
        ))}
            </ul>
         </div>
        ))}
      </ul>
      
    </div>
    
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

