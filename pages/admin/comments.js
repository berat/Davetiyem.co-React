import React, { useRef, useEffect, useState } from 'react'
import Layout from '../../components/admin/layout'
import Axios from 'axios'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import cogoToast from 'cogo-toast'
import Router from 'next/router'

import config from '../../config'

const Comments = () => {
  const [listele, setListele] = useState([])

  const yorumSahibiBir = useRef(),
    yorumuBir = useRef(),
    yorumSahibiIki = useRef(),
    yorumuIki = useRef(),
    yorumSahibiUc = useRef(),
    yorumuUc = useRef(),
    yorumSahibiDort = useRef(),
    yorumuDort = useRef()

  var liste = {}
  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useEffect(() => {
    userid == null ? Router.replace(config.loginPage) : null
    Axios.get(`${config.apiURL}${config.version}yorum/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setListele(response.data.data)
        }
      }
    )
  }, [userid, setListele])

  const onSubmit = e => {
    e.preventDefault()
    liste = []
    if (liste.length < 5) {
      liste.push({
        userid: userid,
        yorumSahibi: yorumSahibiBir.current.value,
        yorumu: yorumuBir.current.value
      })
      liste.push({
        userid: userid,
        yorumSahibi: yorumSahibiIki.current.value,
        yorumu: yorumuIki.current.value
      })
      liste.push({
        userid: userid,
        yorumSahibi: yorumSahibiUc.current.value,
        yorumu: yorumuUc.current.value
      })
      liste.push({
        userid: userid,
        yorumSahibi: yorumSahibiDort.current.value,
        yorumu: yorumuDort.current.value
      })
      if (liste.length != 0) {
        Axios.post(`${config.apiURL}${config.version}yorum`, liste).then(
          response => {
            if (response.data.status == 201) {
              cogoToast.success(response.data.msg, {
                onClick: e => {
                  e.target.parentNode.parentNode.style.display = 'none'
                },
                position: 'top-left'
              })
            } else {
              cogoToast.error(response.data.msg, {
                onClick: e => {
                  e.target.parentNode.parentNode.style.display = 'none'
                },
                position: 'top-left'
              })
            }
          }
        )
      }
      if (liste.length == 0) {
        Axios.post(
          `${config.apiURL}${config.version}yorum/${userid}`
        ).then(response => {
          if (response.data.status == 201) {
            cogoToast.success(response.data.msg, {
              onClick: e => {
                e.target.parentNode.parentNode.style.display = 'none'
              },
              position: 'top-left'
            })
          } else {
            cogoToast.error('Admin ile iletişime geçin.', {
              onClick: e => {
                e.target.parentNode.parentNode.style.display = 'none'
              },
              position: 'top-left'
            })
          }
        })
      }
    }
  }
  return (
    <Layout>
      <div className="content row">
        <div className="bilgi col-12">
          <span>Arkadaş yorumlarını buradan düzenleyebilirsiniz.</span>
        </div>
        <div className="icerik col-12">
          <form method="post" onSubmit={onSubmit} className="col-12">
            {listele.length != 0 ? (
              <ul className="row">
                {listele.map((item, index) => (
                  <li className="col-xs-6 col-lg-6">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlText">
                        Yorum Sahibi
                      </label>
                      <dd>
                        <input
                          className="form-control"
                          id="yorumSahibi1"
                          name="yorumSahibi1"
                          placeholder="Yorum kime ait?"
                          type="text"
                          ref={() =>
                            index == 0
                              ? yorumSahibiBir
                              : index == 1
                              ? yorumSahibiIki
                              : index == 2
                              ? yorumSahibiUc
                              : yorumSahibiDort
                          }
                          defaultValue={item.yorumSahibi}
                        />
                      </dd>
                      <small id="emailHelp" className="form-text text-muted">
                        Yorum yapan kişinin ismi
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Mesajı Girin
                      </label>
                      <textarea
                        name="yorumu1"
                        id="yorumu1"
                        className="form-control"
                        placeholder="Yorumu girin"
                        rows={3}
                        ref={() =>
                          index == 0
                            ? yorumuBir
                            : index == 1
                            ? yorumuIki
                            : index == 2
                            ? yorumuUc
                            : yorumuDort
                        }
                        defaultValue={item.yorumu}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Yorum yapan kişinin mesajı
                      </small>
                    </div>
                    <hr />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="row">
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlText">Yorum Sahibi</label>
                    <dd>
                      <input
                        className="form-control"
                        id="yorumSahibi1"
                        name="yorumSahibi1"
                        placeholder="Yorum kime ait?"
                        type="text"
                        ref={yorumSahibiBir}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Yorum yapan kişinin ismi
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Mesajı Girin
                    </label>
                    <textarea
                      name="yorumu1"
                      id="yorumu1"
                      className="form-control"
                      placeholder="Yorumu girin"
                      rows={3}
                      ref={yorumuBir}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Yorum yapan kişinin mesajı
                    </small>
                  </div>
                  <hr />
                </li>
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlText">Yorum Sahibi</label>
                    <dd>
                      <input
                        className="form-control"
                        id="yorumSahibi1"
                        name="yorumSahibi1"
                        placeholder="Yorum kime ait?"
                        type="text"
                        ref={yorumSahibiIki}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Yorum yapan kişinin ismi
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Mesajı Girin
                    </label>
                    <textarea
                      name="yorumu1"
                      id="yorumu1"
                      className="form-control"
                      placeholder="Yorumu girin"
                      rows={3}
                      ref={yorumuIki}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Yorum yapan kişinin mesajı
                    </small>
                  </div>
                  <hr />
                </li>
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlText">Yorum Sahibi</label>
                    <dd>
                      <input
                        className="form-control"
                        id="yorumSahibi1"
                        name="yorumSahibi1"
                        placeholder="Yorum kime ait?"
                        type="text"
                        ref={yorumSahibiUc}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Yorum yapan kişinin ismi
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Mesajı Girin
                    </label>
                    <textarea
                      name="yorumu1"
                      id="yorumu1"
                      className="form-control"
                      placeholder="Yorumu girin"
                      rows={3}
                      ref={yorumuUc}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Yorum yapan kişinin mesajı
                    </small>
                  </div>
                  <hr />
                </li>
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlText">Yorum Sahibi</label>
                    <dd>
                      <input
                        className="form-control"
                        id="yorumSahibi1"
                        name="yorumSahibi1"
                        placeholder="Yorum kime ait?"
                        type="text"
                        ref={yorumSahibiDort}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Yorum yapan kişinin ismi
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Mesajı Girin
                    </label>
                    <textarea
                      name="yorumu1"
                      id="yorumu1"
                      className="form-control"
                      placeholder="Yorumu girin"
                      rows={3}
                      ref={yorumuDort}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Yorum yapan kişinin mesajı
                    </small>
                  </div>
                  <hr />
                </li>
              </ul>
            )}
            <button type="submit" className="btn form-control btn-default">
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Comments
