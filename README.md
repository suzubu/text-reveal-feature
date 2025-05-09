# 🌀 Text Reveal Feature + Blur Effects
> A modern, scroll-enhanced web experience showcasing blurred motion, layered text, and animated copy. Built with Next.js, GSAP, and shader-style visual cues for immersive storytelling.

---

## 🖼 Preview

![Blur Identity Demo](media/text-reveal.gif)

---

## ⚙️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/suzubu/text-reveal-feature.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

> Requires: Node.js, modern browser with CSS filters and WebGL support.

---

## ✨ Features

- 🌫️ Scroll-activated text reveal with blur and motion effects
- 🎞 GSAP-powered timeline animations and easing
- ✍️ Split-text entrance on lines using `SplitText` plugin
- 🖼 Image reveal with blur-to-sharp transitions
- 🧠 Fully componentized layout using Next.js App Router

---

## 🧠 Dev Notes

### Components
- `BlurText.jsx`: Scroll-triggered fade-in with zoom and blur
- `ImgBlur.jsx`: Blurred image entry using GSAP + CSS filter
- `Copy.jsx`: Animated line-by-line text reveal via `SplitText`
- `page.js`: Page scaffold with full layout and GSAP logic
- `globals.css`: Custom font and utility styling (flex grid, column flow)

### Animation Stack
- [GSAP](https://greensock.com/gsap/)
- [ScrollTrigger](https://greensock.com/scrolltrigger/)
- [SplitText](https://greensock.com/splittext/)
- [Lenis](https://github.com/studio-freight/lenis) for smooth scroll behavior

---

## 📚 Inspiration / Credits
- [Codegrid](https://www.youtube.com/watch?v=4A0dP8yMwD8)
- Aesthetic influence from [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)
- Typography motion inspired by [Obys Agency](https://obys.agency/)
- Animated copy entrance techniques influenced by [Studio Freight](https://studiofreight.com/)
- Uses [GSAP SplitText](https://greensock.com/splittext/) for granular text control

---

## 📂 Folder Structure

```bash
text-reveal-feature
├── public/
│   └── fonts/
│   └── about.jpg
│   └── hero.jpg
├── src/
│   └── app/
│       └── global.css
│       └── layout.js
│       └── page.js
│   └── components/
│       └── BlurText.jsx
│       └── Copy.jsx
│       └── BlurImg.jsx
└── README.md
```

---

## 📜 License

MIT — free to remix and adapt with credit.

---

## 🙋‍♀️ Author

Made with ☕ + 🎧 by [suzubu](https://github.com/suzubu)
