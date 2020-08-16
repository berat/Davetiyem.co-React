import React, { useEffect, useState } from 'react'
import config from '../../config'
import Axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'js-cookie'

import Header from './header'
import Bio from './bio'
import Galeri from './galeri'
import Comments from './comments'
import Days from './days'

const Layout = ({ children, userid }) => {
  const [username, setUsername] = useState()
  const [galeri, setGaleri] = useState([])
  const [gunler, setGunler] = useState([])
  const [genel, setGenel] = useState([])
  const [yorum, setYorum] = useState([])
  const [kisisel, setKisisel] = useState([])

  const [dugunTarih, setDugunTarih] = useState()

  const trDate = [
    'Ocak',
    'Subat',
    'Mart',
    'Nisan',
    'Mayis',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylul',
    'Ekim',
    'Kasim',
    'Aralik'
  ]

  const useridList =
    Cookies.get('login') != undefined ? Cookies.get('login') : null

  useEffect(() => {
    Axios.get(`${config.apiURL}${config.version}genel/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setGenel(response.data.data)
          if (response.data.data.length != 0) {
            const ayAdi = response.data.data[0].tarih.slice(0, -5).slice(3)
            const gun = response.data.data[0].tarih.slice(0, 2)
            const yil = response.data.data[0].tarih.slice(-4)
            const aySayisi = trDate.findIndex(item => item == ayAdi) + 1
            const editTarih = `${yil}-${ayAdi}-${gun}`
            setDugunTarih(editTarih)
          }
        }
      }
    )

    Axios.get(`${config.apiURL}${config.version}kisisel/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setUsername(response.data.username)
          setKisisel(response.data.data)
        }
      }
    )

    Axios.get(`${config.apiURL}${config.version}yorum/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setYorum(response.data.data)
        }
      }
    )
    Axios.get(`${config.apiURL}${config.version}galeri/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setGaleri(response.data.photos)
        }
      }
    )
    Axios.get(`${config.apiURL}${config.version}dugun/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setGunler(response.data.data)
        }
      }
    )
  }, [userid])

  return (
    <div id="userPage">
      <Head>
        <title>
          {genel.length != 0
            ? genel.map(item =>
                item.title != '' ? item.title : 'Örnek Düğün Davetiyesi'
              )
            : 'Örnek Düğün Davetiyesi'}
        </title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="dijital davetiye, dijital düğün davetiyesi, düğün davetiye sitesi, örnek düğün davetiyesi,online davetiye, davetiye, düğün davetiyesi, davetiye örnekleri, davetiye sitesi, davetiyem, düğün, gelin, damat, nişan, evlilik, evlenmek"
        />

        <meta
          name="description"
          content={
            genel.length != 0
              ? genel.map(item =>
                  item.desc != ''
                    ? item.desc
                    : 'davetiyem.co olarak online düğün davetiyesinin nasıl olduğunu gösteren örnek bir davetiye.'
                )
              : 'davetiyem.co olarak online düğün davetiyesinin nasıl olduğunu gösteren örnek bir davetiye.'
          }
        />
        <meta name="image" content="davetiyem.co/static/uploads/davetiye.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Örnek Düğün Davetiyesi  " />
        <meta
          name="twitter:description"
          content="davetiyem.co olarak online düğün davetiyesinin nasıl olduğunu gösteren örnek bir davetiye."
        />
        <meta name="twitter:site" content="@davetiyemco" />
        <meta name="twitter:url" content={`davetiyem.co/${username}`} />
        <meta
          name="twitter:image:src"
          content="davetiyem.co/uploads/users/davetiye.png"
        />
        <meta name="og:title" content="Örnek Düğün Davetiyesi  " />
        <meta
          name="og:description"
          content="davetiyem.co olarak online düğün davetiyesinin nasıl olduğunu gösteren örnek bir davetiye."
        />
        <meta
          name="og:image"
          content="davetiyem.co/uploads/users/davetiye.png"
        />
        <meta name="og:url" content={`davetiyem.co/${username}`} />
        <meta name="og:locale" content="tr_TR" />
        <meta name="og:type" content="website" />
      </Head>
      <Header
        kisisel={kisisel}
        genel={genel}
        tarih={dugunTarih}
        username={username}
      />
      <Bio kisisel={kisisel} username={username} />
      <Comments yorum={yorum} />
      <Galeri galeri={galeri} username={username} />
      <Days gunler={gunler} not={genel} />
      <div id="aramizaKatil">
        <div className="aramizaKatil">
          <p>
            Birkaç dakika içerisinde siz de kendi davetiye sitenizi
            oluşturabilirsiniz. Hemen
            <Link href="/register">
              <a> Kayıt Olun </a>
            </Link>
            ve başlayın.
          </p>
        </div>
      </div>
      {useridList == userid ? (
        <div className="socialMedia">
          <ul>
            <li className="whatsapp">
              <Link
                href={`whatsapp://send?abid=&text=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/${username} adresine gidebilirsiniz. Bekliyoruz 	😊`}
                prefetch={false}
              >
                <a target="_blank">
                  <i className="fab fa-whatsapp" />
                </a>
              </Link>
            </li>
            <li className="sms">
              <Link
                href={`sms:?body=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/${username} adresine gidebilirsiniz. Bekliyoruz 	😊`}
                prefetch={false}
              >
                <a target="_blank">
                  <i className="fas fa-sms" />
                </a>
              </Link>
            </li>
            <li className="facebook">
              <Link
                href={`http://www.facebook.com/sharer/sharer.php?u=http://davetiyem.co/${username}`}
                prefetch={false}
              >
                <a target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </Link>
            </li>
            <li className="mail">
              <Link
                href={`mailto:?subject=Evleniyoruz, Düğünümüze Davetleisiniz?&body=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/${username} adresine gidebilirsiniz. Bekliyoruz 	😊`}
                prefetch={false}
              >
                <a target="_blank">
                  <i className="fas fa-envelope" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
      {children}
    </div>
  )
}

export default Layout
