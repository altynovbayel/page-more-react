import React from 'react'
import './Header.scss'
import {GiHamburgerMenu} from 'react-icons/gi'
import { NavList } from '../../utils/List'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <h2>Logo</h2>
            </div>
            <div className='nav'>
              <ul className='nav_list'>
                {
                  NavList.map(item => (
                    <li key={item.id}>
                      <NavLink className={(active) => active.isActive ? 'active' : 'nav_link'} to={item.path} >
                        {item.title}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
              <div className="nav_burger">
                <GiHamburgerMenu onClick={burger}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function burger(){
  
}

export default Header
