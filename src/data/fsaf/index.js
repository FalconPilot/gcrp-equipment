// Rifles
import ALIB1 from './rifles/ali_b1'
import F1FATMA from './rifles/f1_fatma'

// Cannons
import KAMEL9975 from './cannons/kamel_99-75'

// Country object
export default {
  name: 'Franco-Senegalese-Algerian Federation',
  acronym: 'FSAF',
  color: '#FFA500',
  country: 'Algeria',
  allies: [],
  economy: 'Mixed economy',
  government: 'Federal republic',
  ruling_party: 'Republican Democrats',
  anthem: 'Le chant de l\'Unité (The song of Unity)',
  weapons: {
    rifles: {
      label: 'Rifles',
      elements: {
        ali_b1: ALIB1,
        f1_fatma: F1FATMA
      }
    },
    cannons: {
      label: 'Cannons',
      elements: {
        kamel_99_75: KAMEL9975
      }
    }
  }
}
