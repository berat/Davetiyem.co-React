import React, { useRef, useState, useEffect } from 'react'
import Layout from '../../components/admin/layout'
import images from '../../public/images/image'
import Axios from 'axios'
import config from '../../config'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import cogoToast from 'cogo-toast'

const Album = () => {
  const [dizi, setDizi] = useState()
  const [preview, setPreview] = useState([])
  const [username, setUsername] = useState()

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useState(() => {
    Axios.get(`http://${config.apiURL}${config.version}galeri/${userid}`).then(
      response => {
        console.log(response.data)
        if (response.data.status == 201) {
          setPreview(response.data.photos)
          setUsername(response.data.username)
          setDizi(response.data.fotos)
        }
      }
    )
  }, [setDizi, userid])

  const uploadAlbum = e => {
    const formData = new FormData()
    for (var i = 0; i < e.target.files.length; i++) {
      formData.append('album', e.target.files[i])
    }
    Axios.post(
      `http://${config.apiURL}${config.version}galeriYukle/${userid}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
      if (response.data.status == 201) {
        setPreview(response.data.filename)
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
          <form
            method="post"
            onSubmit={onSubmit}
            className="col-12"
            encType="multipart/form-data"
          >
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
              {preview != undefined
                ? preview.map(item => (
                    <div className="preview">
                      <img
                        className="uploadImg"
                        src={`/uploads/users/${username}/${item.foto}`}
                      /> {console.log(item)}
                      <div
                        className="kaldir"
                        onClick={() => {
                          console.log('yakında kaldırılacak')
                        }}
                      >
                        <i className="fa fa-times" />
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
            />
            <button type="submit" className="btn form-control btn-default">
              Kaydet
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Album
