import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import Scrollchor from 'react-scrollchor'

const Navigation = React.memo(() => {
  const userid = Cookies.get('login') != undefined ? Cookies.get('login') : null

  return (
    <ul>
      <li>
        <Scrollchor to="/">
          <a>ANASAYFA</a>
        </Scrollchor>
      </li>
      <li>
        <Scrollchor to="#hakkinda">
          <a>HAKKINDA</a>
        </Scrollchor>
      </li>
      <li>
        <Scrollchor to="#ucret">
          <a>ÜCRET</a>
        </Scrollchor>
      </li>
      <li>
        <Link href="https://blog.davetiyem.co/" prefetch={false}>
          <a>BLOG</a>
        </Link>
      </li>
      <li>
        <Link href="/damatgelin">
          <a>DEMO</a>
        </Link>
      </li>
      <li>
        <Scrollchor to="#iletisim">
          <a>İLETİŞİM</a>
        </Scrollchor>
      </li>
      {userid == null ? (
        <>
          <li className="yaktif">
            <Link href="/login">
              <a>GİRİŞ YAP</a>
            </Link>
          </li>
          <li className="aktif">
            <Link href="/register">
              <a>OLUŞTUR</a>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="yaktif">
            <Link href="/logout">
              <a>ÇIKIŞ YAP</a>
            </Link>
          </li>
          <li className="aktif">
            <Link href="/admin">
              <a>YÖNETİM</a>
            </Link>
          </li>
        </>
      )}
    </ul>
  )
})

export default Navigation
