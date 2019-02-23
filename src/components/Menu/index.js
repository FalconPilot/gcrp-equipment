import React, { Component } from 'react'

import './style.css'

const countryValue = 'COUNTRY'

const Item = ({ label, value, type, listener, active }) => (
  <button
    type='button'
    className={active ? 'selected' : ''}
    value={value}
    onClick={listener}
    data-type={type}
  >{label}
  </button>
)

const Menu = (props) => (
  <div className='side-menu'>
    <Item
      label='Country info'
      value={countryValue}
      type='COUNTRY'
      listener={props.updateValue}
      active={props.option === 'COUNTRY'}
    />
    {Object.entries(props.country.weapons || {}).map(([groupKey, weaponGroup]) => (
      <React.Fragment key={`${groupKey}-title`}>
        <h3>{weaponGroup.label}</h3>
        {Object.entries(weaponGroup.elements).map(([weaponKey, weapon]) => (
          <Item
            key={weaponKey}
            label={weapon.name}
            value={weaponKey}
            type='WEAPON'
            listener={props.updateValue}
            active={props.option === weaponKey}
          />
        ))}
      </React.Fragment>
    ))}
  </div>
)

export default Menu
