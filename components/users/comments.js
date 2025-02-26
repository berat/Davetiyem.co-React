import React from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const Comments = ({ yorum }) => {
  const params = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }

  return yorum.length != 0 ? (
    <div id="soz">
      <div className="soz">
        <Swiper {...params}>
          {yorum.map(item => (
            <div className="sozIcerik" key={item.yorumid}>
              <p className="icerik">{item.yorumu}</p>
              <span className="sahibi">{item.yorumSahibi}</span>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  ) : null
}

export default Comments
