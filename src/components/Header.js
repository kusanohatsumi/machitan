import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>logo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/Page1">ページ１</Link>
          </li>
          <li>
            <Link to="/Page2">ページ２</Link>  
          </li>
        </ul>
      </nav>
    </header>
  )
}
