import Link from 'next/link'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/admin">
        <a className="navbar-brand">
          <i className="fa fa-home" />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link href="/admin/kisiselBilgiler">
              <a className="nav-link">
                <i className="fa fa-user" />
                Kişisel Bilgiler
              </a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/admin/dugunBilgileri">
              <a className="nav-link">
                <i className="fa fa-bookmark" />
                Düğün Bilgileri
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/fotografAlbumu">
              <a className="nav-link">
                <i className="fa fa-image" />
                Fotoğraf Albümü
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/dostYorumlari">
              <a className="nav-link">
                <i className="fa fa-comment" />
                Dost Yorumları
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/genelBilgiler">
              <a className="nav-link">
                <i className="fa fa-cog" />
                Genel Bilgiler
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/admin/hesapBilgileri">
              <a className="nav-link">
                <i className="fa fa-at" />
                Hesap Bilgileri
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
