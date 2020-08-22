import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Preloader, ThreeDots } from 'react-preloader-icon'

export default function Blogs() {
  const [data, setData] = useState(null)
  const [load, setLoad] = useState(true)

  const getData = () => {
    Axios.get(
      'https://blog.davetiyem.co/wp-json/wp/v2/posts?categories=2,5,8'
    ).then(response => {
      setData(response.data.slice(0, 3))
      setLoad(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  if (load)
    return (
      <div id="blogs">
        <Preloader
          use={ThreeDots}
          size={60}
          strokeWidth={6}
          strokeColor="#262626"
          duration={2000}
        />
      </div>
    )

  return (
    <div id="blogs">
      <h2>Blog</h2>
      <ul>
        {data.map(item => (
          <li key="item.id">
            <a href={item.link} target="_blank">
              <img
                src={item.jetpack_featured_media_url}
                alt={item.title.rendered}
              />
              <h3>{item.title.rendered}</h3>
              <p>{item.excerpt.rendered.substring(3, 230)}...</p>
            </a>
          </li>
        ))}
      </ul>
      <button>Daha Fazla İçeriğe Gözat</button>
    </div>
  )
}
