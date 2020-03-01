import Link from 'next/link'
import images from '../public/images/image'

function ResetPassword() {
  return (
    <div id="column" className="ui grid doubling two column row">
      <div className="six wide column forms">
        <div className="formCenter">
          <h1>ŞİFRENİ SIFIRLA</h1>
          <span>
            Unuttuğun şifreni hemen sıfırla ve kaldığın yerden devam et.
          </span>
          <div className="form">
            <div className="ui input">
              <input type="email" placeholder="E-mail adresiniz" />
            </div>
            <button className="ui blue button">ŞİFRENİ SIFIRLA</button>
            <small>
              <Link href="/giris"><a>Hatırladın mı? Hemen giriş yap.</a></Link>
            </small>
            <div className="ui horizontal divider">Ya da</div>
            <Link href="/katil"><a className="ui red button small basic kayit-ol">
              KAYIT OL
            </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="ten wide column img tablet computer only">
        <img src={images.register} alt="giriş yap" loading="lazy" />
      </div>
    </div>
  )
}

export default ResetPassword
