import React from 'react'
import { Link } from "react-router-dom";
import '../scss/Start.scss';

export const Start = () => {
  return (
    <div className='startApp'>
      <figure>
        <img/>
      </figure>
      <h1>まちたん</h1>
      <div className='btn'>
        <Link to="/Course">始める</Link>
      </div>
    </div>
  )
}

export default Start;
