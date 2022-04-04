import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SWRConfig} from 'swr'
import { useFetch } from '../utilities'


function MyApp({ Component, pageProps}: AppProps) {
  return (
    <SWRConfig value={{fetcher:(key)=>useFetch(key)}}>
      
       <Component {...pageProps} />
    </SWRConfig>
     )
}

export default MyApp

