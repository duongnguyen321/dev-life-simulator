# 🎮 DEVLIFE SIMULATOR - TECH STACK RECOMMENDATION

## 📋 TÓM TẮT

Game narrative/visual novel offline, cross-platform (iOS, Android, PC, Mac, Steam).
Developer biết: **JavaScript, TypeScript**

---

## ⭐ KIẾN TRÚC TỔNG QUAN

```
┌─────────────────────────────────────────────┐
│     Core Game (React + TypeScript)          │
│     ├── UI Components                       │
│     ├── Game Logic & State Management       │
│     ├── Dialogue System                     │
│     ├── Save/Load System                    │
│     └── Stats System (Steel/Humanity/Vision)│
└─────────────────────────────────────────────┘
                    ↓
        ┌───────────┴───────────┐
        ↓                       ↓
┌───────────────┐      ┌────────────────┐
│   ELECTRON    │      │   CAPACITOR    │
│  (Desktop)    │      │   (Mobile)     │
│  PC/Mac/Steam │      │  iOS/Android   │
└───────────────┘      └────────────────┘
```

---

## 🛠️ TECH STACK CHI TIẾT

### **1. Core Framework**

| Công nghệ      | Version | Mục đích                         |
| -------------- | ------- | -------------------------------- |
| **React**      | 18.x    | UI Framework                     |
| **TypeScript** | 5.x     | Type-safe development            |
| **Vite**       | 5.x     | Build tool & Dev server          |
| **Zustand**    | 4.x     | State management (nhẹ hơn Redux) |

### **2. Desktop Platforms (PC, Mac, Steam)**

| Công nghệ            | Mục đích                                     |
| -------------------- | -------------------------------------------- |
| **Electron**         | Wrap React app thành native desktop app      |
| **electron-builder** | Build & package cho Windows/Mac/Linux        |
| **greenworks**       | Steam integration (achievements, cloud save) |

### **3. Mobile Platforms (iOS, Android)**

| Công nghệ                 | Mục đích                               |
| ------------------------- | -------------------------------------- |
| **Capacitor**             | Wrap React app thành native mobile app |
| **@capacitor/ios**        | iOS build                              |
| **@capacitor/android**    | Android build                          |
| **@capacitor/filesystem** | File system access cho save game       |

### **4. UI/UX Libraries**

| Công nghệ         | Mục đích                    |
| ----------------- | --------------------------- |
| **Tailwind CSS**  | Utility-first CSS framework |
| **Framer Motion** | Animations & transitions    |
| **React Router**  | Navigation giữa các scenes  |

### **5. Game Systems**

| Công nghệ         | Mục đích                            |
| ----------------- | ----------------------------------- |
| **localforage**   | Offline storage (IndexedDB wrapper) |
| **Howler.js**     | Audio engine (music, SFX)           |
| **react-i18next** | Localization (Vietnamese/English)   |

### **6. Audio Assets**

| Resource        | Mục đích                                |
| --------------- | --------------------------------------- |
| **OpenGameArt** | Free music (CC0, CC-BY licenses)        |
| **Bensound**    | Cinematic piano, emotional soundtracks  |
| **FreePD**      | Public domain music (no attribution)    |
| **Freesound**   | Sound effects (UI, stats, achievements) |

> 📄 **Chi tiết**: Xem [AUDIO_GUIDE.md](./AUDIO_GUIDE.md) cho full music mapping theo chapters

---

## 📦 PACKAGE.JSON

