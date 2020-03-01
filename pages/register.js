import Link from 'next/link'
import images from '../public/images/image'

function Register() {
  return (
    <div id="column" className="ui grid doubling two column row">
      <div className="six wide column forms">
        <div className="formCenter">
          <h1>ARAMIZA KATIL</h1>
          <span>Davetiyenizi oluşturmak için hemen aramıza katıl</span>
          <div className="form">
            <div className="ui labeled input">
              <div className="ui label label">davetiyem.co/</div>
              <input
                placeholder="Kullanıcı adınız"
                minLength={4}
                maxLength={15}
                pattern="^[a-zA-Z0-9]+$"
                oninvalid="this.setCustomValidity('İzin verilmeyen karakter kullanıldı. öçşiğü+%&*/ gibi karakter kullanılmaz.')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div className="ui input">
              <input type="email" placeholder="E-mail adresiniz" />
            </div>
            <div className="ui input">
              <input type="password" placeholder="Parola" />
            </div>
            <div className="ui input">
              <input type="password" placeholder="Parolayı doğrulayın" />
            </div>
            <button className="ui blue button">KAYIT OL</button>
            <small>
              <Link href="/sifremi-sifirla"><a>Parolanı mı unuttun? Hemen sıfırla.</a></Link>
            </small>
            <div className="ui horizontal divider">Ya da</div>
            <Link href="/giris">
                <a className="ui red button small basic kayit-ol">
              GİRİŞ YAP
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

export default Register
