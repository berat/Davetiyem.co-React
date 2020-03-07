import Head from 'next/head'

import Header from './header'
import Social from './social'

const Layout = ({ children }) => {
  return (
    <div id="AdminPanel">
      <Head>
        <title>Yönetim Paneli | Davetiyem.co</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Social />
    </div>
  )
}

export default Layout
