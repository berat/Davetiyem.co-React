import Head from 'next/head'

import Header from './header'
import Social from './social'
import Top from './top'
import OdemeButton from './odeme'
import useWindowSize from '../../lib/hooks'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/admin/reset.css'
import '../../assets/admin/style.css'

const Layout = ({ children }) => {
  const size = useWindowSize()

  return (
    <div id="AdminPanel">
      <Head>
        <title>Yönetim Paneli | Davetiyem.co</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container">
        <Top />
        <Header />
        {children}
        <Social />
        {size.width >= 992 && <OdemeButton />}
      </div>
    </div>
  )
}

export default Layout
