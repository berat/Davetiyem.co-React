import images from '../../public/images/image'

function Galeri() {
  return (
    <div id="galeriSlider">
      <img
        src={images.user.galeri}
        width={350}
        height={325}
        alt=""
      />
      <img
        src={images.user.galeri}
        width={350}
        height={325}
        alt=""
      />
      <img
        src={images.user.galeri}
        width={350}
        height={325}
        alt=""
      />
    </div>
  )
}

export default Galeri
