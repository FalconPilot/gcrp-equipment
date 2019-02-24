import React from 'react'

import data from '../../data/global'

import './style.css'

const getWeapon = (country, option) => (
  Object.values(country.weapons)
    .reduce((acc, group) => Object.assign(acc, group.elements), {})[option] || {}
)

const manufacturingDate = (weapon) => (
  weapon.year && weapon.year <= data.year
    ? <p className="weapon-subtitle">Designed in {weapon.year}</p>
    : <p className="weapon-subtitle future">Not designed yet</p>
)

const Weapon = (props) => {
  const weapon = getWeapon(props.country, props.option)
  console.log(weapon)
  return (
    <div className={props.className}>
      <h2 className='weapon-title'>{weapon.name}</h2>
      {manufacturingDate(weapon)}
      {weapon.image}
    </div>
  )
}

export default Weapon
