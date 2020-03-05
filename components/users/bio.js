import images from '../../public/images/image'

function Bio() {
  return (
    <div id="bio">
      <div className="bio">
        <div className="woman">
          <div className="ptext">
            <span className="pisim">Leyla Bulut</span>
            <p className="hakkinda">
              Gelini tanıtan bir kaç cümle burada yer alacak. Lütfen yönetim
              panelinizden gerekli düzenlemeleri yapın.
            </p>
          </div>
          <div className="pimg">
            <img src={images.user.gelinFoto} alt="" />
          </div>
        </div>
        <div className="porta">&amp;</div>
        <div className="man">
          <div className="pimg">
            <img src={images.user.damatFoto} alt="" />
          </div>
          <div className="ptext">
            <span className="pisim">Hasan Arslan</span>
            <p className="hakkinda">
              Damatı tanıtan bir kaç cümle burada yer alacak. Lütfen yönetim
              panelinizden gerekli düzenlemeleri yapın.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
