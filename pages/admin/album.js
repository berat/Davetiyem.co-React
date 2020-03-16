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

  const userid =
    Cookies.get('login') != undefined
      ? jwtDecode(Cookies.get('login')).userid
      : null

  useState(() => {
    Axios.get(`http://${config.apiURL}${config.version}galeri/${userid}`).then(
      response => {
        console.log(response.data)
        if (response.data.status == 201) {
          setDizi(response.data.fotos)
        }
      }
    )
  }, [setDizi, userid])

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
              />
              <div className="preview">
                <img
                  className="uploadImg"
                  src="/static/uploads/damatgelin/galeri1"
                  title="undefined"
                />
                <div
                  className="kaldir"
                  onClick={() => {
                    console.log('yakında kaldırılacak')
                  }}
                >
                  <i className="fa fa-times" />
                </div>
              </div>
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
