import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Error from '../_error.js'
import jwtDecode from 'jwt-decode'
import { Preloader, Puff } from 'react-preloader-icon'

import config from '../../config'
import Axios from 'axios'
import Layout from '../../components/users/layout'

import '../../assets/reset.css'
import '../../assets/users/style.css'
import '../../assets/users/responsive.css'

const HomePage = () => {
  const [check, setCheck] = useState(false)
  const [pro, setPro] = useState(true)
  const [checkUserID, setCheckUserID] = useState([])
  const [load, setLoad] = useState(false)
  const router = useRouter()
  const { userid } = router.query

  useEffect(() => {
    userid &&
      Axios.get(`${config.apiURL}${config.version}uyeCek/${userid}`).then(
        response => {
          if (response.data.status == 202) {
            setLoad(true)
            setPro(false)
          }
          if (response.data.status == 201) {
            setLoad(true)
            setCheck(true)
            setCheckUserID(response.data.userid)
          } else {
            setLoad(true)
          }
        }
      )
  }, [userid])
  return load == true ? (
    check != false ? (
      <Layout userid={checkUserID}></Layout>
    ) : !pro ? (
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 23,
          paddingTop: 20
        }}
      >
        Yönetim paneline gidin ve ödemenizi yapıp kullanmaya kaldığınız yerden devam edin.
      </h2>
    ) : (
      <Error />
    )
  ) : (
    <Preloader
      style={{ position: 'absolute', top: '45%', left: '50%' }}
      use={Puff}
      size={100}
      strokeWidth={6}
      strokeColor="#29D"
      duration={2000}
    />
  )
}

export default HomePage
