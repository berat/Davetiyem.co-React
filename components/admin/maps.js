import React, { useState, useRef, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import '../../assets/admin/mapbox-gl.css'
import '../../assets/admin/mapbox-gl-geocoder.css'
import images from '../../public/images/image'

let Geocoder

if (typeof window !== 'undefined') {
  Geocoder = require('react-map-gl-geocoder').default
}

const mapAccess = {
  mapboxApiAccessToken:
    'pk.xxxxxx.xxxxx-xxxxx'
}

const mapStyle = {
  width: '100%',
  height: '250px'
}

function MainMap({ children, degerler, ...props }) {
  const mapRef = useRef()
  const [getViewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 39.86667,
    longitude: 32.86667,
    zoom: 6
  })

  const [searchLocation, setSearchLocation] = useState({})

  React.useEffect(() => {
    var a = Object.keys({ id: null }).length
    if (degerler !== undefined) {
      a = Object.keys(degerler).length
    }
    a === 2 && getLocation(degerler)
  }, [degerler])

  const getLocation = deger => {
    let newViewport = {
      width: '100vw',
      height: '100vh',
      latitude: deger.lat,
      longitude: deger.long,
      zoom: 15
    }
    setViewport(newViewport)
  }

  const onSelected = item => {
    getLocation(item.center[1], item.center[0])
  }

  return (
    <div>
      <ReactMapGL
        {...mapAccess}
        {...getViewport}
        {...mapStyle}
        ref={mapRef}
        attributionControl={false}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={newViewport => setViewport(newViewport)}
      >
        {Object.keys(degerler !== undefined ? degerler : searchLocation)
          .length !== 0 && (
          <Marker
            offsetTop={-30}
            offsetLeft={-15}
            latitude={degerler.lat}
            longitude={degerler.long}
          >
            <img width="30" height="30" src={images.marker} />
          </Marker>
        )}
        <Geocoder
          mapRef={mapRef}
          {...mapAccess}
          viewport={getViewport}
          onClear={() => {
            setViewport({
              width: '100vw',
              height: '100vh',
              latitude: 39.86667,
              longitude: 32.86667,
              zoom: 6
            })
            setSearchLocation({})
          }}
          position="top-left"
          {...props}
        />
      </ReactMapGL>
    </div>
  )
}

export default MainMap
