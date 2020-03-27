import React, { useRef, useState, useEffect } from 'react'
import Layout from '../../components/admin/layout'
import images from '../../public/images/image'
import Axios from 'axios'
import config from '../../config'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import Router from 'next/router'
import cogoToast from 'cogo-toast'

function HomePage() {
  const [bilgi, setBilgi] = useState()
  const [gelinPreview, setGelinPreview] = useState()
  const [damatPreview, setDamatPreview] = useState()
  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useEffect(() => {
    userid == null ? Router.replace(config.loginPage) : null

    Axios.get(`https://${config.apiURL}${config.version}kisisel/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setBilgi(response.data.data)
          setGelinPreview(
            response.data.data[0].gelinFoto != null
              ? `/uploads/users/${response.data.username}/profil/${
                  response.data.data[0].gelinFoto != null
                    ? response.data.data[0].gelinFoto
                    : false
                }`
              : false
          )
          setDamatPreview(
            response.data.data[0].damatFoto != null
              ? `/uploads/users/${response.data.username}/profil/${
                  response.data.data[0].damatFoto != null
                    ? response.data.data[0].damatFoto
                    : false
                }`
              : false
          )
        }
      }
    )
  }, [userid, setBilgi])
  const gelinAdi = useRef(),
    damatAdi = useRef(),
    gelinBio = useRef(),
    damatBio = useRef()

  const uploadImage = e => {
    const formData = new FormData()
    formData.append('gelinFoto', e.target.files[0])
    Axios.post(
      `https://${config.apiURL}${config.version}gelin/${userid}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
      setGelinPreview(response.data.data.path.slice(9))
      if (response.data.status == 201) {
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      } else {
        cogoToast.error(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      }
    })
  }

  const uploadImageGroom = e => {
    const formData = new FormData()
    formData.append('damatFoto', e.target.files[0])
    Axios.post(
      `https://${config.apiURL}${config.version}damat/${userid}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
      setDamatPreview(response.data.data.path.slice(9))
      if (response.data.status == 201) {
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      } else {
        cogoToast.error(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      }
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    Axios.post(`https://${config.apiURL}${config.version}kisisel`, {
      gelinAdi: gelinAdi.current.value,
      damatAdi: damatAdi.current.value,
      gelinBio: gelinBio.current.value,
      damatBio: damatBio.current.value,
      userid: userid
    }).then(response => {
      if (response.data.status == 201) {
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      } else {
        cogoToast.error(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      }
    })
  }

  const remove = e => {
    Axios.post(`https://${config.apiURL}${config.version}fotoSil`, {
      who: e == 'damat' ? 'damatFoto' : 'gelinFoto',
      fileName: e == 'damat' ? damatPreview : gelinPreview,
      userid: userid
    }).then(response => {
      if (response.data.status == 201) {
        e == 'damat' ? setDamatPreview(false) : setGelinPreview(false)
        cogoToast.success(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      } else {
        cogoToast.error(response.data.msg, {
          onClick: e => {
            e.target.parentNode.parentNode.style.display = 'none'
          },
          position: 'top-left'
        })
      }
    })
  }
  return (
    <Layout>
      <div className="content row">
        <div className="bilgi col-12">
          <span>Kişisel bilgilerinizi buradan düzenleyebilirsiniz.</span>
        </div>
        <div className="icerik col-12">
          <form className="col-12" onSubmit={onSubmit}>
            <ul className="row">
              <li className="col-xs-6 col-lg-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Gelin Adı: </label>
                  <dd>
                    <input
                      className="form-control"
                      id="gelinAdi"
                      name="gelinAdi"
                      placeholder="Gelin Adı"
                      type="text"
                      ref={gelinAdi}
                      defaultValue={
                        bilgi != undefined ? bilgi[0].gelinAdi : null
                      }
                    />
                  </dd>
                  <small id="emailHelp" className="form-text text-muted">
                    Gelinin ismini buraya giriniz.
                  </small>
                </div>
                <hr />
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Gelinin Fotoğrafı :
                  </label>
                  <div className="upload">
                    <img src={images.upload} className="uploadImage" alt="" />
                    <dd>
                      <input
                        accept=".png,.jpg,.jpeg"
                        className="gdfoto"
                        id="gelinFoto"
                        name="gelinFoto"
                        type="file"
                        onChange={uploadImage}
                      />
                      {gelinPreview ? (
                        <div className="preview">
                          <img
                            className="uploadImg"
                            src={gelinPreview}
                            title=""
                          />
                          <span
                            className="remove"
                            onClick={() => {
                              remove('gelin')
                            }}
                          >
                            <i className="fa fa-times" />
                          </span>
                        </div>
                      ) : null}
                    </dd>
                  </div>
                  <small id="emailHelp" className="form-text text-muted">
                    Gelinin fotoğrafını yükleyiniz.
                  </small>
                </div>
                <hr />
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Gelin Hakkında :
                  </label>
                  <textarea
                    name="gelinBio"
                    className="form-control"
                    rows={3}
                    id="gelinBio"
                    placeholder="Gelin hakkında bilgi giriniz"
                    defaultValue={bilgi != undefined ? bilgi[0].gelinBio : null}
                    ref={gelinBio}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Gelinin hakkında 20 kelimelik bilgi giriniz.
                  </small>
                </div>
              </li>
              <li className="col-xs-6 col-lg-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Damatın Adı: </label>
                  <dd>
                    <input
                      className="form-control"
                      id="damatAdi"
                      name="damatAdi"
                      placeholder="Damatın Adı"
                      type="text"
                      defaultValue={
                        bilgi != undefined ? bilgi[0].damatAdi : null
                      }
                      ref={damatAdi}
                    />
                  </dd>
                  <small id="emailHelp" className="form-text text-muted">
                    Damatın ismini buraya giriniz.
                  </small>
                </div>
                <hr />
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Damatın Fotoğrafı :
                  </label>
                  <div className="upload">
                    <img src={images.upload} className="uploadImage" alt="" />
                    <dd>
                      <input
                        accept=".png,.jpg,.jpeg"
                        className="gdfoto"
                        id="damatFoto"
                        name="damatFoto"
                        type="file"
                        onChange={uploadImageGroom}
                      />
                      {damatPreview ? (
                        <div className="preview">
                          <img
                            className="uploadImg"
                            src={damatPreview}
                            title=""
                          />
                          <span
                            className="remove"
                            onClick={() => {
                              remove('damat')
                            }}
                          >
                            <i className="fa fa-times" />
                          </span>
                        </div>
                      ) : null}
                    </dd>
                  </div>
                  <small id="emailHelp" className="form-text text-muted">
                    Damatın fotoğrafını yükleyiniz.
                  </small>
                </div>
                <hr />
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Damatın Hakkında :
                  </label>
                  <textarea
                    name="damatBio"
                    className="form-control"
                    rows={3}
                    id="damatBio"
                    placeholder="Damat hakkında bilgi giriniz"
                    defaultValue={bilgi != undefined ? bilgi[0].damatBio : null}
                    ref={damatBio}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Damatın hakkında 20 kelimelik bilgi giriniz.
                  </small>
                </div>
              </li>
            </ul>
            <button type="submit" className="btn form-control btn-default">
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
