import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Error from '../_error.js'
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
  const [error, setError] = useState(false)
  const router = useRouter()
  const { userid } = router.query

  useEffect(() => {
    userid &&
      Axios.get(`${config.apiURL}${config.version}uyeCek/${userid}`).then(
        response => {
          console.log(response.data)
          if (response.data.status == 202) {
            console.log('2')
            setPro(false)
            setLoad(true)
            setError(false)
          }
          if (response.data.status == 201) {
            setCheck(true)
            setCheckUserID(response.data.userid)
            setLoad(true)
          } else if (response.data.status == 404) {
            setError(true)
            setLoad(true)
          }
        }
      )
  }, [userid])

  if (error) return <Error />

  if (!load)
    return (
      <Preloader
        style={{ position: 'absolute', top: '45%', left: '50%' }}
        use={Puff}
        size={100}
        strokeWidth={6}
        strokeColor="#29D"
        duration={2000}
      />
    )

  if (!pro)
    return (
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 23,
          paddingTop: 20
        }}
      >
        Yönetim paneline gidin ve ödemenizi yapıp kullanmaya kaldığınız yerden
        devam edin.
      </h2>
    )

  return <Layout userid={checkUserID}></Layout>
}

export default HomePage
