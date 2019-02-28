import React from 'react'

import Authors from '../../authors'

import SVG from '../../../images/mgs/mal-8.svg'

export default {
  name: 'MAL-8',
  year: 1900,
  image: <img src={SVG} />,
  authors: [Authors.ralph],
  capacity: 200,
  action: 'Fully automatic',
  caliber: '8mm AFS',
  range: 'Medium',
  production_cost: 'Medium-High',
  supply_cost: 'Medium',
  stats: {
    firepower: 70,
    accuracy: 60,
    reliability: 60
  },
  pros: [
    'Not as heavy as other contemporary MGs',
    'Supports heat decently',
    'Polyvalent and not too inconvenient to carry around'
  ],
  cons: [
    'Complex to manufacture',
    'Recoil is kinda heavy',
    'Not very agile'
  ]
}
