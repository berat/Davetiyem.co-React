import React from 'react'
import Swiper from 'react-id-swiper'
import useWindowSize from '../../lib/hooks'
import 'swiper/css/swiper.css'

const Galeri = ({ galeri, username }) => {
  const size = useWindowSize()

  const params = {
    slidesPerView: size.width > 768 ? 3.9 : 2,
    lazy: true,
    mousewheel: false,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    }
  }
  return galeri.length != 0 ? (
    <div id="galeriSlider">
      <Swiper {...params}>
        {galeri.map(item => (
          <img
            key={item.fotoid}
            src={`/uploads/users/${username}/${item.foto}`}
            width={(size.width / 3.9) + 50}
            height={size.width / 3.9}
            alt=""
          />
        ))}
      </Swiper>
    </div>
  ) : null
}

export default Galeri
