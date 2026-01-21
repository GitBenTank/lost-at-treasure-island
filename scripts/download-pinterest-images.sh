#!/bin/bash

# Helper script to organize Pinterest images
# This script helps rename and organize downloaded Pinterest images

echo "📌 Pinterest Image Organizer for So High Battleboard"
echo "=================================================="
echo ""
echo "This script helps you organize downloaded Pinterest images."
echo ""
echo "Instructions:"
echo "1. Download images from the Pinterest boards"
echo "2. Place them in a folder (e.g., ~/Downloads/pinterest-images/)"
echo "3. Run this script with the folder path as an argument"
echo ""
echo "Usage: ./download-pinterest-images.sh ~/Downloads/pinterest-images/"
echo ""

if [ -z "$1" ]; then
    echo "❌ Error: Please provide the source folder path"
    echo "Example: ./download-pinterest-images.sh ~/Downloads/pinterest-images/"
    exit 1
fi

SOURCE_DIR="$1"
TARGET_DIR="public/images"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ Error: Source directory '$SOURCE_DIR' does not exist"
    exit 1
fi

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

echo "📁 Source: $SOURCE_DIR"
echo "📁 Target: $TARGET_DIR"
echo ""
echo "Please manually rename your images according to this mapping:"
echo ""
echo "SOUND & VIBE:"
echo "  → sound-vibe-1.jpg (Dark desert night / volcanic palette)"
echo "  → sound-vibe-2.jpg (Post-apocalyptic dark beach)"
echo ""
echo "VISUAL & IMAGERY:"
echo "  → visual-imagery-1.jpg (Desert/western landscape with neon)"
echo "  → visual-imagery-2.jpg (Coastal highway neon lights)"
echo ""
echo "PRODUCTION NOTES:"
echo "  → production-1.jpg (Stage/performance setup)"
echo "  → production-2.jpg (Studio or instrument)"
echo ""
echo "LYRICS:"
echo "  → lyrics-1.jpg (Hands/labor - fire hands)"
echo "  → lyrics-2.jpg (Ascension - hand reaching up)"
echo ""
echo "THEME & EMOTIONAL ARC:"
echo "  → vibe-theme-1.jpg (Fire/volcanic warzone)"
echo "  → vibe-theme-2.jpg (Silhouettes dancing in fire)"
echo ""
echo "After renaming, copy them to: $TARGET_DIR"
echo ""
echo "Or use this command:"
echo "  cp \"$SOURCE_DIR\"/*.jpg \"$TARGET_DIR/\""
