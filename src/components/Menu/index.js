import React, { Component } from 'react'

import './style.css'

const countryValue = 'COUNTRY'

const Item = ({ label, value, type, listener }) => (
  <button
    type='button'
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
    />
    {Object.entries(props.country.weapons || {}).map(([groupKey, weaponGroup]) => (
      <React.Fragment key={`${groupKey}-title`}>
        <h3>{weaponGroup.label}</h3>
        {Object.entries(weaponGroup.elements).map(([weaponKey, weapon]) => (
          <Item
            label={weapon.name}
            value={weaponKey}
            key={weaponKey}
            type='WEAPON'
            listener={props.updateValue}
          />
        ))}
      </React.Fragment>
    ))}
  </div>
)

export default Menu
