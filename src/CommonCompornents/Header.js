import React, { useState } from 'react'
import "./Header.scss"

import { Link } from 'react-router-dom'

export const Header = () => {
  const [active,setActive] = useState(false);
  const classToggle = () =>{
    setActive(!active)
  }
  
  return (
    <header>
      <nav className={
          active ? "openMenu" 
        :
          ""
      } 
      onClick={classToggle}
      >
        <div className='menuBtn hum'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li><Link to="/main"><img src={`${process.env.PUBLIC_URL}/img/map.svg`} alt="マップ" /></Link></li>
          <li><Link to="/log"><img src={`${process.env.PUBLIC_URL}/img/log.svg`} alt="履歴"/></Link></li>
          <li><Link to="/QR"><img src={`${process.env.PUBLIC_URL}/img/QR.svg`} alt="QRコード読み取り" /></Link></li>
        </ul>
      </nav>

    </header>
  )
}


