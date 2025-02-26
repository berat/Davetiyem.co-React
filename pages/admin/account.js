import React, { useRef, useEffect, useState } from 'react'
import Layout from '../../components/admin/layout'
import Axios from 'axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import cogoToast from 'cogo-toast'
import Router from 'next/router'

import config from '../../config'
const Account = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [load, setLoad] = useState(false)

  const kullaniciAdi = useRef(),
    mail = useRef(),
    password = useRef(),
    cPassword = useRef()

  const userHash =
    Cookies.get('login') != undefined ? Cookies.get('login') : null

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useEffect(() => {
    userid == null ? Router.replace(config.loginPage) : null
    Axios.get(`${config.apiURL}${config.version}hesap/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setUsername(response.data.username)
          setEmail(response.data.mail)
        }
      }
    )
  }, [userid, userHash, setUsername, setEmail])

  const usernameValid = RegExp(/^[a-zA-Z0-9]+$/i)

  const onSubmit = e => {
    setLoad(true)
    e.preventDefault()
    if (
      usernameValid.test(kullaniciAdi.current.value) ||
      kullaniciAdi.current.value.length === 0 ||
      username === kullaniciAdi.current.value
    ) {
      if (password.current.value === cPassword.current.value) {
        Axios.get(`${config.apiURL}${config.version}uyeCek`).then(response => {
          var usernameCheck = response.data.uyeler.filter(
            item => item.username == kullaniciAdi.current.value
          )
          var mailCheck = response.data.uyeler.filter(
            item => item.email == mail.current.value
          )
          var usernameKendisiMi = usernameCheck[0].username === username
          var mailKendisiMi = mailCheck[0].email === email
          if (usernameCheck.length === 0 || usernameKendisiMi) {
            if (mailCheck.length == 0 || mailKendisiMi) {
              Axios.put(`${config.apiURL}${config.version}hesapGuncelle`, {
                hash: userHash,
                kullaniciAdi:
                  kullaniciAdi.current.value.length !== 0
                    ? kullaniciAdi.current.value
                    : username,
                mail:
                  mail.current.value.length !== 0 ? mail.current.value : email,
                sifre: password.current.value
              }).then(response => {
                if (response.data.status == 201) {
                  setLoad(false)
                  cogoToast.success(response.data.msg, {
                    onClick: e => {
                      e.target.parentNode.parentNode.style.display = 'none'
                    },
                    position: 'top-left'
                  })
                  if (password.current.value.length > 3) {
                    setLoad(false)
                    Router.replace('/logout')
                    cogoToast.success('Lütfen tekrar giriş yapın', {
                      onClick: e => {
                        e.target.parentNode.parentNode.style.display = 'none'
                      },
                      position: 'top-left'
                    })
                  }
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
            } else {
              setLoad(false)
              cogoToast.error(
                'Mail adresiniz başkası tarafından kullanılmakta. Farklı bir şey seçin.',
                {
                  onClick: e => {
                    e.target.parentNode.parentNode.style.display = 'none'
                  },
                  position: 'top-left'
                }
              )
            }
          } else {
            setLoad(false)
            cogoToast.error(
              'Kullanıcı adı başkası tarafından kullanılmakta. Farklı bir şey seçin.',
              {
                onClick: e => {
                  e.target.parentNode.parentNode.style.display = 'none'
                },
                position: 'top-left'
              }
            )
          }
        })
      }
    } else {
      setLoad(false)
      cogoToast.error('Yeni şifreleriniz birbiri ile eşleşmiyor', {
        onClick: e => {
          e.target.parentNode.parentNode.style.display = 'none'
        },
        position: 'top-left'
      })
    }
  }

  return (
    <Layout>
      <div className="content row">
        <div className="bilgi col-12">
          <span>Hesap bilgilerinizi buradan düzenleyebilirsiniz.</span>
        </div>
        <div className="icerik col-12">
          <form
            method="post"
            onSubmit={onSubmit}
            encType="multipart/form-data"
            className="col-12"
          >
            <ul className="row">
              <li className="col-xs-6 col-lg-6">
                <label htmlFor="exampleInputEmail1">Kullanıcı Adınız : </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">davetiyem.co/</div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    minLength={4}
                    maxLength={15}
                    id="username"
                    name="username"
                    placeholder="damatgelin"
                    ref={kullaniciAdi}
                    defaultValue={username}
                  />
                </div>
                <small id="emailHelp" className="form-text text-muted">
                  Kayıt olduğunuz zaman vermiş olduğunuz kullanıcı adı.
                </small>
                <br />
                <label htmlFor="exampleInputEmail1">Mail Adresiniz : </label>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="mail"
                    name="mail"
                    placeholder="Email adresiniz"
                    ref={mail}
                    defaultValue={email}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Kayıt olduğunuz zaman vermiş olduğunu mail adresi.
                  </small>
                </div>
              </li>
              <li className="col-xs-6 col-lg-6">
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Yeni Şifreniz :
                  </label>
                  <input
                    type="password"
                    minLength={4}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Şifreniz"
                    ref={password}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Şifrenizi değiştirmek için burayı kullanabilirsiniz.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Yeni Şifreniz (Tekrar) :
                  </label>
                  <input
                    type="password"
                    minLength={4}
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    placeholder="Tekrar şifreniz"
                    ref={cPassword}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Şifrenizi değiştirmek için burayı kullanabilirsiniz.
                  </small>
                </div>
              </li>
            </ul>
            <button
              type="submit"
              className={`btn form-control btn-default ${
                load ? 'loading disabled' : null
              }`}
            >
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Account
