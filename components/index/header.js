import Link from 'next/link'

import Navigation from './navigation'
import images from '../../assets/image'

function Header() {
  return (
    <header>
      <div id="header">
        <div className="header">
          <div className="logo">
            <Link href="/">
              <a>
                <img src={images.logo} />
              </a>
            </Link>
          </div>
          <div className="menu">
            <Navigation />
          </div>
        </div>
        <div className="slider animated fadeIn">
          <div className="sorta">
            <h1>
              Yaşantınızın her gününde bugünü hatırlatacak Dijital Davetiye
            </h1>
            <div className="buton demo-incele">
              <Link href="/katil">
                <a>Dijital Davetiyeni Hemen Oluştur</a>
              </Link>
            </div>
            <p>Tamamen Ücretsizdir.</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
