import React, { useEffect, useState, useRef } from 'react'
import Axios from 'axios'
import Link from 'next/link'
import Cookies from 'js-cookie'
import config from '../../config'
import Navigation from './navigation'
import images from '../../public/images/image'

const Header = () => {
  const [username, setUsername] = useState()
  const [checkMobile, setCheckMobile] = useState(false)
  const menu = useRef()

  const userid = Cookies.get('login') != undefined ? Cookies.get('login') : null

  useEffect(() => {
    Axios.get(`${config.apiURL}${config.version}aktifHesap/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setUsername(response.data.username)
        }
      }
    )
  }, [setUsername])
  return (
    <header>
      <div id="header">
        <div className="header">
          <div className="logo">
            <Link href="/">
              <a>
                <img src={images.logo} />
              </a>
            </Link>
          </div>
          {checkMobile == false ? (
            <div className="acilan">
              <i
                onClick={() => {
                  menu.current.style.display = 'block'
                  setCheckMobile(!checkMobile)
                }}
                className="fa fa-bars"
              ></i>
            </div>
          ) : (
            <div className="kapan">
              <i
                onClick={() => {
                  menu.current.style.display = 'none'
                  setCheckMobile(!checkMobile)
                }}
                className="fa fa-times"
              ></i>
            </div>
          )}
          <div className="menu" ref={menu}>
            <Navigation />
          </div>
        </div>
        <div className="slider animated fadeIn">
          {userid == null ? (
            <div className="sorta">
              <h1>
                Yaşantınızın her gününde bugünü hatırlatacak Dijital Davetiye
              </h1>
              <div className="buton demo-incele">
                <Link href="/register">
                  <a>Dijital Davetiyeni Hemen Oluştur</a>
                </Link>
              </div>
              <p>Tamamen Ücretsizdir.</p>
            </div>
          ) : (
            <div className="sorta">
              <h1>
                Yaşantınızın her gününde bugünü hatırlatacak Dijital Davetiye
              </h1>
              <div className="buton demo-incele">
                <Link href={`/${username}`}>
                  <a>Dijital Davetiyene Git</a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
