import React, { useRef, useState } from 'react'
import Axios from 'axios'
import { GA_TRACKING_ID } from '../lib/gtag'
import Head from 'next/head'

import Link from 'next/link'
import Cookies from 'js-cookie'
import cogoToast from 'cogo-toast'
import Router from 'next/router'

import images from '../public/images/image'
import config from '../config'

import '../assets/normalize.css'
import '../assets/auth/semantic.min.css'
import '../assets/auth/auth.css'

const Register = () => {
  const [load, setLoad] = useState(false)

  const username = useRef(),
    email = useRef(),
    password = useRef(),
    confirmPassword = useRef()

  if (Cookies.get('login')) {
    Router.replace(config.adminPage)
  }

  const usernameValid = RegExp(/^[a-zA-Z0-9]+$/i)
  const emailValid = RegExp(/.+@.+\.[A-Za-z]+$/)

  const beRegister = e => {
    e.preventDefault()
    setLoad(true)
    if (usernameValid.test(username.current.value)) {
      if (emailValid.test(email.current.value)) {
        if (
          password.current.value &&
          password.current.value === confirmPassword.current.value
        ) {
          Axios.post(`${config.apiURL}${config.version}kayitOl`, {
            username: username.current.value,
            password: password.current.value,
            email: email.current.value
          })
            .then(response => {
              if (response.data.status == 404) {
                setLoad(false)
                cogoToast.error(response.data.msg, {
                  onClick: e => {
                    e.target.parentNode.parentNode.style.display = 'none'
                  },
                  position: 'top-left'
                })
              } else {
                cogoToast.success(response.data.msg, {
                  onClick: e => {
                    e.target.parentNode.parentNode.style.display = 'none'
                  },
                  position: 'top-left'
                })
                Router.replace(config.loginPage)
              }
            })
            .catch(e => {
              console.log(e)
            })
          setLoad(false)
        } else {
          setLoad(false)
          cogoToast.error('Parolanız birbiri ile eşleşmiyor.', {
            onClick: e => {
              e.target.parentNode.parentNode.style.display = 'none'
            },
            position: 'top-left'
          })
        }
      } else {
        setLoad(false)
        cogoToast.error('Doğru mail adresi girin.', {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      }
    } else {
      setLoad(false)
      cogoToast.error('Kullanıcı adınız Türkçe karakter içermemeli.', {
        onClick: e => {
          e.target.parentNode.parentNode.style.display = 'none'
        },
        position: 'top-left'
      })
    }
  }

  return (
    <>
      <Head>
        <title>Kayıt Ol - Dijital Düğün Davetiyesi</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
      </Head>
      <div id="column" className="ui grid doubling two column row">
        <div className="six wide column forms">
          <div className="formCenter">
            <h1>ARAMIZA KATIL</h1>
            <span>Davetiyenizi oluşturmak için hemen aramıza katıl</span>
            <div className="form">
              <form>
                <div className="ui labeled input">
                  <div className="ui label label">davetiyem.co/</div>
                  <input
                    placeholder="Kullanıcı adınız"
                    minLength={4}
                    ref={username}
                    maxLength={15}
                    required
                  />
                </div>
                <div className="ui input">
                  <input
                    type="email"
                    ref={email}
                    placeholder="E-mail adresiniz"
                    required
                  />
                </div>
                <div className="ui input">
                  <input
                    type="password"
                    ref={password}
                    placeholder="Parola"
                    required
                  />
                </div>
                <div className="ui input">
                  <input
                    type="password"
                    ref={confirmPassword}
                    placeholder="Parolayı doğrulayın"
                    required
                  />
                </div>
                <button
                  type="submit"
                  onClick={beRegister}
                  className={`ui blue button ${
                    load ? 'loading disabled' : null
                  }`}
                >
                  KAYIT OL
                </button>
              </form>
              <small>
                <Link href={config.forgetPass}>
                  <a>Parolanı mı unuttun? Hemen sıfırla.</a>
                </Link>
              </small>
              <div className="ui horizontal divider">Ya da</div>
              <Link href={config.loginPage}>
                <a className="ui red button small basic kayit-ol">GİRİŞ YAP</a>
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

export default Register
