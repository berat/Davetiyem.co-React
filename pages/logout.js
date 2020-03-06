import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import config from '../config'
import Router from 'next/router'

// Burası en son kalkacaktır.

const Logout = () => {
  console.log(Cookies.get('login'))

  useEffect(() => {
    if (Cookies.get('login')) {
      Cookies.remove('login')
      Router.push(config.home)
    } else {
      Router.push(config.loginPage)
    }
  }, [Cookies.get('login')])
  return <div>"gelloe"</div>
}

export default Logout
