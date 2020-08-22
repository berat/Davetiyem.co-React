import React, { useRef } from 'react'
import Axios from 'axios'
import config from '../../config'
import Link from 'next/link'
import images from '../../public/images/image'
import cogoToast from 'cogo-toast'

const Bottom = () => {
  const isim = useRef(),
    no = useRef(),
    email = useRef(),
    msg = useRef()

  const onSubmit = e => {
    e.preventDefault()
    Axios.post(`${config.apiURL}${config.version}mailGonder`, {
      isim: isim.current.value,
      email: email.current.value,
      no: no.current.value,
      msg: msg.current.value
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

  return (
    <>
      <div id="iletisim" className="animated fadeIn">
        <div className="bolum iletisim">
          <div className="baslik">İLETİŞİM</div>
          <div className="acikla">
            <p>
              Siz aklınıza takılanı sorun biz de en hızlı şekilde cevaplayıp
              size geri dönelim.
            </p>
          </div>
          <div className="iletisim-form">
            <form onSubmit={onSubmit} method="POST">
              <div className="sol">
                <input
                  type="text"
                  id="tel"
                  name="ad"
                  required
                  placeholder="İsminiz"
                  ref={isim}
                />
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Telefon numarınız"
                  ref={no}
                />
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  required
                  placeholder="Mail adresiniz"
                  ref={email}
                />
              </div>
              <div className="sag">
                <textarea
                  rows={10}
                  cols={23}
                  id="mesaj"
                  name="mesaj"
                  required
                  placeholder="Bir şeyler yazabilirsiniz"
                  ref={msg}
                />
              </div>
              <div className="sol">
                <input
                  type="submit"
                  defaultValue="MESAJI YOLLA"
                  name="gonder"
                />
              </div>
            </form>
            <div className="temizle" />
          </div>
          <div className="alt">
            <div className="alt-logo">
              <Link href="/">
                <a>
                  <img src={images.footer} alt="" />
                </a>
              </Link>
            </div>
            <div className="alt-sosyal">
              <ul>
                <li>
                  <Link
                    href="https://www.instagram.com/davetiyemco/"
                    prefetch={false}
                  >
                    <a>
                      <i className="fa fa-instagram" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/davetiyemco" prefetch={false}>
                    <a>
                      <i className="fa fa-twitter" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/onlinedugundavetiyesi/"
                    prefetch={false}
                  >
                    <a>
                      <i className="fa fa-facebook" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:destek@davetiyem.co" prefetch={false}>
                    <a>
                      <i className="fa fa-envelope-o" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bottom
