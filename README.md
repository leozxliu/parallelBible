# Parallel Bible Viewer

A modern, interactive web application for reading the Bible with Chinese Union Version (CUV) 和合本 and New International Version (NIV) side-by-side. Installable as an offline-capable app, with a Chinese devotion podcast linked to every chapter.

🌐 **Live Demo**: [https://leozxliu.github.io/parallelBible/](https://leozxliu.github.io/parallelBible/)

## Features

### 📖 Dual Translation Display
- **Chinese Union Version (CUV)** 和合本 - with switchable Traditional (繁体) and Simplified (简体) characters
- **New International Version (NIV)** - English translation
- Parallel verse alignment for easy comparison
- Each verse column tagged with its language (`zh-Hans`/`zh-Hant`/`en`) for screen readers and search engines

### 🎧 Devotion Podcasts
- A link to a 靈修 (devotion) podcast for **all 1,189 chapters** across 66 books
- Sourced from [西雅圖靈糧堂 (Seattle Bread of Life)](https://bolccis.org/devotion-podcast/)
- Opens in a window docked to the right half of the screen for side-by-side reading (falls back to a new tab)

### 📲 Offline & Installable (PWA)
- Works offline once visited — the app shell and previously-read chapters are cached
- Installable to a phone or desktop home screen ("Add to Home Screen") via a web app manifest and service worker
- Verses are cached in `localStorage`, so re-opening a chapter is instant and resilient to API outages

### 🎨 Modern Interface
- Dark theme with gradient background
- Customizable background and text colors (saved to `localStorage`)
- Responsive design for mobile and desktop
- Smooth scrolling and animations
- Chapter illustrations from Pexels

### 🔖 Bookmark System
- Save favorite chapters with timestamps
- Quick access from sidebar
- Deletable bookmarks with persistent storage (localStorage)

### 🧭 Navigation
- Expandable book list with 66 Bible books
- Chinese and English book names
- Fixed Previous/Next chapter buttons
- Auto-scroll to top on chapter change

### 📚 Chapter Titles
- 80+ curated chapter titles in English and Chinese
- Titles for notable chapters like:
  - Genesis 1: "The Creation / 创造天地"
  - Psalm 23: "The Lord is My Shepherd / 耶和华是我的牧者"
  - John 3: "You Must Be Born Again / 重生之道"
  - Romans 8: "More Than Conquerors / 得胜有余"

### 🌐 API Integration
- Powered by [Bolls.life API](https://bolls.life) (free, no authentication required)
- Real-time chapter loading with `localStorage` caching of responses
- Robust error handling

## Technology Stack

- **HTML5/CSS3** - Modern web standards
- **Vanilla JavaScript** - No frameworks, fast and lightweight
- **Service Worker + Web App Manifest** - Offline support and installable PWA
- **LocalStorage API** - Bookmark, color preference, and verse caching
- **Fetch API** - RESTful API calls
- **Pexels API** - Chapter illustrations

## Usage

Simply open the website and:
1. Click on any book in the sidebar (Old Testament or New Testament)
2. Select a chapter number
3. Read both translations side-by-side
4. Toggle between Traditional and Simplified Chinese using the switch
5. Tap **🎧 靈修 Podcast** to open that chapter's devotion alongside your reading
6. Bookmark chapters for quick access
7. Navigate between chapters using Previous/Next buttons
8. Customize background and text colors in the sidebar
9. Optionally install the app to your home screen for offline reading

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Copyright & License

© 2026 Parallel Bible Viewer - Leo Liu, PhD. All rights reserved.

### Bible Translations
- **Chinese Union Version (CUV)** 和合本 (简体/繁体)
- **New International Version (NIV)**

Scripture taken from [Bolls.life API](https://bolls.life)

**For educational and personal study purposes only.**

## Project Structure

The app is mostly contained in `index.html`, with a few small supporting files required for the PWA:

| File | Purpose |
| --- | --- |
| `index.html` | The entire app — markup, styles, logic, and Bible/devotion data |
| `sw.js` | Service worker (offline caching) |
| `manifest.webmanifest` | Web app manifest (installable app metadata) |
| `favicon.svg`, `icon-192.png`, `icon-512.png`, `icon-180.png` | App and home-screen icons |

## Development

```bash
# Clone the repository
git clone https://github.com/leozxliu/parallelBible.git
cd parallelBible

# Run with a local server (required for the service worker / offline features)
python3 -m http.server 8000
# then open http://localhost:8000
```

> **Note:** Open the app via `http://localhost`, not by double-clicking `index.html`.
> Service workers (offline support and installability) only run over `http(s)` or `localhost`, not the `file://` protocol.

## Deployment

The site is hosted on **GitHub Pages** from the `main` branch. Pushing to `main`
automatically rebuilds and publishes the live site within a minute or two —
there is no separate deploy step.

```bash
git push origin main   # publishes to https://leozxliu.github.io/parallelBible/
```

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## Contact

Created by Leo Liu, PhD

---

*Built with ❤️ for Bible study and language learning*
