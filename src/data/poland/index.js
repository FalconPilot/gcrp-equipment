// Rifles
import AWM1900 from './rifles/aw_m1900'
import PKRD from './rifles/pkrd'

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
  ruling_party: 'Partia Cesarski (conservative)',
  anthem: 'Jeszcze Polska nie zginęła (Poland Is Not Yet Lost)',
  leader: 'Sa Majesté Impériale Napoléon V of house Bonaparte-Walewski (monarch) Karl Potworowski (prime minister)',
  weapons: {
    rifles: {
      label: 'Rifles',
      elements: {
        aw_m1900: AWM1900,
        pkrd: PKRD
      }
    }
  }
}
