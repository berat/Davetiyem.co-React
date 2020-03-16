import React, { useRef, useEffect, useState } from 'react'
import Layout from '../../components/admin/layout'
import CKEditor from 'ckeditor4-react'
import Axios from 'axios'
import config from '../../config'
import '../../assets/admin/dark.css'
import Flatpickr from 'react-flatpickr'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import cogoToast from 'cogo-toast'
import { set } from 'react-ga'

const Wedding = () => {
  const [bilgi, setBilgi] = useState()
  // const [sendData, setSendData] = useState()
  const [dipNot, setDipNot] = useState()

  const baslikBir = useRef(),
    baslikIki = useRef(),
    tarihBir = useRef(),
    tarihIki = useRef(),
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
        tarih: tarihBir.current.value,
        iframe: iframeBir.current.value
      },
      {
        userid: userid,
        baslik: baslikIki.current.value,
        adres: adresIki.current.value,
        tarih: tarihIki.current.value,
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
                      //   defaultValue={bilgi != undefined ? bilgi.}
                      ref={baslikBir}
                    />
                  </dd>
                  <small id="emailHelp" className="form-text text-muted">
                    Düğün Bilgileri kısmında gözükecek olacak başlık. Örn: Kına
                    Gecesi
                  </small>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="date">
                    Tarih
                  </label>
                  <Flatpickr
                    className="form-text text-muted"
                    value={new Date()}
                    options={{
                      minDate: new Date(),
                      dateFormat: 'j F Y',
                      locale: config.date,
                      altFormat: 'F j, Y'
                    }}
                    ref={tarihBir}
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
                    defaultValue={
                      'Şentepe Mahallesi, Atasoy Cd. No:18, 06900 Polatlı/Ankara'
                    }
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
                    defaultValue={
                      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8127.620741171537!2d32.13232713492433!3d39.56319856398057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe67a0e1b4e75ad1a!2zTWsgRMO8xJ_DvG4gVmUgVG9wbGFudMSxIFNhbG9udQ!5e0!3m2!1str!2str!4v1547663814910" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                    }
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
                      defaultValue="Düğün Gecesi"
                      ref={baslikIki}
                    />
                  </dd>
                  <small id="emailHelp" className="form-text text-muted">
                    Düğün Bilgileri kısmında gözükecek olacak başlık. Örn: Kına
                    Gecesi
                  </small>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="date">
                    Tarih
                  </label>
                  <Flatpickr
                    className="form-text text-muted"
                    value={new Date()}
                    options={{
                      minDate: new Date(),
                      dateFormat: 'j F Y',
                      locale: config.date,
                      altFormat: 'F j, Y'
                    }}
                    ref={tarihIki}
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
                    defaultValue={
                      'Gülveren Mahallesi, Gençlik Cd., 06900 Polatlı/Ankara'
                    }
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
                    defaultValue={
                      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6881.475340003867!2d32.12912850771315!3d39.56873568692161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50b0ca69793c9c65!2zxLBraSBBbHlhbnMgRMO8xJ_DvG4gU2Fsb25sYXLEsQ!5e0!3m2!1str!2str!4v1547665856765" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
                    }
                    ref={iframeIki}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Google Maps'den aldığınız kod
                  </small>
                </div>
              </li>
            </ul>
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
