import React, { useRef, useEffect, useState } from 'react'
import Layout from '../../components/admin/layout'
import Axios from 'axios'
import Flatpickr from 'react-flatpickr'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import cogoToast from 'cogo-toast'
import Router from 'next/router'

import config from '../../config'
import '../../assets/admin/dark.css'

const General = () => {
  const [tarih, setTarih] = useState()
  const [saat, setSaat] = useState()
  const [liste, setListe] = useState([])
  const [load, setLoad] = useState(false)

  const baslik = useRef(),
    aciklama = useRef(),
    soz = useRef()

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useEffect(() => {
    userid == null ? Router.replace(config.loginPage) : null
    Axios.get(`${config.apiURL}${config.version}genel/${userid}`).then(
      response => {
        if (response.data.status == 201 && response.data.data.length != 0) {
          console.log(response.data.data)
          setListe(response.data.data)
          setTarih(response.data.data[0].tarih)
          setSaat(response.data.data[0].saat)
        }
      }
    )
  }, [setListe])

  const onSubmit = e => {
    setLoad(true)
    e.preventDefault()
    Axios.post(`${config.apiURL}${config.version}genel`, {
      userid: userid,
      tarih: tarih,
      saat: saat,
      dugunSozu: soz.current.value,
      title: baslik.current.value,
      desc: aciklama.current.value
    }).then(response => {
      if (response.data.status == 201) {
        setLoad(false)
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
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
    <Layout>
      <div className="content row">
        <div className="bilgi col-12">
          <span>Genel ayarları buradan düzenleyebilirsiniz.</span>
        </div>
        <div className="icerik col-12">
          {liste.length != 0 ? (
            <form onSubmit={onSubmit} method="post" className="col-12">
              <ul className="row">
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="date">
                      Tarih
                    </label>
                    <dd>
                      <Flatpickr
                        className="form-text"
                        value={tarih == undefined ? new Date() : tarih}
                        options={{
                          minDate: new Date(),
                          dateFormat: 'd m Y',
                          locale: config.date,
                          altFormat: 'd m Y',
                          altInput: true
                        }}
                        onChange={(selectedDates, dateStr, instance) => {
                          selectedDates.forEach(function(date) {
                            setTarih(instance.formatDate(date, 'd m Y'))
                          })
                        }}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Geri sayaç için tarihi giriniz.
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Düğün Saati</label>
                    <dd>
                      <Flatpickr
                        className="form-text"
                        value={saat == undefined ? new Date() : saat}
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: 'H:i',
                          time_24hr: true
                        }}
                        onChange={(selectedDates, dateStr, instance) => {
                          selectedDates.forEach(function(date) {
                            setSaat(instance.formatDate(date, 'H:i'))
                          })
                        }}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Geri sayaç için saati giriniz.
                    </small>
                  </div>
                </li>
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label>Davetiye Başlığı</label>
                    <dd>
                      <input
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Gelin Adi & Damat Adi"
                        type="text"
                        ref={baslik}
                        defaultValue={liste[0].title}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Tarayıcı sekmesinde gözükecek olan ismi girin
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Davetiye Açıklaması</label>
                    <textarea
                      name="desc"
                      id="desc"
                      className="form-control"
                      placeholder="Google'da gözükecek olan açıklama metni. Örn: Bu mutlu günümüzde sizleri de aramızdan görmekten mutluluk duyarız. Gelin/Damat"
                      rows={3}
                      ref={aciklama}
                      defaultValue={liste[0].desc}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Google aramalarında gözükecek olan açıklama satırı
                    </small>
                  </div>
                </li>
              </ul>
              <div className="form-group">
                <label htmlFor="title">Düğün Sözü</label>
                <textarea
                  name="dugunSozu"
                  maxLength={150}
                  id="dugunSozu"
                  className="form-control"
                  placeholder="Davetiye sözünü girin"
                  rows={6}
                  ref={soz}
                  defaultValue={liste[0].dugunSozu}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Anasayfada gözükecek olan düğün sözünü giriniz.(Max 150
                  karakter)
                </small>
              </div>
              <button type="submit" className="btn form-control btn-default">
                Kaydet
              </button>
            </form>
          ) : (
            <form onSubmit={onSubmit} method="post" className="col-12">
              <ul className="row">
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="date">
                      Tarih
                    </label>
                    <dd>
                      <Flatpickr
                        className="form-text"
                        value={tarih == undefined ? new Date() : tarih}
                        options={{
                          minDate: new Date(),
                          dateFormat: 'j F Y',
                          locale: config.date,
                          altFormat: 'j F Y',
                          altInput: true
                        }}
                        onChange={(selectedDates, dateStr, instance) => {
                          selectedDates.forEach(function(date) {
                            console.log(instance.formatDate(date, 'j F Y'))
                            setTarih(instance.formatDate(date, 'j F Y'))
                          })
                        }}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Geri sayaç için tarihi giriniz.
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Düğün Saati</label>
                    <dd>
                      <Flatpickr
                        className="form-text"
                        value={saat == undefined ? new Date() : saat}
                        options={{
                          enableTime: true,
                          noCalendar: true,
                          dateFormat: 'H:i',
                          time_24hr: true
                        }}
                        onChange={(selectedDates, dateStr, instance) => {
                          selectedDates.forEach(function(date) {
                            console.log(instance.formatDate(date, 'j F Y'))
                            setSaat(instance.formatDate(date, 'j F Y'))
                          })
                        }}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Geri sayaç için saati giriniz.
                    </small>
                  </div>
                </li>
                <li className="col-xs-6 col-lg-6">
                  <div className="form-group">
                    <label>Davetiye Başlığı</label>
                    <dd>
                      <input
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Gelin Adi & Damat Adi"
                        type="text"
                        ref={baslik}
                      />
                    </dd>
                    <small id="emailHelp" className="form-text text-muted">
                      Tarayıcı sekmesinde gözükecek olan ismi girin
                    </small>
                  </div>
                  <div className="form-group">
                    <label>Davetiye Açıklaması</label>
                    <textarea
                      name="desc"
                      id="desc"
                      className="form-control"
                      placeholder="Google'da gözükecek olan açıklama metni. Örn: Bu mutlu günümüzde sizleri de aramızdan görmekten mutluluk duyarız. Gelin/Damat"
                      rows={3}
                      ref={aciklama}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Google aramalarında gözükecek olan açıklama satırı
                    </small>
                  </div>
                </li>
              </ul>
              <div className="form-group">
                <label htmlFor="title">Düğün Sözü</label>
                <textarea
                  name="dugunSozu"
                  maxLength={150}
                  id="dugunSozu"
                  className="form-control"
                  placeholder="Davetiye sözünü girin"
                  rows={6}
                  ref={soz}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Anasayfada gözükecek olan düğün sözünü giriniz.(Max 150
                  karakter)
                </small>
              </div>
              <button
                type="submit"
                className={`btn form-control btn-default ${
                  load ? 'loading disabled' : null
                }`}
              >
                Kaydet
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default General
