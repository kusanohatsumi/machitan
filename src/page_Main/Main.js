import React from 'react'
import "./Main.scss";
import { Header } from "../CommonCompornents/Header";
import { Map } from '../components/Map';
import { Detail } from '../components/Detail';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
        <Header />
        <div id='label' className='label'>
        <Link to="/course">
          <figure>
            <img src={`${process.env.PUBLIC_URL}/img/arrow.svg`} alt='戻る'/>
          </figure>
          </Link>
          <p>コース</p>
        </div>
        <Map />
        <Detail />
    </div>
  )
}
