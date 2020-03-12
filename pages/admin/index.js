import React, { useRef } from 'react'
import Layout from '../../components/admin/layout'
import images from '../../public/images/image'
import Axios from 'axios'
import config from '../../config'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import cogoToast from 'cogo-toast'

function HomePage() {
  const gelinAdi = useRef(),
    damatAdi = useRef(),
    gelinBio = useRef(),
    damatBio = useRef()

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  const uploadImage = e => {
    const formData = new FormData()
    formData.append('gelinFoto', e.target.files[0])
    Axios.post(
      `http://${config.apiURL}${config.version}gelin/${userid}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
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
      `http://${config.apiURL}${config.version}damat/${userid}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
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
    Axios.post(`http://${config.apiURL}${config.version}kisisel`, {
      gelinAdi: gelinAdi.current.value,
      damatAdi: damatBio.current.value,
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
                  <label htmlFor="exampleInputEmail1">Gelin İsmi : </label>
                  <dd>
                    <input
                      className="form-control"
                      id="gelinAdi"
                      name="gelinAdi"
                      placeholder="Gelin İsmi"
                      type="text"
                      ref={gelinAdi}
                      defaultValue="Leyla Bulut"
                    />
                  </dd>
                  <small id="emailHelp" className="form-text text-muted">
                    Gelinin ismini buraya giriniz.
                  </small>
                </div>
                <hr />
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">
                    Gelinin Fotoğrafı :{' '}
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
                    defaultValue={''}
                    ref={gelinBio}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Gelinin hakkında 20 kelimelik bilgi giriniz.
                  </small>
                </div>
              </li>
              <li className="col-xs-6 col-lg-6">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Damatın İsmi : </label>
                  <dd>
                    <input
                      className="form-control"
                      id="damatAdi"
                      name="damatAdi"
                      placeholder="Damat İsmi"
                      type="text"
                      defaultValue="Hasan Arslan"
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
                    Damatın Fotoğrafı :{' '}
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
                    defaultValue={''}
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
