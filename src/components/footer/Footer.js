import React from 'react'
import { Link } from 'react-router-dom'
import { NavList } from '../../utils/List'
import './Footer.scss'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
          <ul>
            {
              NavList.map(item => (
                <li key={item.id}>
                  <Link className='link' to={item.path}>{item.title}</Link>
                </li>
              ))
            }
          </ul> 
        </div>
      </div> 
    </>
  )
}
