import React from 'react'

export default function Price() {
  return (
    <div id="price">
      <div className="maddeler">
        <h4>
          Kullanım Ücreti <i>|</i>
          <span>2
            Keşfetmeniz için <b>1(bir) gün</b> ücretsiz
          </span>
        </h4>
        <ul>
          <li>Size özel internet sitesi.</li>
          <li>Fotoğraflarınızdan oluşan bir galeri.</li>
          <li>Düğün tarih, mekanı yayınlayabilme.</li>
          <li>Düğün konumlarınıza özel navigasyon özelliği.</li>
          <li>Düğüne kalan zamanı gösteren bir sayaç.</li>
          <li>Kolayca paylaşabilme.</li>
        </ul>
      </div>
      <div className="fiyat">
        <span className="ucret">
          59.<i>99 ₺</i>
        </span>
        <small>*bir seferlik</small>
        <div className="sistemLogo">
          <img
            src="https://www.sopsy.com/images/sopsy-logo-colored.svg"
            alt="Davetiyem.co Sopsy"
            height="20px"
          />
          <span>güvencesiyle.</span>
        </div>
      </div>
    </div>
  )
}
