import React, { useRef, useState } from 'react'
import Axios from 'axios'
import Head from 'next/head'
import Cookies from 'js-cookie'
import cogoToast from 'cogo-toast'

import Link from 'next/link'
import images from '../public/images/image'
import config from '../config'

import '../assets/normalize.css'
import '../assets/auth/semantic.min.css'
import '../assets/auth/auth.css'
import Router from 'next/router'

const Login = () => {
  const [load, setLoad] = useState(false)
  const username = useRef()
  const password = useRef()

  if (Cookies.get('login')) {
    Router.replace(config.adminPage)
  }

  const beLogin = e => {
    e.preventDefault()
    setLoad(true)
    Axios.post(`${config.apiURL}${config.version}girisYap`, {
      username: username.current.value,
      password: password.current.value
    }).then(response => {
      if (response.data.status == 201) {
        setLoad(false)
        Cookies.set('login', response.data.token)
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
        Router.replace(config.adminPage)
      } else {
        setLoad(false)
        cogoToast.error(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      }
    })
  }

  return (
    <>
      <Head>
        <title>Giriş Yap - Örnek Düğün Davetiyesi</title>
      </Head>
      <div id="column" className="ui grid doubling two column row">
        <div className="six wide column forms">
          <div className="formCenter">
            <h1>HOŞGELDİN</h1>
            <span>Davetiyenizi güncelemek için lütfen yeniden giriş yapın</span>
            <div className="form">
              <div className="ui labeled input">
                <div className="ui label label">davetiyem.co/</div>
                <input placeholder="damatgelin" ref={username} />
              </div>
              <div className="ui input">
                <input type="password" placeholder="Parola" ref={password} />
              </div>
              <button
                type="submit"
                className={`ui blue button ${
                  load ? 'loading disabled' : null
                }`}
                onClick={beLogin}
              >
                GİRİŞ YAP
              </button>
              <small>
                <Link href={config.forgetPass}>
                  <a>Parolanı mı unuttun? Hemen sıfırla.</a>
                </Link>
              </small>
              <div className="ui horizontal divider">Ya da</div>
              <Link href={config.registerPage}>
                <a className="ui red button small basic kayit-ol">KAYIT OL</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="ten wide column img tablet computer only">
          <img src={images.login} alt="giriş yap" loading="lazy" />
        </div>
      </div>
    </>
  )
}

export default Login
