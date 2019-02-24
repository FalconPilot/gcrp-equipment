import React, { Component } from 'react'

import data from '../../data/global'
import countries from '../../data/countries'

import './style.css'

const countryValue = 'COUNTRY'

const Item = ({ label, year, value, type, listener, active }) => (
  <button
    type='button'
    className={active ? 'selected' : ''}
    value={value}
    onClick={listener}
    data-type={type}
  >
    <span>{year && year <= data.year ? year : <i>TBD</i>}</span>
    <p>{label}</p>
  </button>
)

const sortWeapons = ([k1, w1], [k2, w2]) => (
  w1.year && !w2.year ? -1 : (
    w2.year && !w1.year ? 1 : (
      w1.year < w2.year ? -1 : 1
    )
  )
)

const sortCountries = ([k1, c1], [k2, c2]) => (
  c1.acronym < c2.acronym ? -1 : 1
)

const Menu = (props) => (
  <div className='side-menu'>
    <select className='country-selector' onChange={props.changeCountry} value={props.country_key}>
      {Object.entries(countries).sort(sortCountries).map(([k, country]) => (
        <option value={k} key={k}>
          {country.acronym && `${country.acronym} - `}{country.name}
        </option>
      ))}
    </select>
    <Item
      label='Country info'
      year={data.year}
      value={countryValue}
      type='COUNTRY'
      listener={props.updateValue}
      active={props.option === 'COUNTRY'}
    />
    {Object.entries(props.country.weapons || {}).map(([groupKey, weaponGroup]) => (
      <React.Fragment key={`${groupKey}-title`}>
        <h3>{weaponGroup.label}</h3>
        {Object.entries(weaponGroup.elements).sort(sortWeapons).map(([weaponKey, weapon]) => (
          <Item
            key={weaponKey}
            year={weapon.year}
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
