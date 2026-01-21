import { AlbumArc } from './types';

export const flightPatternAlbum: AlbumArc = {
  working_title: "Flight Pattern",
  themes: [
    "Earned joy",
    "Cycle breaking",
    "Work as devotion",
    "Love as resilience",
    "Flight as transcendence"
  ],
  sequence: [
    { track_slot: 1, role: "Roots",      focus: "Origin, soil, family" },
    { track_slot: 2, role: "Aspiration", focus: "Dreams, ambition, hope" },
    { track_slot: 3, role: "Love",       focus: "Promise, connection" },
    { track_slot: 4, role: "Fracture",   focus: "Hurt, boundaries, cycles", song_here: "So High" },
    { track_slot: 5, role: "Reflection", focus: "Isolation, reckoning" },
    { track_slot: 6, role: "Repair",     focus: "Forgiveness, healing" },
    { track_slot: 7, role: "Ascent",     focus: "Transcendence, joy, flight" }
  ],
  album_logline:
    "An album about how people learn to fly—through work, love, hurt, and healing."
};
