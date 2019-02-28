import React from 'react'

import Authors from '../../authors'

import SVG from '../../../images/rifles/aw_m1900.svg'

export default {
  name: 'AW M1900',
  year: 1900,
  authors: [Authors.ralph],
  image: <img src={SVG} />,
  capacity: 10,
  action: 'Bolt-action',
  caliber: '7.62x45mm',
  range: 'Medium',
  production_cost: 'Average',
  supply_cost: 'Low',
  stats: {
    firepower: 40,
    accuracy: 70,
    reliability: 75
  },
  pros: [
    'Light, short and maneuverable with a good rate of fire',
    'Easy to maintain and manufacture',
    'Polyvalent and adapted to a large variety of roles'
  ],
  cons: [
    'Not well-suited for special uses (marksmanship, etc...)',
    'Does\'nt pack an incredible punch',
    'Unadapted to combat in hot regions, especially desertic lands'
  ],
  description:
`The AW M1900 is a light rifle created for mobile warfare. It sports a good rate of fire thanks to its smooth bolt, making it excellent for suppressive fire. It's also pretty sturdy and reliable, making it a good trooper weapon.

While its ammo doesn't pack the most incredible punch ever, its steady accuracy and manageable recoil makes follow-up shots a viable option.

This weapon, however, falls short when used in hot environments. The massive wood and steel parts tend to dislike overheating. Also, by being conceived to be usable in every role, it excels in none.`
}
