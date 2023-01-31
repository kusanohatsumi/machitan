import React, { useRef } from 'react'
import "./Detail.scss";


export const Detail = () => {
    const element = `
    <li>コンテンツ１</li>
    <li>コンテンツ２</li>
    <li>コンテンツ３</li>
    <li>コンテンツ４</li>
    <li>コンテンツ５</li>
    <li>コンテンツ６</li>
  `;
  const setElem = useRef();

  function drag(){
    console.log("move");

    }

  return (
      <div className='detail' ref={setElem} onMouseDown={drag}>
          <div className='handle'>
              <div></div>
          </div>
          <ul>

          </ul>
      </div>
  )
}
