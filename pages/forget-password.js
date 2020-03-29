import Axios from 'axios'
import React, { useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import images from '../public/images/image'
import config from '../config'

import cogoToast from 'cogo-toast'
import Router from 'next/router'

import '../assets/auth/semantic.min.css'
import '../assets/auth/auth.css'

const ForgetPassword = () => {
  const [load, setLoad] = useState(false)
  const email = useRef()

  const sendPassword = e => {
    setLoad(true)
    e.preventDefault()
    Axios.put(`${config.apiURL}${config.version}sifremi-unuttum`, {
      email: email.current.value
    }).then(response => {
      if (response.data.status == 201) {
        setLoad(false)
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
        Router.push(config.home)
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
        <title>Şifremi unuttum - Örnek Düğün Davetiyesi</title>
      </Head>
      <div id="column" className="ui grid doubling two column row">
        <div className="six wide column forms">
          <div className="formCenter">
            <h1>ŞİFRENİ SIFIRLA</h1>
            <span>
              Unuttuğun şifreni hemen sıfırla ve kaldığın yerden devam et.
            </span>
            <div className="form">
              <div className="ui input">
                <input
                  type="email"
                  placeholder="E-mail adresiniz"
                  ref={email}
                  required
                />
              </div>
              <button
                onClick={sendPassword}
                type="submit"
                className={`ui blue button ${
                  load ? 'loading disabled' : null
                }`}
              >
                ŞİFRENİ SIFIRLA
              </button>
              <small>
                <Link href={config.loginPage}>
                  <a>Hatırladın mı? Hemen giriş yap.</a>
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
          <img src={images.register} alt="giriş yap" loading="lazy" />
        </div>
      </div>
    </>
  )
}

export default ForgetPassword
