import Link from 'next/link'

const Social = () => {
  return (
    <div className="socialMedia">
      <ul>
        <li className="whatsapp">
          <Link
            href="whatsapp://send?abid=&text=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/damatgelin adresine gidebilirsiniz. Bekliyoruz 	😊"
            prefetch={false}
          >
            <a target="_blank">
              <i className="fab fa-whatsapp" />
            </a>
          </Link>
        </li>
        <li className="sms">
          <Link
            href="sms:?body=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/damatgelin adresine gidebilirsiniz. Bekliyoruz 	😊"
            prefetch={false}
          >
            <a target="_blank">
              <i className="fas fa-sms" />
            </a>
          </Link>
        </li>
        <li className="facebook">
          <Link
            href="http://www.facebook.com/sharer/sharer.php?u=http://davetiyem.co/damatgelin"
            prefetch={false}
          >
            <a target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </Link>
        </li>
        <li className="mail">
          <Link
            href="mailto:?subject=Evleniyoruz, Düğünümüze Davetleisiniz?&body=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/ dddd adresine gidebilirsiniz. Bekliyoruz 	😊"
            prefetch={false}
          >
            <a target="_blank">
              <i className="fas fa-envelope" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Social