```json
{
	"name": "devlife-simulator",
	"version": "1.0.0",
	"type": "module",
	"scripts": {
		"dev": "vite",
		"build": "tsc && vite build",
		"preview": "vite preview",
		"electron:dev": "concurrently \"vite\" \"electron .\"",
		"electron:build:mac": "electron-builder --mac",
		"electron:build:win": "electron-builder --win",
		"ios": "cap sync ios && cap open ios",
		"android": "cap sync android && cap open android"
	},
	"dependencies": {
		"react": "^18.2.0",
		"react-dom": "^18.2.0",
		"react-router-dom": "^6.20.0",
		"zustand": "^4.4.0",
		"framer-motion": "^10.16.0",
		"howler": "^2.2.3",
		"localforage": "^1.10.0",
		"react-i18next": "^13.5.0"
	},
	"devDependencies": {
		"@types/react": "^18.2.0",
		"@types/node": "^20.0.0",
		"typescript": "^5.2.0",
		"vite": "^5.0.0",
		"@vitejs/plugin-react": "^4.2.0",
		"tailwindcss": "^3.3.0",
		"autoprefixer": "^10.4.0",
		"postcss": "^8.4.0",
		"electron": "^27.0.0",
		"electron-builder": "^24.6.0",
		"concurrently": "^8.2.0",
		"@capacitor/cli": "^5.5.0",
		"@capacitor/core": "^5.5.0",
		"@capacitor/ios": "^5.5.0",
		"@capacitor/android": "^5.5.0",
		"@capacitor/filesystem": "^5.1.0"
	}
}
```

> **Note cho Pixel Art**: Package.json không cần thay đổi! Pixel art hoạt động hoàn hảo với React + Vite. Chỉ cần CSS `image-rendering: pixelated` là đủ.

---

## 🗂️ PROJECT STRUCTURE (Pixel Art Version)

```
DevLife_Simulator/
├── src/
│   ├── core/                    # Game engine
│   │   ├── GameLoop.ts
│   │   ├── SaveSystem.ts
│   │   ├── StatsManager.ts
│   │   └── SpriteManager.ts     # NEW: Sprite animation controller
│   ├── systems/
│   │   ├── dialogue/
│   │   ├── quests/
│   │   └── events/
│   ├── data/                    # JSON data
│   │   ├── chapters/
│   │   ├── characters.json
│   │   ├── quests.json
│   │   └── sprites.json         # NEW: Sprite metadata
│   ├── components/              # React components
│   │   ├── UI/
│   │   │   ├── DialogueBox.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   └── PixelButton.tsx  # NEW: Pixel-styled button
│   │   ├── Sprites/             # NEW: Sprite components
│   │   │   ├── Character.tsx
│   │   │   ├── AnimatedSprite.tsx
│   │   │   └── Scene.tsx
│   │   ├── Chapters/
│   │   └── Characters/
│   ├── screens/
│   │   ├── MainMenu.tsx
│   │   └── GameScreen.tsx
│   ├── hooks/                   # Custom hooks
│   │   └── useSprite.ts         # NEW: Sprite animation hook
│   ├── store/                   # Zustand stores
│   ├── assets/
│   │   ├── sprites/             # NEW: Pixel art sprites
│   │   │   ├── characters/      # Character spritesheets
│   │   │   │   ├── player/
│   │   │   │   │   ├── idle.png
│   │   │   │   │   ├── walk.png
│   │   │   │   │   ├── work.png
│   │   │   │   │   └── stressed.png
│   │   │   │   ├── boss/
│   │   │   │   ├── mentor/
│   │   │   │   └── family/
│   │   │   ├── backgrounds/     # Scene backgrounds
│   │   │   │   ├── office.png
│   │   │   │   ├── home.png
│   │   │   │   ├── university.png
│   │   │   │   └── coffee-shop.png
│   │   │   ├── ui/              # UI elements
│   │   │   │   ├── dialogue-box.png
│   │   │   │   ├── buttons.png
│   │   │   │   ├── icons.png
│   │   │   │   └── stats-bar.png
│   │   │   └── props/           # Objects & items
│   │   │       ├── laptop.png
│   │   │       ├── coffee.png
│   │   │       └── dog.png
│   │   ├── audio/
│   │   └── fonts/
│   │       └── pixel-font.ttf   # NEW: Pixel-style font
│   ├── styles/
│   │   └── pixel-art.css        # NEW: Pixel art CSS
│   ├── App.tsx
│   └── main.tsx
├── electron/                    # Desktop specific
│   ├── main.ts
│   └── preload.ts
├── capacitor/                   # Mobile specific
│   └── capacitor.config.ts
├── public/
├── package.json
└── vite.config.ts
```

---

## 🎨 UI/UX APPROACH

### **Art Style Options**

