import Link from 'next/link'
import images from '../public/images/image'

function Login() {
  return (
    <div id="column" className="ui grid doubling two column row">
      <div className="six wide column forms">
        <div className="formCenter">
          <h1>HOŞGELDİN</h1>
          <span>Davetiyenizi güncelemek için lütfen yeniden giriş yapın</span>
          <div className="form">
            <div className="ui labeled input">
              <div className="ui label label">davetiyem.co/</div>
              <input placeholder="damatgelin" />
            </div>
            <div className="ui input">
              <input type="password" placeholder="Parola" />
            </div>
            <button className="ui blue button">GİRİŞ YAP</button>
            <small>
              <Link href="/sifremi-sifirla">
                <a>Parolanı mı unuttun? Hemen sıfırla.</a>
              </Link>
            </small>
            <div className="ui horizontal divider">Ya da</div>
            <Link href="/katil">
              <a className="ui red button small basic kayit-ol">KAYIT OL</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="ten wide column img tablet computer only">
        <img src={images.login} alt="giriş yap" loading="lazy"/>
      </div>
    </div>
  )
}

export default Login
