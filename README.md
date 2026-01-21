# Lost at Treasure Island

Interactive album builder, world map, storyboard and EP planner for Sakari's album "Lost at Treasure Island". Includes moodboards, scene boards, seasonal EP rollout, and worldbuilding zones.

## Overview

This project is a comprehensive planning tool for Sakari's "Lost at Treasure Island" album, which is released as four seasonal EPs across 2026, then a full album with bonus tracks in Jan 2027.

### Features

- **Treasure Island Album Map** - Navigate through four zones (Bloom Pass, Spitfire Canyon, Ruined Temple, Treasure Vault)
- **Seasonal EP Planning** - View and plan each EP (Spring, Summer "Spitfire", Fall, Winter)
- **Song Storyboards** - Detailed scene-by-scene storyboards for each song
- **Visual Moodboards** - Neo-western aesthetic moodboards with image galleries
- **Scene Management** - 10-scene storyboard arcs for songs like "So High"

### Album Structure

- **Spring EP** - Soft, gentle "awakening" energy (Bloom Pass)
- **Summer EP "Spitfire"** - Fiery, sassy, gritty, warrior energy (Spitfire Canyon) ⭐ Contains "So High"
- **Fall EP** - "Reckoning" / mystery (Ruined Temple)
- **Winter EP + Bonus Tracks** - "Treasure Vault" (Treasure Vault)

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── AlbumMap.tsx          # Treasure Island map (landing page)
│   ├── EPPage.tsx            # EP detail view
│   ├── SongPage.tsx          # Song detail with scenes
│   ├── SceneCard.tsx         # Individual scene card
│   ├── WantsAndNeedsPage.tsx # Legacy storyboard view
│   └── ...
├── data/
│   ├── albumConfig.ts        # Album structure & EPs
│   ├── soHighScenes.ts       # Scene data for "So High"
│   ├── wantsAndNeeds.ts      # Storyboard sections
│   └── types.ts              # TypeScript types
└── ...
```

## Routes

- `/` - Album Map (Treasure Island zones)
- `/ep/:epId` - EP detail page
- `/song/:songId` - Song detail with scenes
- `/so-high/storyboard` - Legacy storyboard view
- `/moodboard` - Moodboard view

## Adding Images

See `PINTEREST_IMAGE_MAPPING.md` and `QUICK_START_IMAGES.md` for detailed instructions on adding images from Pinterest boards.

### Quick Image Setup

1. Download images from Pinterest:
   - [Sakari Sweet Inc. Brand Aesthetic](https://pin.it/4Be8YN6IJ)
   - [new project 🌋](https://pin.it/30pqcPAhr)

2. Place images in:
   - `public/images/` - Main storyboard images
   - `public/images/scenes/` - Scene-specific images

3. Images will appear automatically once added!

## "So High" - The Epic Battle Track

"So High" is the **epic battle/climax** track in the Summer EP "Spitfire". It features:

- **10 storyboard scenes** - From "Hands & Hope" to "Afterglow"
- **Visual aesthetic**: Black anime cinematic gothic western warrior
- **Visual elements**: Wide-brim hat, twin braids, heavy jewelry-as-armor, summer heat shimmer, dust, sparks, volcanic arena, dance-as-battle

## Documentation

- `PINTEREST_IMAGE_MAPPING.md` - Detailed Pinterest image mapping guide
- `PINTEREST_INTEGRATION_SUMMARY.md` - Integration overview
- `QUICK_START_IMAGES.md` - Quick reference for adding images
- `PROJECT_STRUCTURE.md` - Detailed project structure

## License

Private project for Sakari's album planning.