import Link from 'next/link'
import images from '../../public/images/image'

function Bottom() {
  return (
    <>
      <div className="bolum bacikla animated fadeIn">
        <div className="acikla">
          <p>
            Online davetiye sitesi ile sünnet veya düğün yapacaksanız
            davetiyenizi biz karşılıyoruz. Bizden satın alacağınız davetiye ile
            hem daha az bir süre de hem de daha az bir ücret ile davetiye
            sorununu ortadan kaldırmış oluyorsunuz.
          </p>
        </div>
        <div className="sbuton">
          <Link href="/katil">
            <a>Davetiye Siteni Aç</a>
          </Link>
        </div>
      </div>
      <div id="iletisim" className="animated fadeIn">
        <div className="bolum iletisim">
          <div className="baslik">İLETİŞİM</div>
          <div className="acikla">
            <p>
              Siz aklınıza takılanı sorun biz de en hızlı şekilde cevaplayıp
              size geri dönelim.
            </p>
          </div>
          <div className="iletisim-form">
            <form action="/mail-gonder" method="POST">
              <div className="sol">
                <input
                  type="text"
                  id="tel"
                  name="ad"
                  required
                  placeholder="İsminiz"
                />
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Telefon numarınız"
                />
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  required
                  placeholder="Mail adresiniz"
                />
              </div>
              <div className="sag">
                <textarea
                  rows={10}
                  cols={23}
                  id="mesaj"
                  name="mesaj"
                  required
                  placeholder="Bir şeyler yazabilirsiniz"
                  defaultValue={''}
                />
              </div>
              <div className="sol">
                <input
                  type="submit"
                  defaultValue="MESAJI YOLLA"
                  name="gonder"
                />
              </div>
            </form>
            <div className="temizle" />
          </div>
          <div className="alt">
            <div className="alt-logo">
              <Link href="/">
                <a>
                  <img src={images.footer} alt="" />
                </a>
              </Link>
            </div>
            <div className="alt-sosyal">
              <ul>
                <li>
                  <Link href="https://www.instagram.com/davetiyemco/">
                    <a>
                      <i className="fa fa-instagram" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/davetiyemco">
                    <a>
                      <i className="fa fa-twitter" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/onlinedugundavetiyesi/">
                    <a>
                      <i className="fa fa-facebook" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:destek@davetiyem.co">
                    <a>
                      <i className="fa fa-envelope-o" />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bottom