| Style              | Ưu điểm                   | Nhược điểm                       | Effort | Free Assets |
| ------------------ | ------------------------- | -------------------------------- | ------ | ----------- |
| **Visual Novel**   | Đơn giản, focus vào story | Cần vẽ character portraits       | Medium | ⭐⭐⭐      |
| **Pixel Art**      | Retro, cảm xúc, nostalgic | Cần consistency trong art style  | Medium | ⭐⭐⭐⭐⭐  |
| **Minimalist UI**  | Dễ implement với Tailwind | Có thể nhạt nếu không design tốt | Low    | ⭐⭐⭐⭐⭐  |
| **Code Aesthetic** | Phù hợp với theme Dev     | Cần balance giữa tech & warmth   | Medium | ⭐⭐⭐⭐    |

**👉 ĐỀ XUẤT MỚI: Pixel Art + Code Aesthetic (Hybrid)**

- **Pixel Art** cho characters, scenes, animations
- **Minimalist UI** cho dialogue boxes, menus, stats
- Kết hợp retro charm + modern interface

### **Color Scheme**

```css
/* Theme colors */
--steel-mind: #4a90e2; /* Cold blue */
--humanity: #f56565; /* Warm red */
--vision: #805ad5; /* Purple */
--bg-primary: #1a202c; /* Dark */
--bg-secondary: #2d3748; /* Gray */
--text: #e2e8f0; /* Light gray */
```

### **Pixel Art Configuration**

```css
/* Critical CSS for Pixel Art Rendering */
.pixel-art {
	image-rendering: pixelated;
	image-rendering: -moz-crisp-edges;
	image-rendering: crisp-edges;
	-ms-interpolation-mode: nearest-neighbor;
}

/* Sprite Animation */
.sprite-idle {
	animation: sprite-idle 1s steps(2) infinite;
}

.sprite-walk {
	animation: sprite-walk 0.6s steps(4) infinite;
}

@keyframes sprite-idle {
	from {
		background-position-x: 0;
	}
	to {
		background-position-x: -64px;
	}
}
```

### **Pixel Art Specs cho DevLife**

```yaml
Resolution: 32x32 hoặc 64x64 per sprite
Tile Size: 16x16 hoặc 32x32
Color Palette:
  - Primary: 16-32 colors
  - Code theme: Blues (#4A90E2), Greens (#48BB78), Dark grays (#2D3748)
  - Warm moments: Oranges (#ED8936), Yellows (#ECC94B)
  - Stress: Reds (#F56565)
Animation Frames:
  - Idle: 2-4 frames
  - Walk: 4-6 frames
  - Work (typing): 2-4 frames
  - Emotions: 2-3 frames per state
```

---

## 🎨 FREE PIXEL ART ASSETS

### **Top Resources (100% Free, Commercial Use)**

#### **1. [itch.io](https://itch.io/game-assets/tag-pixel-art)** ⭐⭐⭐⭐⭐

- **Ưu điểm**: Hàng ngàn asset packs miễn phí
- **License**: Đa số cho phép commercial use, check từng pack
- **Phù hợp**: Characters, office tilesets, UI elements, props
- **Gợi ý tìm kiếm**: "office pixel art", "developer character", "tech UI"

#### **2. [CraftPix.net/freebies](https://craftpix.net/freebies/)** ⭐⭐⭐⭐⭐

- **Ưu điểm**: Chất lượng cao, organized by category
- **License**: Free for commercial use
- **Phù hợp**: Complete game kits, GUI, tilesets
- **Categories**: 2D Characters, Game Kits, GUI, Backgrounds

#### **3. [Kenney.nl](https://kenney.nl/assets)** ⭐⭐⭐⭐⭐

- **Ưu điểm**: CC0 License (Public Domain), không cần credit
- **License**: CC0 - Use freely, no attribution required
- **Phù hợp**: UI packs, pixel fonts, icons
- **Note**: Tất cả assets 100% free forever

#### **4. [OpenGameArt.org](https://opengameart.org/)** ⭐⭐⭐⭐

- **Ưu điểm**: Community-driven, diverse styles
- **License**: CC licenses (check each asset)
- **Phù hợp**: Characters, backgrounds, complete sets

#### **5. [Game-Icons.net](https://game-icons.net/)** ⭐⭐⭐⭐

- **Ưu điểm**: 4000+ icons, customizable colors
- **License**: CC BY 3.0
- **Phù hợp**: Achievement icons, UI elements, stats icons

