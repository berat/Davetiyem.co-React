import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import Link from 'next/link'
import config from '../../config'

import images from '../../public/images/image'

const Top = () => {
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
          setUsername(response.data.uyeler.filter(item => item.userid == userid)[0].username)
        }
      }
    )
  }, [setUsername])


  return (
    <div className="row justify-content-md-center">
      <div className="siteyiGoruntule col-lg-3 col-sm-12 col-md-12">
        <Link href={`/${username}`}>
          <a className="form-control">Davetiyeyi Görüntüle</a>
        </Link>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 logo">
        <Link href="/admin">
          <a>
            <img src={images.adminLogo} alt="" />
          </a>
        </Link>
      </div>
      <div className="cikisYap col-lg-3 col-sm-12 col-md-12">
        <Link href="/logout">
          <a className="form-control">Çıkış Yap</a>
        </Link>
      </div>
    </div>
  )
}

export default Top
