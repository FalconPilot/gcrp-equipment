import React from 'react'

import data from '../../data/global'

import './style.css'

const getWeapon = (country, option) => (
  Object.values(country.weapons)
    .reduce((acc, group) => Object.assign(acc, group.elements), {})[option] || {}
)

const manufacturingDate = (weapon) => (
  weapon.year && weapon.year <= data.year
    ? <p className='weapon-subtitle'>Designed in {weapon.year}</p>
    : <p className='weapon-subtitle future'>Not designed yet</p>
)

const statBar = (label, value) => (
  value && (
    <div className='weapon-stat'>
      <div className='weapon-bar'>
        <strong>{label}</strong>
        <p style={{width: `${value}%`}} />
      </div>
      <label>{value}%</label>
    </div>
  )
)

const weaponStats = (stats) => (
  <div className='weapon-stats'>
    {statBar('Firepower', stats.firepower)}
    {statBar('Accuracy', stats.accuracy)}
    {statBar('Reliability', stats.reliability)}
  </div>
)

const weaponCarac = (label, value) => (
  value && (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
)

const weaponCaracs = (weapon) => (
  <table className='weapon-caracs'>
    <tbody>
      {weaponCarac('Caliber', weapon.caliber)}
      {weaponCarac('Magazine capacity', weapon.capacity)}
      {weaponCarac('Optimal range', weapon.range)}
      {weaponCarac('Production cost', weapon.production_cost)}
      {weaponCarac('Supply cost', weapon.supply_cost)}
    </tbody>
  </table>
)

const Weapon = (props) => {
  const weapon = getWeapon(props.country, props.option)
  return (
    <div className={props.className}>
      <h2 className='weapon-title'>{weapon.name}</h2>
      {manufacturingDate(weapon)}
      {weapon.stats && weaponStats(weapon.stats)}
      {weapon.image}
      {weaponCaracs(weapon)}
      <pre className='weapon-description'>{weapon.description}</pre>
    </div>
  )
}

export default Weapon