### **Asset Packs Cụ Thể Cho DevLife Simulator**

```markdown
**Characters:**

- Office workers (sitting, walking, stressed, happy states)
- Developer với laptop
- Boss/mentor characters
- Family members (parents, wife, children)
- Age progression sprites (young → middle-aged → elderly)

**Environments:**

- Office cubicles & meeting rooms
- Home interiors (bedroom, kitchen, living room)
- University campus
- Coffee shops
- Tech company offices
- Co-working spaces

**UI Elements:**

- Dialogue boxes với scanlines effect
- Terminal-style windows
- Stats bars (health/mana style for Steel Mind/Humanity/Vision)
- Pixel buttons & icons
- Achievement badges

**Props:**

- Computers/laptops (various eras: old PC → modern MacBook)
- Coffee cups & energy drinks
- Code editor screens
- Books, documents
- Stress indicators (sweat drops, "!" marks)
- Pets (dogs: Miu & Bi)

**Audio:** (See [AUDIO_GUIDE.md](./AUDIO_GUIDE.md))

- Background music cho 9 chapters
- UI sound effects
- Stats change sounds
- Achievement unlocks
```

### **Tools Miễn Phí Để Edit Pixel Art**

| Tool             | Price | Platform      | Best For                          |
| ---------------- | ----- | ------------- | --------------------------------- |
| **Piskel**       | Free  | Web/Desktop   | Quick edits, spritesheet creation |
| **LibreSprite**  | Free  | Win/Mac/Linux | Full-featured (Aseprite fork)     |
| **GraphicsGale** | Free  | Windows       | Animation, sprite editing         |
| **Aseprite**     | $20   | Win/Mac/Linux | Professional (worth buying)       |

---

## 💾 SAVE SYSTEM

### **Storage Strategy**

| Platform | Storage Method               |
| -------- | ---------------------------- |
| Desktop  | LocalStorage + File system   |
| Mobile   | Capacitor Filesystem API     |
| Steam    | Steam Cloud (via greenworks) |

### **Save Data Structure**

```typescript
interface SaveData {
	version: string;
	playerName: string;
	chapter: number;
	scene: string;
	stats: {
		steelMind: number;
		humanity: number;
		vision: number;
	};
	inventory: string[];
	flags: Record<string, boolean>;
	achievements: string[];
	playtime: number;
	timestamp: number;
}
```

---

## 🚀 BUILD & DEPLOYMENT

### **Desktop (PC/Mac)**

```bash
# Development
npm run electron:dev

# Build
npm run electron:build:mac   # macOS
npm run electron:build:win   # Windows

# Output:
# - dist_electron/DevLife-Simulator-1.0.0.dmg
# - dist_electron/DevLife-Simulator-Setup-1.0.0.exe
```

### **Steam**

1. Build desktop version
2. Tích hợp greenworks SDK
3. Upload qua Steamworks Publisher
4. Setup achievements, cloud save

### **Mobile (iOS/Android)**

```bash
# Build web assets
npm run build

# iOS
npm run ios
# Mở Xcode → Archive → Upload to App Store

# Android
npm run android
# Mở Android Studio → Build → Generate Signed APK
```

---

## 📊 SO SÁNH VỚI UNITY

| Tiêu chí              | React/Electron/Capacitor | Unity                    |
| --------------------- | ------------------------ | ------------------------ |
| **Learning curve**    | ✅ Đã biết JS/TS         | ❌ Phải học C#           |
| **Development speed** | ✅ Nhanh (web tech)      | ⚠️ Chậm hơn              |
| **Cross-platform**    | ✅ Tốt                   | ✅ Rất tốt               |
| **Bundle size**       | ⚠️ 50-80MB               | ❌ 100-200MB             |
| **Performance**       | ✅ Đủ cho narrative game | ✅ Tốt cho mọi loại game |
| **Steam integration** | ⚠️ Cần setup thủ công    | ✅ Built-in              |
| **Asset ecosystem**   | ⚠️ Hạn chế               | ✅ Unity Asset Store     |
| **Phù hợp**           | ✅ **BEST cho case này** | Overkill                 |

---

## 🎯 LỘ TRÌNH TRIỂN KHAI

