import type { NextPage } from 'next'
import GetPosts from '../components/getPosts'
import styles from '../styles/Home.module.css'
import { useFetch } from '../utilities'
import { SWRConfig, SWRConfiguration } from 'swr'
import { Fallback } from '../typings'





const Home: NextPage = ({fallback}:any) => {
  return (
    <div className={styles.container}>
     
      <h1>SWR hook use</h1>
      <SWRConfig value={{fallback}}>
        {console.log('fallback:',fallback)}
         <GetPosts />
      </SWRConfig>
     
      {/* <GetComments /> */}
    </div>
  )
}

export default Home
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