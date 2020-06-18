import React from 'react'
import Swiper from 'react-id-swiper'
import useWindowSize from '../../lib/hooks'
import 'swiper/css/swiper.css'
import Carousel, { Modal, ModalGateway } from 'react-images';

const Galeri = ({ galeri, username }) => {
  const [light, setLight] = React.useState({isVisible: false, index: 0})
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

  console.log(galeri)

  return galeri.length != 0 ? (
    <div id="galeriSlider">
       <ModalGateway>
        {light.isVisible ? (
          <Modal onClose={() => setLight({isVisible: !light.isVisible, index: 0})}>
            <Carousel currentIndex={light.index} views={galeri.map(item => {return {source: `/uploads/users/${username}/${item.foto}`}})} />
          </Modal>
        ) : null}
      </ModalGateway>
      <Swiper {...params}>
        {galeri.map((item, index) => (
          <img
            key={item.fotoid}
            src={`/uploads/users/${username}/${item.foto}`}
            width={size.width / 3.9 + 50}
            onClick={() =>
              setLight({
                isVisible: !light.isVisible,
                index: index
              })
            }
            height={size.width / 3.9}
            alt=""
          />
        ))}
      </Swiper>
    </div>
  ) : null
}

export default Galeri