### **Phase 1: Setup (1 tuần)**

- [ ] Init Vite + React + TypeScript
- [ ] Setup Tailwind CSS
- [ ] Config Electron basic
- [ ] Config Capacitor basic

### **Phase 2: Core Systems (2-3 tuần)**

- [ ] Dialogue engine
- [ ] Stats system
- [ ] Save/Load system
- [ ] UI components base

### **Phase 3: Chapter 1 Prototype (2-3 tuần)**

- [ ] Import dữ liệu Chapter 1
- [ ] Character portraits
- [ ] Background music
- [ ] Test trên Desktop + Mobile

### **Phase 4: Full Production (3-6 tháng)**

- [ ] Implement 9 chapters
- [ ] Polish UI/UX
- [ ] Achievements system
- [ ] Localization

### **Phase 5: Launch (1 tháng)**

- [ ] Beta testing
- [ ] Steam setup
- [ ] App Store submission
- [ ] Marketing

---

## 💰 CHI PHÍ LIÊN QUAN

| Item                | Chi phí     | Ghi chú            |
| ------------------- | ----------- | ------------------ |
| **Development**     | FREE        | Tự code            |
| **Apple Developer** | $99/năm     | Submit iOS app     |
| **Google Play**     | $25 một lần | Submit Android app |
| **Steam Direct**    | $100/game   | Publish trên Steam |
| **Art/Music**       | Varies      | Nếu không tự làm   |
| **Domain/Hosting**  | $10-20/năm  | Marketing website  |

**Total minimum: ~$234 năm đầu**

---

## ⚠️ LIMITATIONS & WORKAROUNDS

### **1. Performance**

- **Issue**: React không nhanh bằng native game engine
- **Solution**: Game này 90% UI/text, không cần heavy rendering

### **2. Bundle Size**

- **Issue**: Electron app khá nặng (~80MB)
- **Solution**: Code splitting, lazy loading assets

### **3. Steam Integration**

- **Issue**: greenworks có thể khó setup
- **Solution**: Có thể ra PC version trước, Steam sau

### **4. Mobile Performance**

- **Issue**: Capacitor có thể lag trên máy cũ
- **Solution**: Optimize images, lazy load chapters

---

## 🎁 ƯU ĐIỂM CỦA APPROACH NÀY

✅ **Dùng skill sẵn có** - Không mất thời gian học Unity/C#  
✅ **Rapid development** - Web tech rất nhanh để prototype  
✅ **Single codebase** - 1 code cho tất cả platform  
✅ **Easy debugging** - Chrome DevTools quen thuộc  
✅ **Flexible UI** - Tailwind + React dễ design  
✅ **Web deployment** - Bonus: Có thể ra web version

---

## 📚 TÀI LIỆU THAM KHẢO

