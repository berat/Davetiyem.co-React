import React from 'react'

const Header = ({ kisisel, tarih, username }) => {
  return (
    <header>
      <div id="header">
        <div className="header">
          <div className="ortala">
            <div className="dikey">
              {kisisel != [] ? (
                kisisel.map(item => (
                  <div className="giris" key={item.kisiselid}>
                    <div className="kisi">
                      <img src={item.gelinFoto != '' || null ? `/uploads/users/${username}/profil/${item.gelinFoto}` : images.user.gelinFoto} alt="" />
                      <span> {item.gelinAdi != '' || null ? item.gelinAdi : "Gelin Adı"} </span>
                    </div>
                    <div className="orta">&amp;</div>
                    <div className="kisi">
                      <img src={item.damatFoto != '' || null ? `/uploads/users/${username}/profil/${item.damatFoto}` : images.user.damatFoto} alt="" />
                      <span> {item.damatAdi != '' || null ? item.damatAdi : "Damat Adı"} </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="giris">
                  <div className="kisi">
                    <img src={images.user.gelinFoto} alt="" />
                    <span> Gelin Adı </span>
                  </div>
                  <div className="orta">&amp;</div>
                  <div className="kisi">
                    <img src={images.user.damatFoto} alt="" />
                    <span> Damat Adı </span>
                  </div>
                </div>
              )}
              <div className="saat">
                <span id="tarih">11.07.2020</span>
                <span id="saat">20:00</span>
                <div className="month">
                  00 <span>Ay</span>
                </div>
                <div className="days">
                  00 <span>Gün</span>
                </div>
                <i>Kaldı</i>
              </div>
              <div className="soz">
                <p>
                  'Mutluluk gele dursun, dostlara haber olsun. Düğünümüz var,
                  bizi sevenler buyursun.'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
