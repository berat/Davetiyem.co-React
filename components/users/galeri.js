import React from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const Galeri = ({ galeri, username }) => {
  const params = {
    slidesPerView: 3.9,
    lazy: true,
    mousewheel: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    }
  }
  return galeri.length != 0
    ? galeri.map(item => (
        <div id="galeriSlider">
          <Swiper {...params}>
            <img
              key={item.fotoid}
              src={`/uploads/users/${username}/${item.foto}`}
              width={350}
              height={325}
              alt=""
            />
          </Swiper>
        </div>
      ))
    : null
}

export default Galeri
