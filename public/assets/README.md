# Asset Folder Structure

This directory contains all game assets organized by type.

## Directory Structure

```
assets/
├── sprites/
│   ├── characters/      # Character sprite sheets
│   │   ├── player/      # Player character sprites
│   │   ├── boss/        # Boss/mentor characters
│   │   ├── mentor/      # Mentors (Anh A, S, V, L)
│   │   └── family/      # Family members (Bố Q, Mẹ L.A, em V)
│   ├── backgrounds/     # Scene backgrounds
│   │   ├── office.png
│   │   ├── home.png
│   │   ├── university.png
│   │   └── coffee-shop.png
│   ├── ui/              # UI elements
│   │   ├── dialogue-box.png
│   │   ├── buttons.png
│   │   ├── icons.png
│   │   └── stats-bar.png
│   └── props/           # Objects & items
│       ├── laptop.png
│       ├── coffee.png
│       └── dog.png
├── audio/
│   ├── music/
│   │   └── chapters/    # Chapter background music
│   │       ├── ch1_childhood.ogg
│   │       ├── ch2_collapse.ogg
│   │       └── ...
│   ├── sfx/
│   │   ├── ui/          # UI sound effects
│   │   ├── stats/       # Stats change sounds
│   │   └── achievements/# Achievement unlocks
│   └── CREDITS.txt      # Audio attributions
└── fonts/
    └── pixel-font.ttf   # Pixel-style font
```

## Asset Specifications

### Pixel Art

- **Resolution**: 32x32 or 64x64 per sprite
- **Tile Size**: 16x16 or 32x32
- **Color Palette**: 16-32 colors
- **Animation Frames**:
  - Idle: 2-4 frames
  - Walk: 4-6 frames
  - Work (typing): 2-4 frames
  - Emotions: 2-3 frames per state

### Audio

- **Music**: OGG Vorbis format, 128kbps, 44.1kHz
- **SFX**: WAV format, 16-bit, 44.1kHz

See [AUDIO_GUIDE.md](../../AUDIO_GUIDE.md) for complete specifications.

## Free Asset Resources

### Pixel Art
- [itch.io](https://itch.io/game-assets/tag-pixel-art)
- [CraftPix.net](https://craftpix.net/freebies/)
- [Kenney.nl](https://kenney.nl/assets)
- [OpenGameArt.org](https://opengameart.org/)

### Audio
- [OpenGameArt.org](https://opengameart.org/)
- [Bensound](https://www.bensound.com/)
- [FreePD](https://freepd.com/)
- [Freesound.org](https://freesound.org/)

## Notes

- All pixel art MUST use `image-rendering: pixelated` in CSS
- Always check and document licenses in CREDITS.txt
- Keep file sizes optimized for web delivery
