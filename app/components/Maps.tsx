'use client'

import { useEffect } from "react";
import ymaps from 'ymaps';

const Maps = () => {
  useEffect(() => {
    ymaps.ready(() => {
      const myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
      });
    });
  }, []);
  return (
    <div id="map" style={{width: "600px", height: "400px"}}></div>
  )
}

export default Maps