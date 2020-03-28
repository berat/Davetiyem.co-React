import React, { useState, useEffect } from 'react'
import Layout from '../../components/admin/layout'
import images from '../../public/images/image'
import Axios from 'axios'
import config from '../../config'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import cogoToast from 'cogo-toast'
import Router from 'next/router'

const Album = () => {
  const [dizi, setDizi] = useState()
  const [preview, setPreview] = useState([])
  const [username, setUsername] = useState()
  const [uploaded, setUploaded] = useState()
  const [say, setSay] = useState(0)

  var Iuploaded = []

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useEffect(() => {
    userid == null ? Router.replace(config.loginPage) : null

    Axios.get(`${config.apiURL}${config.version}galeri/${userid}`).then(
      response => {
        if (response.data.status == 201) {
          setPreview(response.data.photos)
          setUsername(response.data.username)
          setDizi(response.data.fotos)
        } else {
          setUsername(response.data.username)
        }
      }
    )
  }, [ userid, setDizi])

  const uploadAlbum = e => {
    if (preview.length + e.target.files.length + say <= 8) {
      const formData = new FormData()
      for (var i = 0; i < e.target.files.length; i++) {
        formData.append('album', e.target.files[i])
      }
      Axios.post(
        `${config.apiURL}${config.version}galeriYukle/${userid}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(response => {
        if (response.data.status == 201) {
          setUploaded(response.data.filename)
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
    } else {
      cogoToast.error('En fazla 8 adet fotoğraf yükleyebilirsiniz.', {
        onClick: e => {
          e.target.parentNode.parentNode.style.display = 'none'
        },
        position: 'top-left'
      })
    }
  }

  const deleteImg = e => {
    Axios.post(`${config.apiURL}${config.version}tekResimSil`, {
      fotoid: e,
      userid: userid
    }).then(response => {
      if (response.data.status == 201) {
        setSay(say - 1)
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

  const removePreview = e => {
    var element = e.target.parentNode.parentNode
    element.parentNode.removeChild(element)
  }

  const reset = e => {
    e.preventDefault()
    if (preview != null ? preview.length : null + uploaded.length != 0) {
      Axios.post(`${config.apiURL}${config.version}topluSil`, {
        userid: userid
      }).then(response => {
        if (response.data.status == 201) {
          setPreview([])
          Iuploaded = []
          setUploaded(Iuploaded)
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
    } else {
      cogoToast.success('Tüm fotoğraflarınız zaten kaldırıldı.', {
        onClick: e => {
          e.target.parentNode.parentNode.style.display = 'none'
        },
        position: 'top-left'
      })
    }
  }

  return (
    <Layout>
      <div className="content row">
        <div className="bilgi col-12">
          <span>
            Fotoğraf albümünüzü buradan yükleyebilirsiniz. (En fazla 8 fotoğraf)
          </span>
        </div>
        <div className="icerik col-12">
          <form method="post" className="col-12" encType="multipart/form-data">
            <div className="aupload">
              <img src={images.upload} className="uploadImage" alt="" />
              <input
                accept=".png,.jpg,.jpeg"
                id="files"
                multiple
                name="files"
                type="file"
                onChange={uploadAlbum}
              />
              {uploaded != null
                ? uploaded.map(item => (
                    <div className="preview">
                      <img className="uploadImg" src={item.filename} />
                      <div
                        className="kaldir"
                        onClick={() => {
                          deleteImg(
                            item.fotoid != undefined
                              ? item.fotoid
                              : item.filename
                          )
                        }}
                      >
                        <i
                          key={item.fotoid}
                          onClick={removePreview}
                          className="fa fa-times"
                        />
                      </div>
                    </div>
                  ))
                : preview != null
                ? preview.map(item => (
                    <div className="preview">
                      <img
                        className="uploadImg"
                        src={`/uploads/users/${username}/${item.foto}`}
                      />
                      <div
                        className="kaldir"
                        onClick={() => {
                          deleteImg(item.fotoid)
                        }}
                      >
                        <i
                          key={item.fotoid}
                          onClick={removePreview}
                          className="fa fa-times"
                        />
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <input
              type="reset"
              id="remv"
              className="form-control btn btn-danger remove"
              style={{ marginBottom: '20px' }}
              defaultValue="Hepsini Sil"
              onClick={reset}
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Album
