import React, { useEffect, useRef } from 'react'
import Axios from 'axios'
import config from '../../config'
import Head from 'next/head'
import cogoToast from 'cogo-toast'
import Link from 'next/link'
import images from '../../public/images/image'
import Router, { useRouter } from 'next/router'
import '../../assets/normalize.css'
import '../../assets/auth/semantic.min.css'
import '../../assets/auth/auth.css'

const ResetPassword = () => {
  const password = useRef(),
    confirmPassword = useRef()

  const router = useRouter()
  const id = router.query.pid

  const changePassword = e => {
    e.preventDefault()
    Axios.put(`${config.apiURL}${config.version}sifremi-sifirla/${id}`, {
      password: password.current.value,
      valPassword: confirmPassword.current.value
    }).then(response => {
      if (response.data.status == 201) {
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
        Router.replace(config.loginPage)
      } else if (response.data.status == 405) {
        cogoToast.error(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
        Router.replace(config.forgetPass)
      } else {
        cogoToast.error(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
        Router.replace(config.loginPage)
      }
    })
  }

  return (
    <>
      <Head>
        <title>Şifremi Sıfırla - Örnek Düğün Davetiyesi</title>
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
                <input type="password" ref={password} placeholder="Parola" />
              </div>
              <div className="ui input">
                <input
                  type="password"
                  ref={confirmPassword}
                  placeholder="Parolayı Onaylayın"
                />
              </div>
              <button onClick={changePassword} className="ui blue button">
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

export default ResetPassword
