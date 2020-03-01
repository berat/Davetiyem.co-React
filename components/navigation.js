import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Ana sayfa</a>
      </Link>
      <Link href="/about">
        <a>Hakkımda</a>
      </Link>
    </nav>
  )
}

export default Navigation
