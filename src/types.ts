export type Category = "SOUND" | "VISUAL" | "LYRIC" | "VIBE";

export interface MoodCard {
  id: string;
  category: Category;
  title: string;
  description: string;
  tags: string[];
}

export type Filter = "All" | "Sound" | "Visual" | "Lyric" | "Vibe" | "Light" | "Dark" | "Battle" | "Sacred";

