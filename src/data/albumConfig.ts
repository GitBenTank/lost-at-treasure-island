import type { Album } from './types';
import { soHighScenes } from './soHighScenes';

export const albumConfig: Album = {
  title: 'Lost at Treasure Island',
  world: {
    zones: [
      {
        id: 'spring-bloom',
        name: 'Bloom Pass',
        description: 'Soft awakening valley with blossoms, waterfalls, and first light.'
      },
      {
        id: 'summer-volcano',
        name: 'Spitfire Canyon',
        description: 'Volcanic arena, dust storms, summer heat and boss battles.'
      },
      {
        id: 'fall-ruins',
        name: 'Ruined Temple',
        description: 'Ancient stone ruins, long shadows, secrets, and quiet reckoning.'
      },
      {
        id: 'winter-vault',
        name: 'Treasure Vault',
        description: 'Frozen sacred vault holding the final treasure and bonus tracks.'
      }
    ]
  },
  eps: [
    {
      id: 'spring-ep',
      title: 'TBD',
      season: 'spring',
      releaseWindow: 'March 2026',
      theme: 'Awakening',
      zoneId: 'spring-bloom',
      songs: []
    },
    {
      id: 'summer-ep',
      title: 'Spitfire',
      season: 'summer',
      releaseWindow: 'Jul–Aug 2026',
      theme: 'Fiery, sassy, warrior energy',
      zoneId: 'summer-volcano',
      songs: [
        {
          id: 'so-high',
          title: 'So High',
          energyLevel: 'high',
          epId: 'summer-ep',
          scenes: soHighScenes
        }
      ]
    },
    {
      id: 'fall-ep',
      title: 'TBD',
      season: 'fall',
      releaseWindow: 'Nov 2026',
      theme: 'Reckoning, mystery, decisions',
      zoneId: 'fall-ruins',
      songs: []
    },
    {
      id: 'winter-ep',
      title: 'Treasure Vault',
      season: 'winter',
      releaseWindow: 'Jan 2027',
      theme: 'Revelation and final treasure',
      zoneId: 'winter-vault',
      songs: []
    }
  ]
};
