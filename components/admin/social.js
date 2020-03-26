import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import config from '../../config'
import Axios from 'axios'
import Router from 'next/link'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const Social = () => {
  const [username, setUsername] = useState()

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useEffect(() => {
    userid == null ? Router.replace(config.loginPage) : null

    Axios.get(`http://${config.apiURL}${config.version}galeri/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setUsername(response.data.username)
        }
      }
    )
  }, [userid, setUsername])
  return (
    <div className="socialMedia">
      <ul>
        <li className="whatsapp">
          <Link
            href={`whatsapp://send?abid=&text=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/${username} adresine gidebilirsiniz. Bekliyoruz 	😊`}
            prefetch={false}
          >
            <a target="_blank">
              <i className="fab fa-whatsapp" />
            </a>
          </Link>
        </li>
        <li className="sms">
          <Link
            href={`sms:?body=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/${username} adresine gidebilirsiniz. Bekliyoruz 	😊`}
            prefetch={false}
          >
            <a target="_blank">
              <i className="fas fa-sms" />
            </a>
          </Link>
        </li>
        <li className="facebook">
          <Link
            href={`http://www.facebook.com/sharer/sharer.php?u=http://davetiyem.co/${username}`}
            prefetch={false}
          >
            <a target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </Link>
        </li>
        <li className="mail">
          <Link
            href={`mailto:?subject=Evleniyoruz, Düğünümüze Davetleisiniz?&body=Merhaba, yakın zamanda evleniyoruz. 🎉 Sizi de aramızda görmek isteriz. Davetiyemizi online olarak ulaşmak için : http://davetiyem.co/${username} adresine gidebilirsiniz. Bekliyoruz 	😊`}
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
