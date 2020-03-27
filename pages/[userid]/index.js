import react, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Error from '../_error.js'

import config from '../../config'
import Axios from 'axios'
import Layout from '../../components/users/layout'

import '../../assets/reset.css'
import '../../assets/users/style.css'
import '../../assets/users/responsive.css'

const HomePage = () => {
  const [check, setCheck] = useState(false)
  const [checkUserID, setCheckUserID] = useState([])
  const [load, setLoad] = useState(false)
  const router = useRouter()
  const { userid } = router.query

  useEffect(() => {
    Axios.get(`https://${config.apiURL}${config.version}uyeCek/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setCheck(true)
          setLoad(true)
          setCheckUserID(response.data.userid)
        }
      }
    )
  }, [userid, setCheck, setCheckUserID, setLoad])
  return load == true ? (
    check != false ? (
      <Layout userid={checkUserID}></Layout>
    ) : (
      // <Error />
      "dewf"
    )
  ) : 
  <Error  />
}

export default HomePage
