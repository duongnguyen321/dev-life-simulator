# DevLife Simulator - Development Guide

## Quick Start

```bash
# Install dependencies
bun install  # or npm install

# Create asset directories
mkdir -p src/assets/sprites/{characters/player,backgrounds,ui,props}
mkdir -p src/assets/audio/{music/chapters,sfx/{ui,stats,achievements}}
mkdir -p src/assets/fonts

# Start development server
bun run dev

# Open browser to http://localhost:3000
```

## Project Status

✅ **Completed:**

- Core configuration (Vite, TypeScript, Tailwind)
- Game systems (Audio, Save, Stats)
- UI components (DialogueBox, StatsBar, Scene)
- Main screens (Menu, Game)
- Chapter 1 data structure (partial)
- Character definitions

🚧 **Next Steps:**

1. Add pixel art assets (see Free Resources below)
2. Add audio files (see AUDIO_GUIDE.md)
3. Complete Chapter 1 dialogue nodes
4. Implement remaining 8 chapters
5. Add sprite animation components
6. Test cross-platform builds

## File Structure

```
DevLife_Simulator/
├── src/
│   ├── core/              # ✅ Game systems
│   ├── components/        # ✅ React components
│   ├── data/             # 🚧 Game data (Chapter 1 partial)
│   ├── screens/          # ✅ Main screens
│   ├── store/            # ✅ State management
│   └── assets/           # ❌ Need to add assets
├── electron/             # ✅ Desktop config
├── public/               # For static assets
└── dist/                 # Build output
```

## Adding Assets

### Pixel Art

Download free pixel art from:

- [Kenney.nl](https://kenney.nl/assets) - CC0 (no attribution)
- [itch.io](https://itch.io/game-assets/tag-pixel-art)
- [OpenGameArt.org](https://opengameart.org/)

Place in:

- Characters: `src/assets/sprites/characters/`
- Backgrounds: `src/assets/sprites/backgrounds/`
- UI: `src/assets/sprites/ui/`

### Audio

Download free music from:

- [FreePD.com](https://freepd.com/) - CC0
- [Bensound](https://www.bensound.com/) - Free with attribution

See [AUDIO_GUIDE.md](./AUDIO_GUIDE.md) for chapter mappings.

Place in:

- Music: `src/assets/audio/music/chapters/`
- SFX: `src/assets/audio/sfx/`

**Don't forget to update CREDITS.txt!**

## Implementing More Chapters

1. Create `src/data/chapters/chapterX.ts` following chapter1 pattern
2. Add dialogue nodes from plot.txt
3. Create scenes with backgrounds
4. Map music from AUDIO_GUIDE.md
5. Add stat effects to choices

## Building

### Web

```bash
bun run build
bun run preview
```

### Desktop (Electron)

```bash
# Development
bun run electron:dev

# Production
bun run electron:build:mac  # or :win
```

### Mobile (Capacitor)

```bash
# iOS
bun run ios

# Android
bun run android
```

## Key Game Mechanics

### Stats System

- **Steel Mind**: Logic, cold rationality (blue #4a90e2)
- **Humanity**: Empathy, warmth (red #f56565)
- **Vision**: Ambition, foresight (purple #805ad5)

Stats influence ending:

- Steel Mind > 90 → Machine Ending
- Humanity > 90 → Pushover Ending
- Vision > 90 → Dreamer Ending
- Balanced (70+ each) → True Ending

### Dialogue System

Each choice affects stats. Edit in `src/data/chapters/`.

### Save System

3 manual save slots + 1 auto-save. Uses LocalForage (IndexedDB).

## Common Tasks

### Add a new character:

Edit `src/data/characters.ts`

### Add a new scene:

Edit chapter file, add to `scenes` array

### Change stat colors:

Edit `tailwind.config.js` and `src/styles/globals.css`

### Add new music:

1. Add file to `src/assets/audio/music/`
2. Preload in `AudioManager.ts`
3. Update `CREDITS.txt`

## Troubleshooting

**Pixel art looks blurry:**

- Ensure `pixel-art` class is applied
- Check `image-rendering: pixelated` in CSS

**Audio not playing:**

- Check file paths in AudioManager
- Ensure files are in correct format (OGG for music, WAV for SFX)
- Preload music before playing

**Save not working:**

- Check browser console for IndexedDB errors
- Clear browser cache and try again

## Resources

- [Plot](./plot.txt) - Full story
- [Tech Stack](./TECH_STACK.md) - Architecture details
- [Audio Guide](./AUDIO_GUIDE.md) - Music specifications
- [Task List](../.gemini/antigravity/brain/.../task.md) - Development checklist

---

**Ready to code!** Start by adding assets, then complete Chapter 1 dialogues.
