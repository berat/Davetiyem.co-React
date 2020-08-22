import Layout from '../components/layout'
import Head from 'next/head'

import Header from '../components/index/header'
import Body from '../components/index/body'
import Price from '../components/index/price'
import Blogs from '../components/index/blogs'
import Bottom from '../components/index/bottom'
import Davet from '../components/index/davet'

import '../assets/reset.css'
import '../assets/index/animate.min.css'
import '../assets/index/responsive.css'
import '../assets/index/style.css'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Davetiyem.co | Dijital Düğün Davetiyesi Oluştur</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta
          name="description"
          content="Davetiyem.co ile çok kolay bir şekilde dijital davetiyenizi oluşturabilirsiniz. Üstelik dijital düğün davetiyenize online bir şekilde ulaşabilirsiniz."
        />
      </Head>
      <Header />
      <Body />
      <Price />
      <Davet />
      <Blogs />
      <Bottom />
    </Layout>
  )
}

export default HomePage
