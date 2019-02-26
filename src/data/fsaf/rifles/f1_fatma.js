import React from 'react'

import Authors from '../../authors'

import SVG from '../../../images/rifles/f1_fatma.svg'

export default {
  name: 'F1 Fatma',
  image: <img src={SVG} />,
  authors: [Authors.ralph],
  capacity: 8,
  action: 'Semi-automatic',
  caliber: '7.68x54mm AFS-L',
  range: 'Medium',
  production_cost: 'Low',
  supply_cost: 'Average',
  stats: {
    firepower: 60,
    accuracy: 40,
    reliability: 65
  }
}
