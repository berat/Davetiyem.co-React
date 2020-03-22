import React from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const Galeri = ({galeri, username}) => {
  const params = {
    slidesPerView: 3.9,
    lazy: true,
    mousewheel: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    }
  }
  return (
    <div id="galeriSlider">
      <Swiper {...params}>
        {galeri != []
          ? galeri.map(item => (
              <img
                key={item.fotoid}
                src={`/uploads/users/${username}/${item.foto}`}
                width={350}
                height={325}
                alt=""
              />
            ))
          : null}
      </Swiper>
    </div>
  )
}

export default Galeri
