import Head from 'next/head'
import GA from 'react-ga'
import Link from 'next/link'
import { hotjar } from 'react-hotjar'
import Header from './header'
import Bio from './bio'
import Galeri from './galeri'
import Comments from './comments'
import Days from './days'

// const isGAEnabled = process.env.NODE_ENV === 'production'

// if (isGAEnabled) {
// GA.initialize('UA-132339332-1')
// hotjar.initialize(1285342, 6);

// }

function Layout({ children }) {
  return (
    <div id="userPage">
      <Head>
        <title>Örnek Düğün Davetiyesi</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="dijital davetiye, dijital düğün davetiyesi, düğün davetiye sitesi, örnek düğün davetiyesi,online davetiye, davetiye, düğün davetiyesi, davetiye örnekleri, davetiye sitesi, davetiyem, düğün, gelin, damat, nişan, evlilik, evlenmek"
        />

        <meta
          name="description"
          content="davetiyem.co olarak online düğün davetiyesinin nasıl olduğunu gösteren örnek bir davetiye."
        />
        <meta
          name="image"
          content="https://davetiyem.co/static/uploads/davetiye.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Örnek Düğün Davetiyesi  " />
        <meta
          name="twitter:description"
          content="davetiyem.co olarak online düğün davetiyesinin nasıl olduğunu gösteren örnek bir davetiye."
        />
        <meta name="twitter:site" content="@davetiyemco" />
        <meta name="twitter:url" content="https://davetiyem.co/damatgelin" />
        <meta
          name="twitter:image:src"
          content="https://davetiyem.co/static/uploads/davetiye.png"
        />
        <meta name="og:title" content="Örnek Düğün Davetiyesi  " />
        <meta
          name="og:description"
          content="davetiyem.co olarak online düğün davetiyesinin nasıl olduğunu gösteren örnek bir davetiye."
        />
        <meta
          name="og:image"
          content="https://davetiyem.co/static/uploads/davetiye.png"
        />
        <meta name="og:url" content="https://davetiyem.co/damatgelin" />
        <meta name="og:locale" content="tr_TR" />
        <meta name="og:type" content="website" />
      </Head>
      <Header />
      <Bio />
      <Comments />
      <Galeri />
      <Days />
      <div id="aramizaKatil">
        <div className="aramizaKatil">
          <p>
            Birkaç dakika içerisinde sizde kendi davetiye sitenizi
            oluşturabilirsiniz. Hemen{' '}
            <Link href="/katil">
              <a>Kayıt Olun</a>
            </Link>{' '}
            ve başlayın.
          </p>
        </div>
      </div>
      <div className="socialMedia">
        <ul>
          <li className="whatsapp">
            <a
              target="_blank"
              href="whatsapp://send?abid=&text=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/damatgelin adresine gidebilirsiniz. Bekliyoruz 	😊"
            >
              <i className="fa fa-whatsapp" />
            </a>
          </li>
          <li className="sms">
            <a
              target="_blank"
              href="sms:?body=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/damatgelin adresine gidebilirsiniz. Bekliyoruz 	😊"
            >
              <i className="fa fa-commenting" />
            </a>
          </li>
          <li className="facebook">
            <a
              target="_blank"
              href="http://www.facebook.com/sharer/sharer.php?u=http://davetiyem.co/damatgelin"
            >
              <i className="fa fa-facebook-f" />
            </a>
          </li>
          <li className="mail">
            <a
              target="_blank"
              href="mailto:?subject=Evleniyoruz, Düğünümüze Davetleisiniz?&body=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/damatgelin adresine gidebilirsiniz. Bekliyoruz 	😊"
            >
              <i className="fa fa-envelope" />
            </a>
          </li>
        </ul>
      </div>

      {children}
    </div>
  )
}

export default Layout
