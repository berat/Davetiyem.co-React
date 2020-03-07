import Head from 'next/head'
import GA from 'react-ga'
import { hotjar } from 'react-hotjar';
// const isGAEnabled = process.env.NODE_ENV === 'production'

// if (isGAEnabled) {
  // GA.initialize('UA-132339332-1')  
  // hotjar.initialize(1285342, 6);

// }

function Layout({ children }) {
  return (
    <div id="index">
      <Head>
        <title>Davetiyem.co - Dijital Düğün Davetiyesi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="dijital davetiye, dijital düğün davetiyesi, düğün davetiye sitesi, örnek düğün davetiyesi,online davetiye, davetiye, düğün davetiyesi, davetiye örnekleri, davetiye sitesi, davetiyem, düğün, gelin, damat, nişan, evlilik, evlenmek"
        />
      </Head>
      {children}
    </div>
  )
}

export default Layout
