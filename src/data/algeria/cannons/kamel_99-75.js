import React from 'react'

import Authors from '../../authors'

import SVG from '../../../images/cannons/kamel_99-75.svg'

export default {
  name: 'Kamel 99-75',
  year: 1899,
  image: <img src={SVG} />,
  authors: [Authors.ralph],
  caliber: '75mm Cannon shell',
  range: 'Very long',
  production_cost: 'Medium',
  supply_cost: 'High',
  stats: {
    firepower: 80,
    accuracy: 65,
    reliability: 70
  },
  pros: [
    'Extremely adaptive and easily repurposed',
    'Long range and good accuracy',
    'Solid and powerful'
  ],
  cons: [
    'Expensive to supply in ammunition',
    'Manufacturing is more complex compared to a muzzle-loaded cannon',
    'Requires a lot of training for the operating crew'
  ],
  description:
`Designed by french engineers in Algeria, the Kamel 99-75 is an artillery cannon that appeared in 1899. It uses standard french 75mm rounds, which means that it's an all-round gun that can use a variety of shells for various purposes. However, while the manufacturing cost of the gun isn't excessive in itself, maintaining a steady supply of ammo during a war requires quite an industrial effort.

Its thick steel shield isn't the best at deflecting shells, but it offers quite a decent protection against enemy fire. The wooden, steel-reinforced wheels are rough but do the job just fine. The steel legs are absolutely vital to handle the massive recoil of the cannon, however, and must be grounded before it's shot.

The cannon's accuracy, if properly handled, is pretty good considering the length of the barrel, which makes it a pretty deadly weapon to use in artillery barrages.

Its performances are slightly outmatched by a french 75mm cannon, which makes use of more modern materials.`
}
