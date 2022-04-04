import type { NextPage } from 'next'



import GetPosts from '../components/getPosts'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     
      <h1>SWR hook use</h1>
      <GetPosts />
      {/* <GetComments /> */}
    </div>
  )
}

export default Home
