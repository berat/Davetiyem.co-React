import React from 'react'
import images from '../../public/images/image'

const Bio = ({ kisisel, username }) => {
  return (
    <div id="bio">
      {kisisel.length != 0 ? (
        kisisel.map(item => (
          <div className="bio" key={item.kisiselid}>
            <div className="woman">
              <div className="ptext">
                <span className="pisim">
                  {item.gelinAdi != '' ? item.gelinAdi : 'Gelin Adı'}
                </span>
                <p className="hakkinda">
                  {item.gelinBio != ''
                    ? item.gelinBio
                    : 'Gelini tanıtan bir kaç cümle burada yer alacak. Lütfen yönetim panelinizden gerekli düzenlemeleri yapın.'}
                </p>
              </div>
              <div className="pimg">
                <img
                  src={
                    item.gelinFoto != null
                      ? `/uploads/users/${username}/profil/${item.gelinFoto}`
                      : images.user.gelinFoto
                  }
                  alt="gelin fotoğrafı"
                />
              </div>
            </div>
            <div className="porta">
              <span>&amp;</span>
            </div>
            <div className="man">
              <div className="pimg">
                <img
                  src={
                    item.damatFoto != null
                      ? `/uploads/users/${username}/profil/${item.damatFoto}`
                      : images.user.damatFoto
                  }
                  alt="damat fotoğrafı"
                />
              </div>
              <div className="ptext">
                <span className="pisim">
                  {item.damatAdi != '' ? item.damatAdi : 'Damat Adı'}
                </span>
                <p className="hakkinda">
                  {item.damatBio != ''
                    ? item.damatBio
                    : 'Damatı tanıtan bir kaç cümle burada yer alacak. Lütfen yönetim panelinizden gerekli düzenlemeleri yapın.'}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="bio">
          <div className="woman">
            <div className="ptext">
              <span className="pisim">Gelin Adı</span>
              <p className="hakkinda">
                Gelini tanıtan bir kaç cümle burada yer alacak. Lütfen yönetim
                panelinizden gerekli düzenlemeleri yapın.
              </p>
            </div>
            <div className="pimg">
              <img src={images.user.gelinFoto} alt="gelin fotoğrafı" />
            </div>
          </div>
          <div className="porta">
            <span>&amp;</span>
          </div>
          <div className="man">
            <div className="pimg">
              <img src={images.user.damatFoto} alt="damat fotoğrafı" />
            </div>
            <div className="ptext">
              <span className="pisim">Damat Adı</span>
              <p className="hakkinda">
                Damatı tanıtan bir kaç cümle burada yer alacak. Lütfen yönetim
                panelinizden gerekli düzenlemeleri yapın.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bio
