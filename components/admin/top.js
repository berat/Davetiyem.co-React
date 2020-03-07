import Link from 'next/link'

import images from '../../public/images/image'

const Top = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="siteyiGoruntule col-lg-3 col-sm-12 col-md-12">
        <Link href="/damatgelin">
          <a className="form-control">Davetiyeyi Görüntüle</a>
        </Link>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 logo">
        <Link href="/admin">
          <a>
            <img src={images.adminLogo} alt="" />
          </a>
        </Link>
      </div>
      <div className="cikisYap col-lg-3 col-sm-12 col-md-12">
        <Link href="/cikis">
          <a className="form-control">Çıkış Yap</a>
        </Link>
      </div>
    </div>
  )
}

export default Top;