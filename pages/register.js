import React from 'react'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

import images from '../public/images/image'

import "../assets/normalize.css"
import "../assets/auth/semantic.min.css"
import "../assets/auth/auth.css"

function Register() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }
  console.log(register)

  return (
    <div id="column" className="ui grid doubling two column row">
      <div className="six wide column forms">
        <div className="formCenter">
          <h1>ARAMIZA KATIL</h1>
          <span>Davetiyenizi oluşturmak için hemen aramıza katıl</span>
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="ui labeled input">
                <div className="ui label label">davetiyem.co/</div>
                <input
                  placeholder="Kullanıcı adınız"
                  minLength={4}
                  maxLength={15}
                  ref={register({ required: true, pattern: /^[a-zA-Z0-9]+$/i })}
                />
              </div>
              <div className="ui input">
                <input
                  type="email"
                  placeholder="E-mail adresiniz"
                  ref={register({ required: true })}
                />
              </div>
              <div className="ui input">
                <input
                  type="password"
                  placeholder="Parola"
                  ref={register({ required: true })}
                />
              </div>
              <div className="ui input">
                <input
                  type="password"
                  placeholder="Parolayı doğrulayın"
                  ref={register({ required: true })}
                />
              </div>
              <button type="submit" className="ui blue button">
                KAYIT OL
              </button>
            </form>
            <small>
              <Link href="/sifremi-sifirla">
                <a>Parolanı mı unuttun? Hemen sıfırla.</a>
              </Link>
            </small>
            <div className="ui horizontal divider">Ya da</div>
            <Link href="/giris">
              <a className="ui red button small basic kayit-ol">GİRİŞ YAP</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="ten wide column img tablet computer only">
        <img src={images.register} alt="giriş yap" loading="lazy" />
      </div>
    </div>
  )
}

export default Register
