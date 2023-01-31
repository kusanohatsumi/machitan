import React,{ useRef, useState }  from 'react'
import "./Main.scss";
import "./Detail.scss"
import { Header } from "../CommonCompornents/Header";
import { Map } from '../components/Map';
import { Link } from 'react-router-dom';


export const Main = () => {
    //   const element = `
  //   <li>コンテンツ１</li>
  //   <li>コンテンツ２</li>
  //   <li>コンテンツ３</li>
  //   <li>コンテンツ４</li>
  //   <li>コンテンツ５</li>
  //   <li>コンテンツ６</li>
  // `;

  return (
    
    <>
      <Header />
      {/* --- メイン --- */}
      
      <Map />
      <div className='detail'>
        <div className='handle'>
          <span></span>
        </div>
        <ul>
          {/* --- 詳細コンテンツを追加する --- */}
          {/* <li>コンテンツ１</li>
          <li>コンテンツ２</li>
          <li>コンテンツ３</li>
          <li>コンテンツ４</li>
          <li>コンテンツ５</li>
          <li>コンテンツ６</li> */}
        </ul>
    </div>
    </>
  )
}
