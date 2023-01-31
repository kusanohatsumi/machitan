import React from 'react'
import { Link } from 'react-router-dom'
import "./Course.scss"

export const Course = () => {
  return (
    <div className='course'>
      <div className='course__item'>
        <Link to="/main">
          旅館コース
        </Link>
      </div>

      <div className='course__item'>
        <Link to="/main">
          かやぶきコース
        </Link>
      </div>
      <div className='course__item'>
        <Link to="/main">
          キャンプ場コース
        </Link>
      </div>
      <div className='course__item'>
        <Link to="/main">
          グランピングコース
        </Link>
      </div>




    </div>
  )
}
