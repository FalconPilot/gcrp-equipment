import React from 'react'

const Weapon = (props) => (
  console.log(props) || <div className={props.className}>
    WEAPON
    {props.name}
  </div>
)

export default Weapon
