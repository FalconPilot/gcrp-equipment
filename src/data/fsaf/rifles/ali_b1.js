import React from 'react'

import Authors from '../../authors'

import SVG from '../../../images/rifles/ali_b1.svg'

export default {
  name: 'Ali B1',
  year: 1897,
  image: <img src={SVG} />,
  authors: [Authors.ralph],
  capacity: 4,
  action: 'Bolt-action',
  caliber: '7.68x40mm AFS',
  range: 'Medium',
  production_cost: 'Low',
  supply_cost: 'Low',
  stats: {
    firepower: 40,
    accuracy: 25,
    reliability: 80
  },
  pros: [
    'Light and maneuverable',
    'Cheap to manufacture',
    'Reliable and easy to maintain'
  ],
  cons: [
    'Slightly inferior range compared to longer rifles',
    'Only 4 rounds of capacity',
    'Very basic iron sights'
  ],
  description:
`The Ali B1 Rifle is the FSAF's standard infantry rifle. Designed in 1897, it's a simple, rugged bolt-action rifle with a 4 rounds capacity internal magazine. It has a pretty short length for a bolt-action rifle, which makes it slightly less effective at very long ranges, but also way lighter compared to some other combat rifles. It's a rough but functional weapon that can easily be mass-produced thanks to the simple design of the parts.

The safety is a simple nut that can be pulled and turned on the back of the bolt, which prevents the trigger from being pulled. It has a latch on front of the trigger to open the internal magazine and eject unfired rounds. It's a good infantry rifle, but a mediocre marksman rifle, in part due to its very simple sights that are suited to short to medium-ranged combat at best.

Overall, it's an easy weapon to mass-produce that can be fielded in very large quantities to equip an army on a budget, without munching too much on the quality. It is far, however, from a perfect weapon.`
}
