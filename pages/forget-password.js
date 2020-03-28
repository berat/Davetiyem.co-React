import Axios from 'axios'
import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import images from '../public/images/image'
import config from '../config'

import cogoToast from 'cogo-toast'
import Router from 'next/router'

import '../assets/auth/semantic.min.css'
import '../assets/auth/auth.css'

const ForgetPassword = () => {
  const email = useRef()

  const sendPassword = e => {
    e.preventDefault()
    Axios.put(`${config.apiURL}${config.version}sifremi-unuttum`, {
      email: email.current.value
    }).then(response => {
      if (response.data.status == 201) {
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
        Router.push(config.home)
      } else {
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
              <button onClick={sendPassword} className="ui blue button">
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
