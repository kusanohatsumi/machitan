import React from 'react'
import "./Map.scss";
import { MapContainer, TileLayer, } from 'react-leaflet'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

export const Map = () => {
  const position = [35.3000617, 135.4393941]
  // マークのposition
  const plase1 = [35.2704646, 135.3734734]



  // マップのスタイル
  const MapContainerStyle = {
    width: "100vw",
    height: "94vh",
    position:"absolute",
    bottom:"0px",
    zIndex:"1",

  };  // ズーム倍率
  const zoom = 11;
  return (
    <div className='map'>
      <div id='label' className='label'>
        <Link to="/course">
          <figure>
            <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt='戻る'/>
          </figure>
        </Link>
        <p>旅館コース</p>
      </div>

      <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={MapContainerStyle}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          かやぶきの里
          <a>https://miyamanavi.com/sightseeing/kayabuki-no-sato</a>
        </Popup>
      </Marker>
      <Marker position={plase1}>
        <Popup>
          美山虹之湖(美山虹の湖)
        </Popup>
      </Marker>
      </MapContainer>
    </div>
  )
}
