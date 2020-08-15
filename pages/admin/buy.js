import React from 'react'
import Layout from '../../components/admin/layout'
import Price from '../../components/index/price'

export default function Ode() {
  return (
    <Layout>
      <div className="content row">
        <div className="icerik flex-column col-12">
          <a
            href="https://www.sopsy.com/d/Pud1Vo"
            target="_blank"
            className="odemeYonlendir"
          >
            <img
              src="/images/sopsyLogo.svg"
              height="30"
              alt="sopsy ile ödeme yap"
            />
            İLE ÖDEME YAP
          </a>
          <ul className="odemeSistemi">
            <p className="h4 text-danger text-center">
              Ödeme Yapmadan Önce Dikkat Edin
            </p>
            <li>Davetiyem.co'ya kayıtlı olan mail adresinizi girin.</li>
            <li>Sipariş notunuza kullanıcı adınızı yazın.</li>
            <li>Sopsy üzerinden ödemeyi onaylamayı unutmayınız.</li>
            <li>
              Ödeme yaptıktan sonra hesabınız en kısa sürede onaylanacaktır.
            </li>
          </ul>
          <Price />
        </div>
      </div>
    </Layout>
  )
}
