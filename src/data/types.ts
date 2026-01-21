export interface SongArcAct {
  name: string;
  section: string;
  theme: string;
  mood: string[];
  narrative: string;
  listener_takeaway: string;
}

export interface SongArc {
  act_1: SongArcAct;
  act_2: SongArcAct;
  act_3: SongArcAct;
}

export interface SongMeta {
  moods: {
    primary: string[];
    secondary: string[];
  };
  motifs: string[];
  visual_language: {
    textures: string[];
    colors: string[];
    camera_energy: string[];
    symbolic_actions: string[];
  };
  sonic_language: {
    genre_family: string[];
    production_notes: string[];
  };
}

export interface AlbumSlot {
  track_slot: number;
  role: string;
  focus: string;
  song_here?: string; // song title or song id
}

export interface AlbumArc {
  working_title: string;
  themes: string[];
  sequence: AlbumSlot[];
  album_logline: string;
}

// New types for Lost at Treasure Island album structure
export interface Scene {
  id: string;
  title: string;
  description: string;
  image?: string;   // e.g. /images/so-high-scene-1.jpg
  notes?: string;
}

export interface Song {
  id: string;       // e.g. "so-high"
  title: string;
  energyLevel: 'low' | 'medium' | 'high';
  epId: string;     // which EP it belongs to
  scenes?: Scene[]; // storyboard scenes
}

// Legacy Song type (for existing soHighSong data structure)
export interface LegacySong {
  song_title: string;
  artist: string;
  arc: SongArc;
  one_sentence_arc: string;
  position_in_album: string;
}

export interface EP {
  id: string;       // "spring-ep", "summer-ep", etc
  title: string;    // e.g. "Spitfire"
  season: 'spring' | 'summer' | 'fall' | 'winter';
  releaseWindow: string; // human-readable, e.g. "Jul–Aug 2026"
  theme: string;         // short phrase like "Awakening"
  zoneId: string;        // links to world zone
  songs: Song[];
}

export interface Zone {
  id: string;       // "spring-bloom", "summer-volcano", etc
  name: string;     // "Bloom Pass", "Spitfire Canyon"...
  description: string;
}

export interface Worldbuilding {
  zones: Zone[];
}

export interface Album {
  title: string;          // "Lost at Treasure Island"
  world: Worldbuilding;
  eps: EP[];
}
