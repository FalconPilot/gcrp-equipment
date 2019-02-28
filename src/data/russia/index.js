// Rifles
import RIFLEMODEL1894 from './rifles/rifle_model_1894'

// Country object
export default {
  name: 'Russian Republic',
  acronym: 'RR',
  color: '#007FFF',
  title: '#FFF',
  country: 'Russia',
  allies: [],
  economy: 'Market liberal',
  government: 'Parliamentary democracy',
  ruling_party: 'Constitutional Democrats',
  anthem: 'Marsel\'eza (Marseillaise)',
  weapons: {
    rifles: {
      label: 'Rifles',
      elements: {
        rifle_model_1894: RIFLEMODEL1894
      }
    }
  }
}
