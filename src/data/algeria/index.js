// Rifles
import ALIB1 from './rifles/ali_b1'
import F1FATMA from './rifles/f1_fatma'

// MGs
import MAL8 from './mgs/mal-8'

// Cannons
import KAMEL9975 from './cannons/kamel_99-75'

// Country object
export default {
  name: 'Franco-Senegalese-Algerian Federation',
  acronym: 'FSAF',
  color: '#FFA500',
  title: '#333',
  country: 'Algeria',
  allies: [],
  economy: 'Mixed economy',
  government: 'Federal republic',
  ruling_party: 'Republican Democrats',
  anthem: 'Le chant de l\'Unité (The song of Unity)',
  military_link: 'https://docs.google.com/spreadsheets/d/1cM1kyzRz59yKIJTOgxQBHapPJkWfWpQS5o76WaZZ5QI',
  weapons: {
    rifles: {
      label: 'Rifles',
      elements: {
        ali_b1: ALIB1,
        f1_fatma: F1FATMA
      }
    },
    mgs: {
      label: 'Machineguns',
      elements: {
        mal8: MAL8
      }
    },
    cannons: {
      label: 'Cannons',
      elements: {
        kamel_99_75: KAMEL9975
      }
    }
  },
  history:
`Following the bloody week, there was a massive exodus from important french figures - philosophers, politicians, scientists, etc. The logical route for them was Algeria, as it was close, big and easy to hide in. A coalition formed over the years, composed of a part of those french exiles and some respected locals, which eventually planned a strategic revolution to claim the country's independence. It was in 1880, only 9 years after the Bloody week, that the revolution started : it was led by french officers and mostly composed of algerian and exiled french troops. Since France was already too busy with its ongoing crisis and the recovery from the bloody week, there was very little intervention from french forces, and in slightly under a year the revolution was won and the colonial government overthrown.

A cosmopolitan federal republic was formed : the French-Senegalese-Algerian Federation (FSAF). The population was mostly composed of Algerians, but also french exiles and Senegalese immigrants. The situation was a bit heated at first, as cultures kinda mixed, but eventually things calmed down as a heavy focus was put on improving the country's technological level, developing the industry and guaranteeing a sufficient local production of food and goods to maintain a decent quality of life for the states' citizens.

The ex-colonial government was eventually trialed by the newformed federation, and declared guilty and sent in exile in a high-profile detention center in the city of Djelfa. They weren't executed, although some of them were victims of assassination attempts from local nationalists.
In 1900, the situation is mostly stabilized thanks to the secular state policy enforced. Cultures are starting to slowly blend in, a phenomenon that has been very heavily helped by the revolution of 1880 that has put french, algerian and senegalese people on an equal ground against a common enemy. However, various events in the world could disrupt that stability, especially now that the former country that owned that land, France, is rising up again.

While there are no current threats of civil wars or notable dissension, there is always an enemy looming nearby, and the FSAF's military council sure isn't going to rest easy when the marxist threat could just be at their doorstep...`
}
