import React, { useEffect, useState } from 'react'
import images from '../../public/images/image'

const Header = ({ kisisel, tarih, username, genel, fullTarih }) => {
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
              {/* <a
                href={`https://calendar.google.com/calendar/r/eventedit?text=${
                  item.gelinAdi != '' ? item.gelinAdi : 'Gelin Adı'
                } ve ${
                  item.damatAdi != '' ? item.damatAdi : 'Damat Adı'
                }+Düğünü&dates=20131124T010000Z/20131124T020000Z&details=Event+Details+Here&location=123+Main+St,+Example,+NY%22&sf=true`}
              >
                Deneme
              </a> */}
              <div className="saat">
                {tarih != undefined ? (
                  timerComponents.length ? (
                    timerComponents
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
