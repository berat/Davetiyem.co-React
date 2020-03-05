function Days() {
  return (
    <div id="gunler">
      <div className="gunler">
        <ul>
          <li>
            <div className="gbaslik">
              <span>Kına Gecesi</span>
            </div>
            <div className="gust">
              <div className="gtarih">
                <span>20 TEMMUZ</span>
                <i>2019</i>
              </div>
              <div className="gadres">
                <p>Şentepe Mahallesi, Atasoy Cd. No:18, 06900 Polatlı/Ankara</p>
              </div>
            </div>
            <div className="temizle" />
            <div className="gmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8127.620741171537!2d32.13232713492433!3d39.56319856398057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe67a0e1b4e75ad1a!2zTWsgRMO8xJ_DvG4gVmUgVG9wbGFudMSxIFNhbG9udQ!5e0!3m2!1str!2str!4v1547663814910"
                width={600}
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </li>
          <li>
            <div className="gbaslik">
              <span>Düğün Gecesi</span>
            </div>
            <div className="gust">
              <div className="gtarih">
                <span>20 AGUSTOS</span>
                <i>2019</i>
              </div>
              <div className="gadres">
                <p>Gülveren Mahallesi, Gençlik Cd., 06900 Polatlı/Ankara</p>
              </div>
            </div>
            <div className="temizle" />
            <div className="gmap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6881.475340003867!2d32.12912850771315!3d39.56873568692161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50b0ca69793c9c65!2zxLBraSBBbHlhbnMgRMO8xJ_DvG4gU2Fsb25sYXLEsQ!5e0!3m2!1str!2str!4v1547665856765"
                width={600}
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </li>
        </ul>
        <div className="not">
          <p />
          <p>
            <strong>ERKEK EVİ :&nbsp;</strong>Şentepe Mahallesi, Atasoy Cd.
            No:18, 06900 Polatlı/Ankara
          </p>
          <p>
            <strong>KIZ EVİ :</strong>&nbsp;Gülveren Mahallesi, Gençlik Cd.,
            06900 Polatlı/Ankara
          </p>
          <p />
        </div>
      </div>
    </div>
  )
}

export default Days
