# DevLife Simulator

**The Architect: Source Code of a Life**

A narrative-driven pixel art game following the life journey of a Vietnamese developer from childhood to billionaire. Built with React + TypeScript + Vite for cross-platform deployment.

## 🎮 About

DevLife Simulator is an interactive visual novel game that tells the story of a developer's life, inspired by real events. Navigate through 9 chapters, make choices that affect your three core stats (Steel Mind, Humanity, Vision), and shape your destiny.

### Key Features

- 🎨 **Pixel Art Aesthetic** with retro charm
- 📖 **9 Chapters** spanning ages 0-55+
- 🎵 **Dynamic Soundtrack** adapting to story moments
- 📊 **Hidden Stats System** influencing the narrative
- 🏆 **Multiple Endings** based on your choices
- 🌍 **Cross-Platform** - Desktop, Mobile, Web

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Audio**: Howler.js
- **Save System**: LocalForage
- **Styling**: Tailwind CSS
- **Desktop**: Electron
- **Mobile**: Capacitor

## 📦 Installation

### Prerequisites

- Node.js 20+ or Bun
- Git

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd DevLife_Simulator

# Install dependencies (using bun, recommended)
bun install

# Or using npm
npm install
```

## 🚀 Development

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 🖥️ Platform Builds

### Desktop (Electron)

```bash
# Development mode
bun run electron:dev

# Build for macOS
bun run electron:build:mac

# Build for Windows
bun run electron:build:win
```

### Mobile (Capacitor)

```bash
# iOS
bun run ios

# Android
bun run android
```

## 📁 Project Structure

```
src/
├── core/             # Core game systems
│   ├── AudioManager.ts
│   ├── SaveSystem.ts
│   └── StatsManager.ts
├── components/       # React components
│   ├── UI/          # UI components
│   └── Sprites/     # Sprite components
├── data/            # Game data
│   ├── types.ts
│   ├── chapters/
│   └── characters.json
├── screens/         # Main screens
│   ├── MainMenu.tsx
│   └── GameScreen.tsx
├── store/           # State management
├── styles/          # CSS files
└── assets/          # Game assets
    ├── sprites/
    ├── audio/
    └── fonts/
```

## 🎨 Assets

### Pixel Art Specs

- **Resolution**: 32x32 or 64x64 per sprite
- **Color Palette**: 16-32 colors
- **Animation**: 2-6 frames per action
- **Rendering**: `image-rendering: pixelated`

### Audio

See [AUDIO_GUIDE.md](./AUDIO_GUIDE.md) for complete music and SFX specifications.

## 🎯 Game Mechanics

### Hidden Stats

- **Steel Mind** (🔵): Logic, Stoicism, Emotional Control
- **Humanity** (🔴): Empathy, Connection, Compassion
- **Vision** (🟣): Ambition, System Thinking, Foresight

### Endings

- **True Ending**: Balanced excellence
- **Machine Ending**: Steel Mind > 90
- **Pushover Ending**: Humanity > 90
- **Dreamer Ending**: Vision > 90
- **Normal Ending**: Balanced but average

## 📝 License

This game is based on a true story. All rights reserved.

## 🙏 Credits

See [CREDITS.txt](./src/assets/audio/CREDITS.txt) for music and asset attributions.

## 💡 Development Notes

### Key Design Principles

1. **KISS** (Keep It Simple, Stupid)
2. **YAGNI** (You Aren't Gonna Need It)
3. **DRY** (Don't Repeat Yourself)

### Contributing

This is a personal project based on the author's life story. Contributions are not currently accepted.

---

Made with ❤️ and Code by [Author Name]
