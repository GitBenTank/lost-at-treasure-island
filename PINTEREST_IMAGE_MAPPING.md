# Pinterest Image Mapping Guide

This document maps images from Sakari's Pinterest boards to the appropriate storyboard sections.

## Pinterest Boards

1. **Sakari Sweet Inc. (Brand Aesthetic)**: https://pin.it/4Be8YN6IJ
   - Vintage tropical sunset art
   - Orange aesthetic
   - Dark beach scenes
   - Coastal highway neon lights
   - Fiery/orange energy aesthetic
   - Desert/volcanic color palettes
   - Night pool scenes with red lighting
   - "Slow burn" text aesthetic

2. **new project (🌋)**: https://pin.it/30pqcPAhr
   - Volcano/fire photography
   - Orange aesthetic
   - Neon signs
   - Fire photography
   - Desert/volcanic themes
   - Fire and water concepts
   - Orange flame aesthetic

## Image Mapping to Storyboard Sections

### 1. SOUND & VIBE (`sound-vibe`)
**Current needs**: Dark, mysterious, majestic vibes; Post-apocalyptic, battle aesthetic

**Recommended from Pinterest**:
- Dark desert night scenes (Board 1)
- Volcanic color palettes (Board 1)
- Red and black night desert scenes (Board 1)
- Dark beach scenes (Board 1)

**Suggested filenames**:
- `sound-vibe-1.jpg` - Dark desert night / volcanic palette
- `sound-vibe-2.jpg` - Post-apocalyptic dark beach / red sky

---

### 2. VISUAL & IMAGERY (`visual-imagery`)
**Current needs**: Desert/western landscape, neo-western; Matrix/neon aesthetic

**Recommended from Pinterest**:
- Coastal highway neon lights (Board 1) ⭐ Perfect for neon aesthetic
- Vintage neon signs (Board 2) ⭐ Perfect for matrix/neon vibe
- Desert/volcanic themes (Board 2)
- Palm trees silhouetted against night sky (Board 1)

**Suggested filenames**:
- `visual-imagery-1.jpg` - Desert/western landscape with neon
- `visual-imagery-2.jpg` - Coastal highway neon lights / vintage neon signs

---

### 3. PRODUCTION NOTES (`production`)
**Current needs**: Guitar/instrument references; Studio/production setup

**Recommended from Pinterest**:
- Stage with steps (Board 1) - could work for performance/production
- Note: May need to source instrument-specific images separately

**Suggested filenames**:
- `production-1.jpg` - Stage/performance setup
- `production-2.jpg` - Studio or instrument reference

---

### 4. LYRICS (`lyrics`)
**Current needs**: Hands/labor theme; Ascension/heaven theme

**Recommended from Pinterest**:
- Hand reaching up with orange background (Board 2) ⭐ Perfect for "lifted in the heavens"
- Fire hands aesthetic (Board 2) - could represent working hands
- Three women dancing in front of sun (Board 1) - community/labor theme

**Suggested filenames**:
- `lyrics-1.jpg` - Hands/labor (fire hands or working hands)
- `lyrics-2.jpg` - Ascension (hand reaching up, orange background)

---

### 5. THEME & EMOTIONAL ARC (`vibe-theme`)
**Current needs**: Warzone/battle scene; Dancing in ruins/stars

**Recommended from Pinterest**:
- Fire photography (Board 2) ⭐ Perfect for "saint in a warzone"
- Silhouettes dancing in front of fire (Board 2) ⭐ Perfect for "dancing in ruins"
- Volcanic/fire themes (Board 2)
- "Slow burn" text aesthetic (Board 1) - could be overlay
- Orange flame aesthetic (Board 2)

**Suggested filenames**:
- `vibe-theme-1.jpg` - Fire/volcanic warzone scene
- `vibe-theme-2.jpg` - Silhouettes dancing in front of fire / orange energy

---

## Additional Scene Images (for soHighScenes.ts)

The 10 scenes could also benefit from Pinterest images:

1. **Hands & Hope** - Fire hands aesthetic (Board 2)
2. **The Lover & The Fighter** - Dim baroque / neon lighting
3. **Joy is Contagious** - Three women dancing (Board 1)
4. **Moving Boundaries** - Desert/chalk imagery
5. **Hurt People, Hurt People** - Long desert road (Board 1)
6. **Break the Pattern** - Fire and water (Board 2)
7. **Lift Off** - Hand reaching up (Board 2)
8. **Ascension** - Mid-air / floating imagery
9. **Final Montage** - Fire montage (Board 2)
10. **Afterglow** - Night rooftop / city lights (Board 1)

---

## How to Download and Add Images

### Step 1: Download Images from Pinterest

1. Open each Pinterest board in your browser
2. Click on images you want to use
3. Right-click → "Save image as..." or use Pinterest's download feature
4. Save to a temporary folder (e.g., `~/Downloads/pinterest-images/`)

### Step 2: Organize and Rename

Rename files according to the mapping above:
- `sound-vibe-1.jpg`
- `sound-vibe-2.jpg`
- `visual-imagery-1.jpg`
- `visual-imagery-2.jpg`
- `production-1.jpg`
- `production-2.jpg`
- `lyrics-1.jpg`
- `lyrics-2.jpg`
- `vibe-theme-1.jpg`
- `vibe-theme-2.jpg`

### Step 3: Copy to Project

```bash
# Copy all images to the project's public/images folder
cp ~/Downloads/pinterest-images/*.jpg /Users/bentankersley/Documents/sakari-so-high-battleboard/public/images/
```

### Step 4: Verify

The images should automatically appear in the storyboard since the paths are already configured in `src/data/wantsAndNeeds.ts`.

---

## Priority Images (Must-Have)

Based on the "So High" aesthetic, these are the most critical:

1. **Coastal highway neon lights** → `visual-imagery-2.jpg` (Neo-western + neon)
2. **Fire photography** → `vibe-theme-1.jpg` (Warzone/battle)
3. **Silhouettes dancing in front of fire** → `vibe-theme-2.jpg` (Dancing in ruins)
4. **Hand reaching up with orange background** → `lyrics-2.jpg` (Ascension)
5. **Dark desert night** → `sound-vibe-1.jpg` (Dark, mysterious)

---

## Notes

- All image paths are already configured in `src/data/wantsAndNeeds.ts`
- Images should be in `.jpg`, `.jpeg`, or `.png` format
- Recommended max width: 2000px for performance
- The app will automatically reload when images are added
