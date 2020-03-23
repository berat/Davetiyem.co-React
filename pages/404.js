import React from 'react'
import Link from 'next/link'

import '../assets/index/style.css'

const Login = () => {

  return (
    <div id="notfound">
    <div className="notfound">
        <div className="notfound-404">
            <h1>4<span>0</span>4</h1>
        </div>
        <h2>Ulaşmak istediğiniz sayfayı yanlış girmiş olabilirsin.</h2>
        <div className="notfound-search">
            <Link href="/"><a>ANASAYFAYA DÖN</a></Link>
        </div>
    </div>
</div>
  )
}

export default Login
