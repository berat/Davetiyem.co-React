import Link from 'next/link'

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>ANASAYFA</a>
        </Link>
      </li>
      <li>
        <Link href="#hakkinda">
          <a>HAKKINDA</a>
        </Link>
      </li>
      <li>
        <Link href="#hizmetler">
          <a>HİZMETLER</a>
        </Link>
      </li>
      <li>
        <Link href="https://blog.davetiyem.co/" prefetch={false}>
          <a>BLOG</a>
        </Link>
      </li>
      <li>
        <Link href="/damatgelin">
          <a>DEMO</a>
        </Link>
      </li>
      <li>
        <Link href="#iletisim">
          <a>İLETİŞİM</a>
        </Link>
      </li>

      <li className="yaktif">
        <Link href="/giris">
          <a>GİRİŞ YAP</a>
        </Link>
      </li>
      <li className="aktif">
        <Link href="/katil">
          <a>OLUŞTUR</a>
        </Link>
      </li>
      <li className="yaktif">
        <Link href="/cikis">
          <a>ÇIKIŞ YAP</a>
        </Link>
      </li>
      <li className="aktif">
        <Link href="/admin">
          <a>YÖNETİM</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
