# Project Structure - SO HIGH : BATTLEBOARD

## Overview
This is a React + TypeScript + Vite project for a music collaboration moodboard/storyboard.

## Directory Structure

```
sakari-so-high-battleboard/
├── public/                    # Static assets (create this folder for images)
│   └── images/               # Put your images here
│       ├── sound-vibe-1.jpg
│       ├── sound-vibe-2.jpg
│       ├── visual-imagery-1.jpg
│       ├── visual-imagery-2.jpg
│       ├── production-1.jpg
│       ├── production-2.jpg
│       ├── lyrics-1.jpg
│       ├── lyrics-2.jpg
│       ├── vibe-theme-1.jpg
│       └── vibe-theme-2.jpg
│
├── src/
│   ├── components/
│   │   ├── App.tsx           # Main app component
│   │   ├── FilterBar.tsx     # Filter buttons
│   │   ├── MoodCard.tsx      # Individual mood cards
│   │   ├── Sidebar.tsx       # Notes sidebar
│   │   └── WantsAndNeedsPage.tsx  # Full-page storyboard (THIS IS WHERE IMAGES ARE DISPLAYED)
│   │
│   ├── data/
│   │   └── wantsAndNeeds.ts  # ⭐ THIS FILE CONTAINS THE IMAGE URLS ⭐
│   │                          # Update the 'images' array in each section
│   │
│   ├── hooks/
│   │   └── useNotesStore.ts  # State management
│   │
│   ├── index.css             # Global styles
│   └── main.tsx              # Entry point
│
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.ts            # Vite configuration
└── tailwind.config.js        # Tailwind CSS config
```

## Where to Add Images

### Step 1: Create the public/images folder
```
mkdir -p public/images
```

### Step 2: Add your image files
Place your images in `public/images/` with descriptive names like:
- `sound-vibe-1.jpg` (for SOUND & VIBE section, first image)
- `sound-vibe-2.jpg` (for SOUND & VIBE section, second image)
- `visual-imagery-1.jpg` (for VISUAL & IMAGERY section, first image)
- etc.

### Step 3: Update the image URLs
Edit `src/data/wantsAndNeeds.ts` and update the `images` arrays:

```typescript
{
  id: 'sound-vibe',
  title: 'SOUND & VIBE',
  // ... other properties
  images: [
    '/images/sound-vibe-1.jpg',  // ← Update these paths
    '/images/sound-vibe-2.jpg',  // ← Update these paths
  ],
}
```

## Image Sections Needed

The storyboard has 5 sections, each needs 2 images:

1. **SOUND & VIBE** (`sound-vibe`)
   - Image 1: Dark, mysterious, majestic vibes
   - Image 2: Post-apocalyptic, battle aesthetic

2. **VISUAL & IMAGERY** (`visual-imagery`)
   - Image 1: Desert/western landscape, neo-western
   - Image 2: Matrix/neon aesthetic, doom slayer references

3. **PRODUCTION NOTES** (`production`)
   - Image 1: Guitar/instrument references
   - Image 2: Studio/production setup

4. **LYRICS** (`lyrics`)
   - Image 1: Hands/labor theme, "hardest working hands"
   - Image 2: Ascension/heaven theme, "lifted in the heavens"

5. **THEME & EMOTIONAL ARC** (`vibe-theme`)
   - Image 1: Warzone/battle scene, "saint in a warzone"
   - Image 2: Dancing in ruins/stars, final scene

## How Images Are Displayed

Images are rendered in `src/components/WantsAndNeedsPage.tsx`:
- Displayed in a 2-column grid
- Aspect ratio: 16:9 (video aspect)
- Hover effect: slight zoom
- Fallback: shows placeholder if image fails to load

## Tech Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Vite Static Assets** - Images in `public/` are served at root `/`

## Important Notes

1. **Image Path Format**: Use `/images/filename.jpg` (starts with `/`)
2. **Supported Formats**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
3. **Image Size**: Recommended max 2000px width for performance
4. **Vite Dev Server**: Images in `public/` are automatically available at `/images/`
5. **After Adding Images**: The dev server will hot-reload automatically

## Current Image Configuration

Currently using placeholder Unsplash URLs. Replace them in `src/data/wantsAndNeeds.ts`:

```typescript
export const storyboardSections: StoryboardSection[] = [
  {
    id: 'sound-vibe',
    images: ['/images/your-image-1.jpg', '/images/your-image-2.jpg'],
    // ... rest of section
  },
  // ... other sections
]
```
