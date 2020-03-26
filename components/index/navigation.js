import React from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const Navigation = () => {
  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  return (
    <ul>
      <li>
        <Link href="/">
          <a>ANASAYFA</a>
        </Link>
      </li>
      <li>
        <Link href="#hakkinda">
          <a>HAKKINDA</a>
        </Link>
      </li>
      <li>
        <Link href="#hizmetler">
          <a>HİZMETLER</a>
        </Link>
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
        <Link href="#iletisim">
          <a>İLETİŞİM</a>
        </Link>
      </li>
      {userid == null ? (
        <>
          <li className="yaktif">
            <Link href="/login">
              <a>{"GİRİŞ YAP"}</a>
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
              <a>{"ÇIKIŞ YAP"}</a>
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
}

export default Navigation
