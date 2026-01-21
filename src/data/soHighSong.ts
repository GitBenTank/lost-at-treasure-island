import { LegacySong, SongMeta } from './types';

export const soHighSong: LegacySong = {
  song_title: "So High",
  artist: "Sakari",
  arc: {
    act_1: {
      name: "Work + Worth",
      section: "Verse 1 + Hook 1",
      theme: "Dignity, resilience, earned joy",
      mood: ["warm", "grounded", "optimistic"],
      narrative: "Admiring resilient people whose joy comes from hard work.",
      listener_takeaway: "There is dignity in trying."
    },
    act_2: {
      name: "Hurt + Context",
      section: "Verse 2",
      theme: "Relational betrayal, empathy, generational cycles",
      mood: ["sad", "mature", "reflective"],
      narrative: "Personal boundary violations lead to hurt, but empathy exposes origins.",
      listener_takeaway: "Pain has origins, cycles can be broken."
    },
    act_3: {
      name: "Ascent",
      section: "Final Hooks + Tags",
      theme: "Healing, transcendence, joy as rebellion",
      mood: ["triumphant", "uplifted", "resolved"],
      narrative: "Joy becomes an act of rebellion and healing—work, love, and scars become flight.",
      listener_takeaway: "Flight is earned through work, hurt, and healing."
    }
  },
  one_sentence_arc:
    "Honors resilient love, confronts inherited hurt, and ascends through joy and empathy.",
  position_in_album: "midpoint pivot / hinge track"
};

export const soHighMeta: SongMeta = {
  moods: {
    primary: ["triumphant", "warm", "mature"],
    secondary: ["empathetic", "resilient", "reflective"]
  },
  motifs: [
    "hands and work",
    "jumping / flight",
    "scars and healing",
    "cycles / boundaries",
    "overflowing joy"
  ],
  visual_language: {
    textures: ["dust", "sweat", "fabric", "sunlight", "chalk lines"],
    colors: ["burnt gold", "warm browns", "sunset orange", "dusty blue", "cream"],
    camera_energy: ["intimate", "documentary", "slow-motion bursts"],
    symbolic_actions: ["jumping", "dancing", "boundary lines moving", "hands working"]
  },
  sonic_language: {
    genre_family: ["R&B", "Soul", "Indie Gospel-adjacent"],
    production_notes: [
      "Remove tambourine to reduce CCM vibe",
      "Lean into breath and texture",
      "Use stacked harmonies on 'high' to literalize lift",
      "Avoid over-polish — keep human grit"
    ]
  }
};
