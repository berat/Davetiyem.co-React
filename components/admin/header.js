import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const Header = () => {
  const [mobilMenu, setMobilMenu] = useState(false)
  const router = useRouter();

  const mobileMenuClick = () => {
    setMobilMenu(!mobilMenu)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/admin" className={router.pathname == "/admin" ? "active" : ""}>
        <a className="navbar-brand">
          <i className="fa fa-home" />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" onClick={mobileMenuClick} />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={mobilMenu == true ? { display: 'inline' } : { display: 'none' }}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" className={router.pathname == "/admin" ? "active" : ""}>
            <Link href="/admin">
              <a className="nav-link">
                <i className="fa fa-user" />
                Kişisel Bilgiler
              </a>
            </Link>
          </li>
          <li className="nav-item" className={router.pathname == "/admin/wedding" ? "active" : ""}>
            <Link href="/admin/wedding">
              <a className="nav-link">
                <i className="fa fa-bookmark" />
                Düğün Bilgileri
              </a>
            </Link>
          </li>
          <li className="nav-item" className={router.pathname == "/admin/album" ? "active" : ""}>
            <Link href="/admin/album">
              <a className="nav-link">
                <i className="fa fa-image" />
                Fotoğraf Albümü
              </a>
            </Link>
          </li>
          <li className="nav-item" className={router.pathname == "/admin/comments" ? "active" : ""}>
            <Link href="/admin/comments">
              <a className="nav-link">
                <i className="fa fa-comment" />
                Dost Yorumları
              </a>
            </Link>
          </li>
          <li className="nav-item" className={router.pathname == "/admin/general" ? "active" : ""}>
            <Link href="/admin/general">
              <a className="nav-link">
                <i className="fa fa-cog" />
                Genel Bilgiler
              </a>
            </Link>
          </li>
          <li className="nav-item" className={router.pathname == "/admin/account" ? "active" : ""}>
            <Link href="/admin/account">
              <a className="nav-link">
                <i className="fa fa-at" />
                Hesap Bilgileri
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
