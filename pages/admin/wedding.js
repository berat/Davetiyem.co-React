import React, { useRef, useEffect, useState } from 'react'
import Layout from '../../components/admin/layout'
import CKEditor from 'ckeditor4-react'
import Axios from 'axios'
import Flatpickr from 'react-flatpickr'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import cogoToast from 'cogo-toast'

import config from '../../config'
import '../../assets/admin/dark.css'

const Wedding = () => {
  const [bilgi, setBilgi] = useState()
  const [dipNot, setDipNot] = useState()
  const [tarihBir, setTarihBir] = useState()
  const [tarihIki, setTarihIki] = useState()

  const baslikBir = useRef(),
    baslikIki = useRef(),
    iframeBir = useRef(),
    iframeIki = useRef(),
    adresBir = useRef(),
    adresIki = useRef()

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useEffect(() => {
    Axios.get(`http://${config.apiURL}${config.version}dugun/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setBilgi(response.data.data)
          setTarihBir(response.data.data[0].dtarih)
          setTarihIki(response.data.data[1].dtarih)
        }
      }
    )
  }, [setBilgi])

  const onSubmit = async e => {
    e.preventDefault()
    const sendData = [
      {
        userid: userid,
        baslik: baslikBir.current.value,
        adres: adresBir.current.value,
        tarih: tarihBir,
        iframe: iframeBir.current.value
      },
      {
        userid: userid,
        baslik: baslikIki.current.value,
        adres: adresIki.current.value,
        tarih: tarihIki,
        iframe: iframeIki.current.value
      }
    ]
    Axios.post(`http://${config.apiURL}${config.version}dugun`, sendData).then(
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
    if (dipNot != undefined) {
      Axios.post(`http://${config.apiURL}${config.version}genel`, {
        userid: userid,
        dipNot: dipNot
      }).then(response => {
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
      })
    }
  }
  return (
    <Layout>
      <div className="content row">
        <div className="bilgi col-12">
          <span>Düğün bilgilerinizi buradan düzenleyebilirsiniz.</span>
        </div>
        <div className="icerik col-12">
          <form method="post" onSubmit={onSubmit} className="col-12">
            {bilgi != undefined ? (
              <ul className="row">
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Başlık</label>
                    <dd>
                      <input
                        className="form-control"
                        id="baslikBir"
                        name="baslikBir"
                        placeholder="Kına Gecesi"
                        type="text"
                        defaultValue={bilgi[0].dbaslik}
                        ref={baslikBir}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Düğün Bilgileri kısmında gözükecek olacak başlık. Örn:
                      Kına Gecesi
                    </small>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="date">
                      Tarih
                    </label>
                    <Flatpickr
                      className="form-text"
                      value={tarihBir == undefined ? new Date() : tarihBir}
                      options={{
                        minDate: new Date(),
                        dateFormat: 'd F Y',
                        locale: config.date,
                        altFormat: 'd F Y',
                        altInput: true
                      }}
                      onChange={(selectedDates, dateStr, instance) => {
                        selectedDates.forEach(function(date) {
                          setTarihBir(instance.formatDate(date, 'd F Y'))
                        })
                      }}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Düğün tarihini giriniz.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Adresi Girin
                    </label>
                    <textarea
                      name="adresBir"
                      className="form-control"
                      id="adresBir"
                      rows={3}
                      placeholder="Adresi yazın"
                      defaultValue={bilgi[0].dadres}
                      ref={adresBir}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Düğünün yapılacağı adresi girin
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Google Maps İframe Kodu
                    </label>
                    <textarea
                      name="iframeBir"
                      className="form-control"
                      id="iframeBir"
                      rows={3}
                      placeholder="Google'dan aldığınız iframe kodunu girin."
                      defaultValue={bilgi[0].diframe}
                      ref={iframeBir}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Google Maps'den aldığınız kod
                    </small>
                  </div>
                </li>
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Başlık</label>
                    <dd>
                      <input
                        className="form-control"
                        id="baslikIki"
                        name="baslikIki"
                        placeholder="Düğün Gecesi"
                        type="text"
                        defaultValue={bilgi[1].dbaslik}
                        ref={baslikIki}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Düğün Bilgileri kısmında gözükecek olacak başlık. Örn:
                      Kına Gecesi
                    </small>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="date">
                      Tarih
                    </label>
                    <Flatpickr
                      className="form-text"
                      value={tarihIki == undefined ? new Date() : tarihIki}
                      options={{
                        minDate: new Date(),
                        dateFormat: 'd F Y',
                        locale: config.date,
                        altFormat: 'd F Y'
                      }}
                      onChange={(selectedDates, dateStr, instance) => {
                        selectedDates.forEach(function(date) {
                          setTarihIki(instance.formatDate(date, 'd F Y'))
                        })
                      }}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Düğün tarihini giriniz.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Adresi Girin
                    </label>
                    <textarea
                      name="adresIki"
                      className="form-control"
                      id="adresIki"
                      rows={3}
                      placeholder="Adresi yazın"
                      defaultValue={bilgi[1].dadres}
                      ref={adresIki}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Düğünün yapılacağı adresi girin
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Google Maps İframe Kodu
                    </label>
                    <textarea
                      name="iframeIki"
                      className="form-control"
                      id="iframeIki"
                      rows={3}
                      placeholder="Google'dan aldığınız iframe kodunu girin."
                      defaultValue={bilgi[1].diframe}
                      ref={iframeIki}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Google Maps'den aldığınız kod
                    </small>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="row">
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Başlık</label>
                    <dd>
                      <input
                        className="form-control"
                        id="baslikBir"
                        name="baslikBir"
                        placeholder="Kına Gecesi"
                        type="text"
                        ref={baslikBir}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Düğün Bilgileri kısmında gözükecek olacak başlık. Örn:
                      Kına Gecesi
                    </small>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="date">
                      Tarih
                    </label>
                    <Flatpickr
                      className="form-text"
                      value={tarihBir == undefined ? new Date() : tarihBir}
                      options={{
                        minDate: new Date(),
                        dateFormat: 'j F Y',
                        locale: config.date,
                        altFormat: 'j F Y',
                        altInput: true
                      }}
                      onChange={(selectedDates, dateStr, instance) => {
                        selectedDates.forEach(function(date) {
                          setTarihBir(instance.formatDate(date, 'j F Y'))
                        })
                      }}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Düğün tarihini giriniz.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Adresi Girin
                    </label>
                    <textarea
                      name="adresBir"
                      className="form-control"
                      id="adresBir"
                      rows={3}
                      placeholder="Adresi yazın"
                      ref={adresBir}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Düğünün yapılacağı adresi girin
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Google Maps İframe Kodu
                    </label>
                    <textarea
                      name="iframeBir"
                      className="form-control"
                      id="iframeBir"
                      rows={3}
                      placeholder="Google'dan aldığınız iframe kodunu girin."
                      ref={iframeBir}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Google Maps'den aldığınız kod
                    </small>
                  </div>
                </li>
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Başlık</label>
                    <dd>
                      <input
                        className="form-control"
                        id="baslikIki"
                        name="baslikIki"
                        placeholder="Düğün Gecesi"
                        type="text"
                        ref={baslikIki}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Düğün Bilgileri kısmında gözükecek olacak başlık. Örn:
                      Kına Gecesi
                    </small>
                  </div>
                  <div className="form-group">
                    <label className="control-label" htmlFor="date">
                      Tarih
                    </label>
                    <Flatpickr
                      className="form-text"
                      value={tarihIki == undefined ? new Date() : tarihIki}
                      options={{
                        minDate: new Date(),
                        dateFormat: 'j F Y',
                        locale: config.date,
                        altFormat: 'j F Y'
                      }}
                      onChange={(selectedDates, dateStr, instance) => {
                        selectedDates.forEach(function(date) {
                          setTarihIki(instance.formatDate(date, 'j F Y'))
                        })
                      }}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Düğün tarihini giriniz.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Adresi Girin
                    </label>
                    <textarea
                      name="adresIki"
                      className="form-control"
                      id="adresIki"
                      rows={3}
                      placeholder="Adresi yazın"
                      ref={adresIki}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Düğünün yapılacağı adresi girin
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Google Maps İframe Kodu
                    </label>
                    <textarea
                      name="iframeIki"
                      className="form-control"
                      id="iframeIki"
                      rows={3}
                      placeholder="Google'dan aldığınız iframe kodunu girin."
                      ref={iframeIki}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Google Maps'den aldığınız kod
                    </small>
                  </div>
                </li>
              </ul>
            )}
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Dip Not</label>
              <CKEditor
                data="Gelin/Damat evi gibi bilgileri belirtebilirsiniz. Eğer boş kalmasını istiyorsanız lütfen burayı silin."
                onChange={evt => {
                  setDipNot(evt.editor.getData())
                }}
                config={{
                  toolbar: [['Bold', 'Italic', 'Underline']]
                }}
              />
              <small id="emailHelp" className="form-text text-muted">
                Damat/gelin evini ve saati belirtebilirisiniz..
              </small>
            </div>
            <button type="submit" className="btn form-control btn-default">
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Wedding
