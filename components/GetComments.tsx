//import {GetStaticProps} from 'next';

import useSWR from 'swr'
//import { useFetch } from '../utilities';


function GetComments() {
  
  const {data:comments, error,isValidating} = useSWR('comments')
  console.log(useSWR('comments'))
    console.log('comments:',comments,"error:",error)
    if (isValidating) return <h1>Loading comments...</h1>;
    if (!comments||error||comments.error) return <p>Loading failed...{comments.error}</p>;
    
  
  return (
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment: { comment: string|undefined; id:number }) => (
          <li key={comment.id}>{comment.comment}</li>
        ))}
      </ul>
      
    </div>
    
  )
}
export default GetComments