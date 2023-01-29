import React from 'react'
import { Link } from 'react-router-dom'
import "./Course.scss"

export const Course = () => {
  return (
    <div className='course'>
      <div className='course__item'>
        <Link to="/main">
          コース
        </Link>
      </div>

      <div className='course__item'>
        コース
      </div>
      <div className='course__item'>
        コース
      </div>
      <div className='course__item'>
        コース
      </div>


    </div>
  )
}
