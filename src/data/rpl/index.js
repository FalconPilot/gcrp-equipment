// Rifles
import AWM1900 from './rifles/aw_m1900'

// Country object
export default {
  name: 'Republic of Poland-Lituania',
  acronym: 'RPL',
  color: '#DC143C',
  title: '#FFF',
  country: 'Poland',
  allies: [],
  economy: 'Mixed economy',
  government: 'Constitutional monarchy',
  ruling_party: 'Parti Imperial (conservative)',
  anthem: 'Mazurek Dąbrowskiego',
  leader: 'Sa Majesté Impériale Napoléon V (Józef Alexandre Walewski)',
  weapons: {
    rifles: {
      label: 'Rifles',
      elements: {
        aw_m1900: AWM1900
      }
    }
  }
}
