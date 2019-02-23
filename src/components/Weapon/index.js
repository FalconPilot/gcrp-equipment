import React from 'react'

const getWeapon = (country, option) => (
  Object.values(country.weapons)
    .reduce((acc, group) => Object.assign(acc, group.elements), {})[option] || {}
)

const Weapon = (props) => {
  const weapon = getWeapon(props.country, props.option)
  console.log(weapon)
  return (
    <div className={props.className}>
      <h2 className='weapon-title'>{weapon.name}</h2>
      {weapon.image}
    </div>
  )
}

export default Weapon
