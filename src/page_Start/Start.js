import React from 'react'
import { Link } from "react-router-dom";
import './Start.scss';

export const Start = () => {
  return (
    <div className='startApp'>
      {/* <figure>
        <img alt="まちたん" src={`${process.env.PUBLIC_URL}/img/Logo.svg`}/>
      </figure> */}
      <h1>まちたん</h1>
      <div className='startBtn'>
        <Link to="/account">始める</Link>
      </div>
    </div>
  )
}

export default Start;
