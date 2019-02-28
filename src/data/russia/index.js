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
  military_link: 'https://docs.google.com/spreadsheets/d/1Iochiv7OrQS_hCbXSbLQ9K0e3fBi2asEDYETUQJ3RoY',
  weapons: {
    rifles: {
      label: 'Rifles',
      elements: {
        rifle_model_1894: RIFLEMODEL1894
      }
    }
  },
  history:
`The Russian Empire disintegrated after a revolution in 1878, prompted by similar events in Europe (namely the French Commune), leaving in its place the Russian Republic and a bunch of independent states. The revolution involved a three-way civil war between pro-empire Tsarists, liberals, and socialists, which the liberals eventually won; after the civil war, there was a mass exodus (voluntary and involuntary) of Tsarist and socialist intellectuals/leaders/sympathisers; most of the socialists ended up in France.

Things are kinda volatile internally at the moment due to the rapid industrialisation efforts and widespread land reforms leading to the enlargement of the urban and rural working classes at the expense of the peasant and artisan classes; this in turn has precipitated a rise in socialist agitation that manifests as strikes and other industrial action, the most notable recent example of which being an 1898 general strike that turned into a three-week battle between the strikers and government forces. Predictably, the outcome was a government victory, with socialist organisations and newspapers being banned and their leaders arrested, exiled, or driven underground.

Now, in 1900, things are relatively calm on the surface; however, there are always ~world events~ (whatever they may be) and the internal threat of a second all-out civil war to consider.`
}
