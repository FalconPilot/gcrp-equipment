import React from 'react'

import data from '../../data/global'

import './style.css'

const Header = (props) => (
  <header className='app-header' style={{ backgroundColor: props.country.color }}>
    <div className='app-user-space'>
      {props.credentials
        ? <button type='button' onClick={props.logout}>Logout</button>
        : <button type='button' onClick={props.login}>Login</button>
      }
    </div>
    <div className='header-content'>
      <h1 style={{ color: props.country.title }}>{props.country.name}</h1>
      <p style={{ color: props.country.title }}>Year {data.year}</p>
    </div>
  </header>
)

export default Header
