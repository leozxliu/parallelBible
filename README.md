# Parallel Bible Viewer

A modern, interactive web application for reading the Bible with Chinese Union Version (CUV) 和合本 and New International Version (NIV) side-by-side.

🌐 **Live Demo**: [https://leozxliu.github.io/parallelBible/](https://leozxliu.github.io/parallelBible/)

## Features

### 📖 Dual Translation Display
- **Chinese Union Version (CUV)** 和合本 - with switchable Traditional (繁体) and Simplified (简体) characters
- **New International Version (NIV)** - English translation
- Parallel verse alignment for easy comparison

### 🎨 Modern Interface
- Dark theme with gradient background
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
- Real-time chapter loading
- Robust error handling

## Technology Stack

- **HTML5/CSS3** - Modern web standards
- **Vanilla JavaScript** - No frameworks, fast and lightweight
- **LocalStorage API** - Bookmark persistence
- **Fetch API** - RESTful API calls
- **Pexels API** - Chapter illustrations

## Usage

Simply open the website and:
1. Click on any book in the sidebar (Old Testament or New Testament)
2. Select a chapter number
3. Read both translations side-by-side
4. Toggle between Traditional and Simplified Chinese using the switch
5. Bookmark chapters for quick access
6. Navigate between chapters using Previous/Next buttons

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

## Development

This is a single-page application contained in `index.html`. To run locally:

```bash
# Clone the repository
git clone https://github.com/leozxliu/parallelBible.git
cd parallelBible

# Open in browser
open index.html
# or use a local server
python3 -m http.server 8000
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
