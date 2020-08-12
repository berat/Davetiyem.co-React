function Body() {
  return (
    <div id="body" className="animated fadeIn">
      <div id="hakkinda">
        <div className="bolum hakkinda">
          <div className="baslik">Dijital Davetiye Hakkında</div>
          <div className="acikla">
            <p>
              Oluşturacağınız Dijital davetiye sayesinde zaman kaybı olmadan
              hızlı bir şekilde oluşturup sevdiklerinize ulaştırabilir ve kağıt
              tüketimini sınırlandırarak doğaya katkıda bulunabilirsiniz.
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
              <p>
                Organizasyonun gerçekleşeceği konumu gösterip kolay ulaşım
                imkanı
              </p>
            </li>
            <li>
              <div className="hizmet-icon">
                <i className="fa fa-camera" />
              </div>
              <span>GALERİ</span>
              <p>
                Paylaşmak istediğiniz fotoğraflarınızı davetiyenizde kolayca yer
                verebilirsiniz.
              </p>
            </li>
            <li>
              <div className="hizmet-icon">
                <i className="fa fa-comments" />
              </div>
              <span>YORUMLAR</span>
              <p>
                Sevdiklerinizin yorumlarını davetiyenizde kolaylıkla
                gösterebilirsiniz.
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
