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
        {weaponCarac('Action', weapon.action)}
        {weaponCarac('Caliber', weapon.caliber)}
        {weaponCarac('Magazine capacity', weapon.capacity)}
        {weaponCarac('Optimal range', weapon.range)}
        {weaponCarac('Production cost', weapon.production_cost)}
        {weaponCarac('Supply cost', weapon.supply_cost)}
      </tbody>
    </table>
)

const prosAndCons = (weapon) => (
  Array.isArray(weapon.pros) &&
  Array.isArray(weapon.cons) &&
  (weapon.pros.length > 0 || weapon.cons.length > 0) && (
    <React.Fragment>
      <table className='weapon-quality pros'>
        <thead>
          <tr>
            <th colSpan='2'>Pros</th>
          </tr>
        </thead>
        <tbody>
          {weapon.pros.map((pro, idx) => (
            <tr key={`pro-${idx+1}`}>
              <td>+</td>
              <td>{pro}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className='weapon-quality cons'>
        <thead>
          <tr>
            <th colSpan='2'>Cons</th>
          </tr>
        </thead>
        <tbody>
          {weapon.cons.map((con, idx) => (
            <tr key={`con-${idx+1}`}>
              <td>-</td>
              <td>{con}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
)

const weaponAuthors = (weapon) => (
  Array.isArray(weapon.authors) && weapon.authors.length > 0 && (
    <div className='weapon-authors'>
      <h5>Image authors</h5>
      {weapon.authors.map((author, idx) => (
        <p key={`weap_author_${idx+1}`}>{author.name}</p>
      ))}
    </div>
  )
)

const Weapon = (props) => {
  const weapon = getWeapon(props.country, props.option)
  return (
    <div className={props.className}>
      <h2 className='weapon-title'>{weapon.name}</h2>
      {manufacturingDate(weapon)}
      {weapon.image}
      {weaponAuthors(weapon)}
      <div className='weapon-attributes'>
        {weaponCaracs(weapon)}
        {weapon.stats && weaponStats(weapon.stats)}
      </div>
      <div className='weapon-qualities'>
        {prosAndCons(weapon)}
      </div>
      <pre className='weapon-description'>{weapon.description}</pre>
    </div>
  )
}

export default Weapon
