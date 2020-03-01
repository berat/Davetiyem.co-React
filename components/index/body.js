function Body() {
  return (
    <div id="body" className="animated fadeIn">
      <div id="hakkinda">
        <div className="bolum hakkinda">
          <div className="baslik">Dijital Davetiye Hakkında</div>
          <div className="acikla">
            <p>
              Oluşturacağınız Dijital davetiye sayesinde kapı kapı dolaşmak
              zorunda kalmadan hızlı bir şekilde oluşturup sevdiklerinize
              ulaştırabilir ve kağıt tüketimini sınırlandırarak doğaya bir
              iyilik yapabilirsiniz.
            </p>
          </div>
        </div>
        <div id="hizmetler" className="hizmetler">
          <ul>
            <li>
              <div className="hizmet-icon">
                <i className="fa fa-map" />
              </div>
              <span>KONUM</span>
              <p>Düğünün gerçekleşeceği konumu gösterip kolay ulaşım imkanı</p>
            </li>
            <li>
              <div className="hizmet-icon">
                <i className="fa fa-camera" />
              </div>
              <span>GALERİ</span>
              <p>İstediğiniz fotoğraflarınızı davetiyenizde yayınlama imkanı</p>
            </li>
            <li>
              <div className="hizmet-icon">
                <i className="fa fa-comments" />
              </div>
              <span>YORUMLAR</span>
              <p>
                Arkadaşlarınızın yorumlarının olduğu, davetlilerin yorum
                yapabilme imkanı
              </p>
            </li>
            <li>
              <div className="hizmet-icon">
                <i className="fa fa-thumbs-up" />
              </div>
              <span>ERİŞİM</span>
              <p>
                İnternetin olduğu her yerden, her zaman davetiyenize erişme
                imkanı
              </p>
            </li>
          </ul>
          <div className="temizle" />
        </div>
      </div>
    </div>
  )
}

export default Body
