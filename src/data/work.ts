export type Accent = 'volt' | 'ice' | 'ember' | 'heat'

export type Work = {
  id: string
  index: string
  name: string
  kicker: string
  status: string
  accent: Accent
  href?: string
  hrefLabel?: string
  playHref?: string
  screenshot?: string
  lede: string
  facts: string[]
}

export const works: Work[] = [
  {
    id: 'fantasy',
    index: '01',
    name: 'FantasyAnalysis',
    kicker: 'League intel',
    status: 'Local',
    accent: 'volt',
    href: 'https://github.com/207/Fantasy',
    hrefLabel: 'Source',
    screenshot: '/shots/fantasy.jpg',
    lede: 'A private analyst for the league. Scrape ESPN league data, consolidate ranks from different sources, then Gemini for waiver and trade recs.',
    facts: ['Python', 'Streamlit', 'RRF', 'Gemini'],
  },
  // BirdsEye stays out until the feeder is further along.
  // {
  //   id: 'birdseye',
  //   index: '02',
  //   name: 'BirdsEye',
  //   kicker: 'Bird feeder',
  //   status: 'WIP',
  //   accent: 'ice',
  //   lede: 'Local Bird Buddy clone. Feeder cam and species IDs on your machine.',
  //   facts: ['Local', 'Camera', 'WIP'],
  // },
  {
    id: 'beers',
    index: '02',
    name: '1 Million Beers',
    kicker: 'Group tally',
    status: 'Live',
    accent: 'ice',
    playHref: 'https://onemillionbeers.onrender.com/',
    screenshot: '/shots/beers.jpg',
    href: 'https://onemillionbeers.onrender.com/',
    hrefLabel: 'Open',
    lede: 'An iMessage group, counted toward one million beers.',
    facts: ['React', 'Node', 'SQLite', 'iMessage'],
  },
  {
    id: 'citysnipe',
    index: '03',
    name: 'CitySnipe',
    kicker: 'Geo game',
    status: 'Playable',
    accent: 'ember',
    playHref: 'https://citytap.onrender.com',
    screenshot: '/shots/citysnipe.jpg',
    href: 'https://github.com/207/cityTap',
    hrefLabel: 'Source',
    lede: 'A pin drops on a globe. You name the nearest city. Compete against your friends in daily challenges across three different difficulties.',
    facts: ['React', 'Mapbox', '3D globe'],
  },
  {
    id: 'buzzbowl',
    index: '04',
    name: 'BuzzBowl',
    kicker: 'Quiz bowl',
    status: 'Playable',
    accent: 'heat',
    playHref: 'https://buzzbowl.onrender.com',
    screenshot: '/shots/buzzbowl.jpg',
    href: 'https://github.com/207/BuzzBowl',
    hrefLabel: 'Source',
    lede: 'Host on a TV. Buzz from phones. Live Socket.io rooms.',
    facts: ['React', 'Node', 'Socket.io'],
  },
]
