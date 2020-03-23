import react, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import config from '../../config'
import Axios from 'axios'
import Layout from '../../components/users/layout'
import Hata from '../404'

import '../../assets/reset.css'
import '../../assets/users/style.css'
import '../../assets/users/responsive.css'

const HomePage = () => {
  const [check, setCheck] = useState(false)
  const [checkUserID, setCheckUserID] = useState([])
  const router = useRouter()
  const { userid } = router.query

  useEffect(() => {
    Axios.get(`http://${config.apiURL}${config.version}uyeCek/${userid}`).then(
      response => {
        console.log(response.data)
        if (response.data.status == 201) {
          setCheck(true)
          setCheckUserID(response.data.userid)
        }
      }
    )
  }, [userid])
  console.log(checkUserID)
  return check != false ? <Layout userid={checkUserID}></Layout> : <Hata></Hata>
}

export default HomePage
