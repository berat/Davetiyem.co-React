import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import config from '../config'
import Router from 'next/router'

// Burası en son kalkacaktır.

const Logout = () => {
  useEffect(() => {
    if (Cookies.get('login')) {
      Cookies.remove('login')
      Router.replace(config.home)
    } else {
      Router.replace(config.loginPage)
    }
  }, [Cookies.get('login')])
  return
}

export default Logout
