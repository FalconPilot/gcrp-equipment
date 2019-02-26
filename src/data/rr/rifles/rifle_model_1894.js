import React from 'react'

import Authors from '../../authors'

import PNG from '../../../images/rifles/rifle_model_1894.png'

export default {
  name: '6.5mm Rifle M1894',
  year: 1894,
  authors: [Authors.semi],
  image: <img src={PNG} />,
  capacity: 6,
  action: 'Bolt-action',
  caliber: '6.5x54mm',
  range: 'Above average',
  description:
`Adopted in 1894, the M1894 - known informally as the "Kirilenko" rifle after its inventor - was the first new weapon issued to the military of the Russian Republic after its formation in 1878. Replacing the earlier Berdan rifles, the rifle fired a newly-developed 6.5mm cartridge based on that recently developed in Sweden from a six-round detachable magazine, loaded either with loose rounds or stripper clips.

The M1894 represented a radical advancement in the armament of the individual Russian soldier, and incorporated many features considered novel at the time - the most obvious of these being the detachable magazine. The rifle additionally incorporated more conventional features, such as a magazine cutoff on the right side of the receiver as well as provision for a Berdan-style socket bayonet.

The typical load of ammunition issued with the rifle was sixty rounds; twelve of these would be loaded into magazines with the remainder remaining on their clips. The intention was for the spare magazine to form an emergency reserve, with normal reloading being accomplished through the use of the clips.`
}
