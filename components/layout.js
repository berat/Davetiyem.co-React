import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Varsayılan Başlık burası </title>
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
