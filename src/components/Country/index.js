import React from 'react'

import './style.css'

const countryStuff = (label, value) => (
  value && (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
)

const countryAllies = (label, allies) => (
  Array.isArray(allies) && allies.length > 0 && (
    <tr>
    </tr>
  )
)

const Country = (props) => (
  <div className={props.className}>
    <h2>{props.country.name} ({props.country.acronym})</h2>
    <table className='country-stuff'>
      <tbody>
        {countryStuff('Homeland', props.country.country)}
        {countryStuff('Economy', props.country.economy)}
        {countryStuff('Ruling party', props.country.ruling_party)}
        {countryStuff('National anthem', props.country.anthem)}
        {countryStuff('Leader', props.country.leader)}
        {props.country.military_link && (
          <tr>
            <td colSpan='2' className='military_link'>
              <a href={props.country.military_link} target='_blank'>Military organization link</a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
    <pre className='country-description'>{props.country.history}</pre>
  </div>
)

export default Country
