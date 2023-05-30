'use client'
import { YMaps, Map, GeolocationControl, ZoomControl, FullscreenControl, TrafficControl } from 'react-yandex-maps'

const Maps = () => {
  return (
    <YMaps>
      <div className="maps">
        <Map defaultState={{ center: [44.6696368577317,34.4130585133099], zoom: 20  }} width="100%" height="100%">
          <FullscreenControl options={{ float: 'left' }} />
          <GeolocationControl options={{ float: "left" }} />
          <TrafficControl options={{ float: 'right' }} />
          <ZoomControl options={{ float: "left" }} />
        </ Map>
      </div>
  </YMaps>
  )
}

export default Maps