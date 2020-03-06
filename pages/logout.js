import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import Router from 'next/router'

const Logout = () => {
  console.log(Cookies.get('login'))

  useEffect(() => {
    if (Cookies.get('login')) {
      Cookies.remove('login')
      Router.push('/')
    } else {
      Router.push('/login')
    }
  }, [Cookies.get('login')])
  return <div>"gelloe"</div>
}

export default Logout
