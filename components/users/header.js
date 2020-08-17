import React, { useEffect, useState } from 'react'
import images from '../../public/images/image'

const Header = ({ kisisel, tarih, username, genel, gunler }) => {
  const converDate = tarih => {
    if (tarih) {
      let yil = parseInt(tarih.split('-')[0])
      let ay = tarih.split('-')[1]
      let gun = parseInt(tarih.split('-')[2])

      return `${yil}${ay}${gun}T160000Z/${yil}${ay}${gun + 1}T160000Z`
    }
  }

  const calculateTimeLeft = () => {
    const difference = +new Date(tarih) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        Ay: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        Gün: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        Saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Dakika: Math.floor((difference / 1000 / 60) % 60),
        Saniye: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <div className="month">
        {timeLeft[interval]} <span>{interval}</span>
      </div>
    )
  })

  return (
    <header>
      <div id="header">
        <div className="header">
          <div className="ortala">
            <div className="dikey">
              {kisisel.length != 0 ? (
                kisisel.map(item => (
                  <div className="giris" key={item.kisiselid}>
                    <div className="kisi">
                      <img
                        src={
                          item.gelinFoto != null
                            ? `/uploads/users/${username}/profil/${item.gelinFoto}`
                            : images.user.gelinFoto
                        }
                        alt="gelin fotoğrafı"
                      />
                      <span>
                        {item.gelinAdi != '' ? item.gelinAdi : 'Gelin Adı'}
                      </span>
                    </div>
                    <div className="orta">&amp;</div>
                    <div className="kisi">
                      <img
                        src={
                          item.damatFoto != null
                            ? `/uploads/users/${username}/profil/${item.damatFoto}`
                            : images.user.damatFoto
                        }
                        alt="damat fotoğrafı"
                      />
                      <span>
                        {item.damatAdi != '' ? item.damatAdi : 'Damat Adı'}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="giris">
                  <div className="kisi">
                    <img src={images.user.gelinFoto} alt="gelin fotoğrafı" />
                    <span> Gelin Adı </span>
                  </div>
                  <div className="orta">&amp;</div>
                  <div className="kisi">
                    <img src={images.user.damatFoto} alt="damat fotoğrafı" />
                    <span> Damat Adı </span>
                  </div>
                </div>
              )}
              <div className="saat">
                {tarih != undefined ? (
                  timerComponents.length ? (
                    <div className="takvimEkle">
                      <span className="takvimEkleText">
                        <a
                          href={`https://calendar.google.com/calendar/r/eventedit?text=${
                            kisisel[0].gelinAdi != ''
                              ? kisisel[0].gelinAdi
                              : 'Gelin Adı'
                          } ve ${
                            kisisel[0].damatAdi != ''
                              ? kisisel[0].damatAdi
                              : 'Damat Adı'
                          }+Düğünü&dates=${converDate(tarih)}&details=${
                            kisisel[0].gelinAdi != ''
                              ? kisisel[0].gelinAdi
                              : 'Gelin Adı'
                          } ve ${
                            kisisel[0].damatAdi != ''
                              ? kisisel[0].damatAdi
                              : 'Damat Adı'
                          } evleniyor. Düğün daveti.&location=${
                            gunler[0].dadres
                          }&sf=true`}
                          target="_blank"
                        >
                          Takvime Ekle
                        </a>
                      </span>
                      {timerComponents}
                    </div>
                  ) : (
                    <span>EVLENDİK!</span>
                  )
                ) : (
                  <span className="nullTarih">Tarih Eklenmedi!</span>
                )}
              </div>
              <div className="soz">
                {genel != []
                  ? genel.map((item, index) => (
                      <p key={index}>{item.dugunSozu}</p>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
