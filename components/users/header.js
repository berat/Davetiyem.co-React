import React, { useEffect, useState } from 'react'
import images from '../../public/images/image'

const Header = ({ kisisel, tarih, username, genel }) => {
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
        {timeLeft[interval]} <span>{interval}</span>{' '}
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
                          item.gelinFoto != '' || null
                            ? `/uploads/users/${username}/profil/${item.gelinFoto}`
                            : images.user.gelinFoto
                        }
                        alt=""
                      />
                      <span>
                        {' '}
                        {item.gelinAdi != '' || null
                          ? item.gelinAdi
                          : 'Gelin Adı'}{' '}
                      </span>
                    </div>
                    <div className="orta">&amp;</div>
                    <div className="kisi">
                      <img
                        src={
                          item.damatFoto != '' || null
                            ? `/uploads/users/${username}/profil/${item.damatFoto}`
                            : images.user.damatFoto
                        }
                        alt=""
                      />
                      <span>
                        {' '}
                        {item.damatAdi != '' || null
                          ? item.damatAdi
                          : 'Damat Adı'}{' '}
                      </span>
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
                {tarih != undefined ? (
                  timerComponents.length ? (
                    timerComponents
                  ) : (
                    <span>EVLENDİK!</span>
                  )
                ) : <span className="nullTarih">Tarih Eklenmedi!</span>}
              </div>
              <div className="soz">
                {genel != []
                  ? genel.map(item => <p>{item.dugunSozu}</p>)
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
