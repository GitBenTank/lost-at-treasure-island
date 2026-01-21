export interface StoryboardSection {
  id: string;
  title: string;
  category: 'sound' | 'visual' | 'lyrics' | 'production' | 'vibe';
  description?: string;
  items: string[];
  notes?: string;
  images?: string[];
}

export const storyboardSections: StoryboardSection[] = [
  {
    id: 'sound-vibe',
    title: 'SOUND & VIBE',
    category: 'sound',
    description:
      'Dark, mysterious, majestic sonic palette with a sense of resilience and uplift—music that feels like workers, saints, and survivors moving through a hard world.',
    items: [
      'Dark, deep, mysterious, majestic vibes',
      'Less funky - needs more soul and grit',
      'Less optimistic and bright',
      'More suspense - especially in opening descending guitar line',
      'Influences: Jamiroquai / MGMT / Sade / Santana-toward-the-end',
      'Spacey vibe but brought down to the dirt',
      'Epic battle of good vs evil - might not make it out alive (but we will)',
      'Match the attitude behind the lyrics',
    ],
    notes: 'The instrumentation right now is a little bit too optimistic and bright. Needs the full attitude to back it up.',
    images: [
      '/images/sound-vibe-1.jpg', // Dark, mysterious, majestic vibes
      '/images/sound-vibe-2.jpg',  // Post-apocalyptic, battle aesthetic
    ],
  },
  {
    id: 'visual-imagery',
    title: 'VISUAL & IMAGERY',
    category: 'visual',
    description:
      'A neo-western desert and a digital, neon world colliding—dusty horizons, long roads, and matrix-like overlays that feel like spiritual warfare and future folklore.',
    items: [
      'Last woman on earth but there\'s still evil afoot',
      'The battle rages on - matrix vibes',
      'Garden of Eden after the bomb',
      'Western influence',
      'Doom Slayer girl - girl version of the doom slayer',
      'Neo-western aesthetic',
      'Chrome armor, silk dress - armed and vulnerable',
      'Still dancing in the warzone',
    ],
    notes: 'Visual person - need to visualize to proceed. Flowing space dress, glitter, stars, rays of light. All the drug induced visions but controlled by a sober mind.',
    images: [
      '/images/visual-imagery-1.jpg', // Desert/western landscape, neo-western
      '/images/visual-imagery-2.jpg',  // Matrix/neon aesthetic, doom slayer references
    ],
  },
  {
    id: 'production',
    title: 'PRODUCTION NOTES',
    category: 'production',
    description:
      'Guitar-driven soul with modern R&B and indie gospel touches—live-feeling instruments, studio warmth, and production that lets the vocal and lyrics lead.',
    items: [
      'Remove tambourine - making it corny',
      'Percussion in general is making it sound funkier than desired',
      'Guitar is too plain Jane - needs to be dirtied up in a good way',
      'Opening descending line in first verse has the essence but needs full attitude',
      'Pull you in more instrumentally',
      'Needs more soul and grit',
    ],
    images: [
      '/images/production-1.jpg', // Guitar/instrument references
      '/images/production-2.jpg',  // Studio/production setup
    ],
  },
  {
    id: 'lyrics',
    title: 'LYRICS',
    category: 'lyrics',
    description:
      'Hands, labor, and the hardest working people you know—paired with images of lift, ascension, and being "lifted in the heavens" without losing the grit.',
    items: [
      'Verse: "There\'s a happy ending / For the hardest working hands / Honest and virtue / I\'ve seen it in this land / He\'s a lover yeah he would give his life / She\'s a fighter, I know that she gave her all when she didn\'t have it / Resilient rewards they got joy it\'s contagious / Can\'t nobody take it cause it overflows"',
      'Hook: "This is why we jump so high / This is why we work so hard to fly / This is why jump so high / This is why we work so hard to fly"',
      'Tag: "My soul is moving forward / I\'ll tell ya what that means"',
      'Verse: "Yeah ya crossed me a dozen times and kept moving the boarder line / I\'d never treat someone I love that way anytime / Know that you hurt me cause somebody hurt you first / We gotta break that curse"',
      'Hook: "This is why we love so hard / This is why we mend the broken scars / This is jump so high / This is why we work so hard to fly"',
      'Tag: "Lifted in the heavens / Cmon and dance with me"',
    ],
    notes: 'Emotional core: generational pain alchemized into healing. Ascension not as fantasy, but as the payoff for scars and effort.',
    images: [
      '/images/lyrics-1.jpg', // Hands/labor theme, "hardest working hands"
      '/images/lyrics-2.jpg',  // Ascension/heaven theme, "lifted in the heavens"
    ],
  },
  {
    id: 'vibe-theme',
    title: 'THEME & EMOTIONAL ARC',
    category: 'vibe',
    description:
      'A saint in a warzone, joy as rebellion, dancing in ruins and under stars—moving from hurt and battle-scarred landscapes into ecstatic, contagious joy.',
    items: [
      'Saint in a warzone - holy but covered in dust',
      'We might not make it (but we will)',
      'Breaking generational curses',
      'Hardest working hands get their happy ending',
      'Lover & Fighter - dual energy',
      'Final scene: we survived the battle and now we\'re dancing in the ruins under new stars',
      'Earned rest after long spiritual labor',
    ],
    images: [
      '/images/vibe-theme-1.jpg', // Warzone/battle scene, "saint in a warzone"
      '/images/vibe-theme-2.jpg',  // Dancing in ruins/stars, final scene ascension
    ],
  },
];

export const spotifyPlaylistId = '0XPU6Hw2Dd91RWzrJzVgbY';
