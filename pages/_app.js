import '../public/fonts/font.css'
import NextNProgress from './progressNextnp'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  )
}
