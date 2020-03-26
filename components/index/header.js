import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Link from 'next/link'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import config from '../../config'
import Navigation from './navigation'
import images from '../../public/images/image'

const Header = () => {
  const [username, setUsername] = useState()

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useEffect(() => {
    Axios.get(`http://${config.apiURL}${config.version}uyeCek`).then(
      response => {
        if (
          response.data.uyeler.filter(item => item.userid == userid).length == 1
        ) {
          setUsername(
            response.data.uyeler.filter(item => item.userid == userid)[0]
              .username
          )
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
          <div className="menu">
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
                <Link href="/katil">
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
