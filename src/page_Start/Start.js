import React from 'react'
import { Link } from "react-router-dom";
import './Start.scss';

export const Start = () => {
  return (
    <div className='startApp'>
      <figure className='logo'>
        <img alt="まちたん" src={`${process.env.PUBLIC_URL}/img/Logo.svg`}/>
      </figure>
      <div className='startBtn'>
        <Link to="/checking">始める</Link>
      </div>
    </div>
  )
}

export default Start;
