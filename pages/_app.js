import '../public/fonts/font.css'
import NextNProgress from './progressNextnp'
import Router from 'next/router'
import * as gtag from '../lib/gtag'


Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  )
}
