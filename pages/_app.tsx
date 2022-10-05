import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {ContextApi} from '../functions/Context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextApi>
  <Component {...pageProps} />
  </ContextApi>
  )
}

export default MyApp