- [Electron Docs](https://www.electronjs.org/docs/latest)
- [Capacitor Docs](https://capacitorjs.com/docs)
- [Zustand Guide](https://github.com/pmndrs/zustand)
- [Framer Motion](https://www.framer.com/motion/)
- [Greenworks (Steam)](https://github.com/greenheartgames/greenworks)

---

## 🤔 QUYẾT ĐỊNH TIẾP THEO

Sau khi đọc document này, bạn cần quyết định:

1. **Có đồng ý dùng React/TypeScript approach không?**
2. **Ưu tiên platform nào trước?** (Desktop/Mobile/Steam)
3. **Art style nào?** (Visual Novel/Pixel/Minimalist)
4. **Có muốn prototype ngay không?**

---

## 💻 IMPLEMENTATION CODE EXAMPLES

### **1. Pixel Sprite Component**

```typescript
// src/components/Sprites/AnimatedSprite.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSpriteProps {
	spriteSheet: string;
	frameWidth: number;
	frameHeight: number;
	frameCount: number;
	fps?: number;
	loop?: boolean;
	className?: string;
}

export const AnimatedSprite = ({
	spriteSheet,
	frameWidth,
	frameHeight,
	frameCount,
	fps = 8,
	loop = true,
	className = '',
}: AnimatedSpriteProps) => {
	const [currentFrame, setCurrentFrame] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentFrame((prev) => {
				if (prev >= frameCount - 1) {
					return loop ? 0 : prev;
				}
				return prev + 1;
			});
		}, 1000 / fps);

		return () => clearInterval(interval);
	}, [frameCount, fps, loop]);

	return (
		<div
			className={`pixel-art ${className}`}
			style={{
				width: frameWidth,
				height: frameHeight,
				overflow: 'hidden',
			}}
		>
			<img
				src={spriteSheet}
				alt='sprite'
				style={{
					transform: `translateX(-${currentFrame * frameWidth}px)`,
					imageRendering: 'pixelated',
				}}
			/>
		</div>
	);
};
```

### **2. Character Component với Multiple States**

```typescript
// src/components/Sprites/Character.tsx
import { AnimatedSprite } from './AnimatedSprite';

type CharacterState = 'idle' | 'walk' | 'work' | 'stressed' | 'happy';

interface CharacterProps {
	state: CharacterState;
	direction?: 'left' | 'right';
	scale?: number;
}

const SPRITE_CONFIGS = {
	idle: { path: '/sprites/player/idle.png', frames: 2, fps: 2 },
	walk: { path: '/sprites/player/walk.png', frames: 4, fps: 8 },
	work: { path: '/sprites/player/work.png', frames: 3, fps: 6 },
	stressed: { path: '/sprites/player/stressed.png', frames: 2, fps: 4 },
	happy: { path: '/sprites/player/happy.png', frames: 2, fps: 3 },
};

export const Character = ({
	state,
	direction = 'right',
	scale = 2,
}: CharacterProps) => {
	const config = SPRITE_CONFIGS[state];

	return (
		<div
			style={{
				transform: `scaleX(${direction === 'left' ? -1 : 1}) scale(${scale})`,
				transformOrigin: 'center',
			}}
		>
			<AnimatedSprite
				spriteSheet={config.path}
				frameWidth={64}
				frameHeight={64}
				frameCount={config.frames}
				fps={config.fps}
			/>
		</div>
	);
};
```

### **3. Scene Component với Background**

```typescript
// src/components/Sprites/Scene.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SceneProps {
	background: string;
	children: ReactNode;
	transition?: boolean;
}

export const Scene = ({
	background,
	children,
	transition = true,
}: SceneProps) => {
	return (
		<motion.div
			className='scene-container'
			initial={transition ? { opacity: 0 } : undefined}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			style={{
				width: '100%',
				height: '100vh',
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				imageRendering: 'pixelated',
				position: 'relative',
			}}
		>
			{children}
		</motion.div>
	);
};
```

### **4. Pixel Dialog Box**

```typescript
// src/components/UI/PixelDialogBox.tsx
import { motion } from 'framer-motion';

interface DialogProps {
	speaker?: string;
	text: string;
	choices?: Array<{ id: string; text: string; onClick: () => void }>;
}

export const PixelDialogBox = ({ speaker, text, choices }: DialogProps) => {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className='pixel-dialog-box'
			style={{
				position: 'absolute',
				bottom: '20px',
				left: '50%',
				transform: 'translateX(-50%)',
				width: '90%',
				maxWidth: '800px',
				background: 'url(/sprites/ui/dialogue-box.png)',
				backgroundSize: '100% 100%',
				imageRendering: 'pixelated',
				padding: '40px',
				fontFamily: '"Xanh Mono", monospace',
				fontSize: '14px',
				color: '#E2E8F0',
			}}
		>
			{speaker && (
				<div
					className='speaker-name'
					style={{ marginBottom: '10px', color: '#4A90E2' }}
				>
					{speaker}
				</div>
			)}
			<div className='dialog-text' style={{ lineHeight: '1.8' }}>
				{text}
			</div>
			{choices && choices.length > 0 && (
				<div
					style={{
						marginTop: '20px',
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
					}}
				>
					{choices.map((choice) => (
						<button
							key={choice.id}
							onClick={choice.onClick}
							className='pixel-button'
							style={{
								background: 'url(/sprites/ui/button.png)',
								backgroundSize: '100% 100%',
								imageRendering: 'pixelated',
								border: 'none',
								padding: '15px 30px',
								fontFamily: '"Xanh Mono", monospace',
								fontSize: '12px',
								color: '#FFF',
								cursor: 'pointer',
							}}
						>
							{choice.text}
						</button>
					))}
				</div>
			)}
		</motion.div>
	);
};
```

### **5. Stats Bar Component**

```typescript
// src/components/UI/StatsBar.tsx
import { motion } from 'framer-motion';

interface StatsBarProps {
	steelMind: number;
	humanity: number;
	vision: number;
}

export const StatsBar = ({ steelMind, humanity, vision }: StatsBarProps) => {
	const StatItem = ({
		label,
		value,
		color,
	}: {
		label: string;
		value: number;
		color: string;
	}) => (
		<div style={{ marginBottom: '15px' }}>
			<div
				style={{
					fontSize: '10px',
					marginBottom: '5px',
					fontFamily: '"Xanh Mono"',
				}}
			>
				{label}
			</div>
			<div
				style={{
					width: '200px',
					height: '20px',
					background: '#2D3748',
					border: '2px solid #4A5568',
					imageRendering: 'pixelated',
					position: 'relative',
				}}
			>
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: `${value}%` }}
					transition={{ duration: 0.5 }}
					style={{
						height: '100%',
						background: color,
						imageRendering: 'pixelated',
					}}
				/>
				<div
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						fontSize: '10px',
						fontFamily: '"Xanh Mono"',
						color: '#FFF',
						textShadow: '2px 2px 0 #000',
					}}
				>
					{value}
				</div>
			</div>
		</div>
	);

	return (
		<div
			style={{
				position: 'absolute',
				top: '20px',
				right: '20px',
				padding: '20px',
			}}
		>
			<StatItem label='STEEL MIND' value={steelMind} color='#4A90E2' />
			<StatItem label='HUMANITY' value={humanity} color='#F56565' />
			<StatItem label='VISION' value={vision} color='#805AD5' />
		</div>
	);
};
```

### **6. Custom Hook cho Sprite Animation**

```typescript
// src/hooks/useSprite.ts
import { useState, useEffect } from 'react';

interface UseSpriteOptions {
	frameCount: number;
	fps?: number;
	loop?: boolean;
	autoPlay?: boolean;
}

export const useSprite = ({
	frameCount,
	fps = 8,
	loop = true,
	autoPlay = true,
}: UseSpriteOptions) => {
	const [currentFrame, setCurrentFrame] = useState(0);
	const [isPlaying, setIsPlaying] = useState(autoPlay);

	useEffect(() => {
		if (!isPlaying) return;

		const interval = setInterval(() => {
			setCurrentFrame((prev) => {
				if (prev >= frameCount - 1) {
					if (!loop) {
						setIsPlaying(false);
						return prev;
					}
					return 0;
				}
				return prev + 1;
			});
		}, 1000 / fps);

		return () => clearInterval(interval);
	}, [frameCount, fps, loop, isPlaying]);

	const play = () => setIsPlaying(true);
	const pause = () => setIsPlaying(false);
	const reset = () => {
		setCurrentFrame(0);
		setIsPlaying(false);
	};

	return { currentFrame, isPlaying, play, pause, reset };
};
```

---

## ⚡ PERFORMANCE OPTIMIZATION

### **Pixel Art Best Practices**

```typescript
// vite.config.ts - Optimize image loading
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					// Keep pixel art in separate chunk
					if (
						assetInfo.name?.endsWith('.png') &&
						assetInfo.name.includes('sprite')
					) {
						return 'sprites/[name]-[hash][extname]';
					}
					return 'assets/[name]-[hash][extname]';
				},
			},
		},
	},
	assetsInclude: ['**/*.png', '**/*.jpg'],
});
```

### **Lazy Loading Sprites**

```typescript
// src/utils/spriteLoader.ts
const spriteCache = new Map<string, HTMLImageElement>();

export const preloadSprite = (src: string): Promise<HTMLImageElement> => {
	if (spriteCache.has(src)) {
		return Promise.resolve(spriteCache.get(src)!);
	}

	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			spriteCache.set(src, img);
			resolve(img);
		};
		img.onerror = reject;
		img.src = src;
	});
};

export const preloadChapterSprites = async (chapter: number) => {
	const sprites = [
		`/sprites/chapters/ch${chapter}/background.png`,
		`/sprites/chapters/ch${chapter}/characters.png`,
	];

	await Promise.all(sprites.map(preloadSprite));
};
```

### **CSS Optimization**

```css
/* src/styles/pixel-art.css */

/* Critical: Prevent blurry pixels */
.pixel-art,
.pixel-art * {
	image-rendering: -moz-crisp-edges;
	image-rendering: -webkit-crisp-edges;
	image-rendering: pixelated;
	image-rendering: crisp-edges;
	-ms-interpolation-mode: nearest-neighbor;
}

/* Prevent anti-aliasing on transforms */
.pixel-sprite {
	transform: translateZ(0);
	backface-visibility: hidden;
	-webkit-font-smoothing: none;
	-moz-osx-font-smoothing: grayscale;
}

/* Pixel-perfect positioning */
.pixel-container {
	transform: translate3d(0, 0, 0);
	will-change: transform;
}

/* Retro scanlines effect (optional) */
.scanlines::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: repeating-linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.1),
		rgba(0, 0, 0, 0.1) 1px,
		transparent 1px,
		transparent 2px
	);
	pointer-events: none;
	z-index: 1000;
}
```

---

## 🎯 UPDATED RECOMMENDATIONS

### **Final Tech Stack cho DevLife Simulator**

```yaml
Art Style: Pixel Art (32x32 or 64x64 sprites) + Minimalist UI
Core: React 18 + TypeScript + Vite
State: Zustand (lightweight)
Animation: Framer Motion + CSS keyframes
UI Framework: Tailwind CSS
Desktop: Electron
Mobile: Capacitor
Audio: Howler.js

Assets:
  - Free pixel art from itch.io, CraftPix, Kenney.nl
  - Custom edits với Piskel/LibreSprite
  - Pixel fonts: "Xanh Mono" (Google Fonts)

File Structure:
  - Sprites organized by type (characters/backgrounds/ui/props)
  - Lazy load per chapter
  - Spritesheets cho animations
```

### **Why This Stack Works**

✅ **No Unity/C# learning curve** - Dùng JS/TS bạn đã biết  
✅ **Free assets abundant** - Hàng ngàn pixel art free  
✅ **Fast development** - React components reusable  
✅ **Small bundle size** - Pixel art PNGs rất nhẹ (< 10KB/sprite)  
✅ **Cross-platform** - Một code base cho tất cả  
✅ **Nostalgia factor** - Pixel art phù hợp với dev culture  
✅ **Easy to iterate** - Swap sprites dễ dàng

---

## 📚 LEARNING RESOURCES

### **Pixel Art Tutorials**

- [Pixel Art Tutorial - Lospec](https://lospec.com/articles)
- [Pixel Art for Games - YouTube](https://www.youtube.com/c/MortMort)
- [Pixel Art Academy](https://pixelart.academy/)

### **React + Game Dev**

- [React Game Dev Tutorial](https://www.youtube.com/watch?v=fLeN_kn_HJk)
- [Framer Motion Animations](https://www.framer.com/motion/)
- [Electron + React Setup](https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites)

### **Free Pixel Fonts**

- ["Xanh Mono"](https://fonts.google.com/specimen/Press+Start+2P) - Google Fonts
- [Pixel Font Collection](https://www.dafont.com/bitmap.php)
- [VT323](https://fonts.google.com/specimen/VT323) - Terminal style

---

## 🤔 QUYẾT ĐỊNH CUỐI CÙNG

Sau khi đọc document này, bạn cần quyết định:

1. **✅ Có đồng ý dùng React/TypeScript + Pixel Art approach không?**
2. **🎨 Art style:** Pixel Art (32x32 hoặc 64x64)?
3. **� Ưu tiên platform nào trước?** (Desktop → Mobile → Steam)
4. **�🚀 Có muốn prototype ngay không?**

### **Next Steps nếu Approve:**

```bash
# 1. Init project
npm create vite@latest devlife-simulator -- --template react-ts
cd devlife-simulator

# 2. Install dependencies
npm install zustand framer-motion howler localforage react-router-dom
npm install -D tailwindcss autoprefixer postcss electron electron-builder

# 3. Download free assets từ itch.io/Kenney.nl
# 4. Setup project structure theo document
# 5. Create first scene với pixel sprites
```
