import React from 'react'
import { GoogleMap, Marker, Polygon, useLoadScript } from '@react-google-maps/api'
import { Alert, Spin } from 'antd'

const containerStyle = {
  width: '100%',
  height: '500px',
}

const center = {
  lat: parseFloat(process.env.NEXT_PUBLIC_LONG),
  lng: parseFloat(process.env.NEXT_PUBLIC_LAT),
}

// Limites
// https://www.latlong.net/
// https://react-google-maps-api-docs.netlify.app/
const paths = [
  { lat: 42.858926, lng: -2.724246 },
  { lat: 42.87654, lng: -2.638358 },
  { lat: 42.834688, lng: -2.634913 },
  { lat: 42.83066, lng: -2.712556 },
]

// Limites styles
const options = {
  fillColor: 'lightblue',
  fillOpacity: 0.4,
  strokeColor: 'lightblue',
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
}

const MapCustom = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_API_KEY,
    // ...otherOptions
  })

  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Polygon paths={paths} options={options} />
        <Marker position={center} visible />
      </GoogleMap>
    )
  }

  if (loadError) {
    return <Alert message="Error" description="Map cannot be loaded right now, sorry." type="error" showIcon />
  }
  return isLoaded ? renderMap() : <Spin size="large" />
}

export default React.memo(MapCustom)
