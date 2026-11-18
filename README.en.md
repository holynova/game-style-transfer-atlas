<p align="right"><a href="README.md">中文</a></p>

<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="Game Style Transfer Atlas — three real city photos re-rendered in the in-game visual styles of 15 games">
</p>

<p align="center">
  <a href="https://xiaosang.cc/game-style-transfer-atlas/">▶ Try Online</a>
  ·
  <a href="https://github.com/holynova/game-style-transfer-atlas">GitHub Repository</a>
</p>

Game Style Transfer Atlas takes three real city photos — Times Square in New York, a Kyoto street, Jing'an Temple in Shanghai — and re-renders the same streets in the in-game visual style of 15 popular games. The same street is bright cel-shaded blocks in Zelda and ashen decay in Dark Souls III. Every transfer ships with the source photo side by side, the full prompt, and its Skill structure, ready to copy and reuse.

## Screenshots

<p align="center">
  <img src="./assets/readme/screenshot.jpg" width="100%" alt="Atlas grid: the same Shanghai and Kyoto street scenes re-rendered in the styles of Zelda, Dark Souls III, and Elden Ring — 15 games, 45 examples">
</p>

## Inventory

**15 games × 3 real city photos = 45 examples**

| Game | Style keywords |
|------|-----------|
| The Legend of Zelda: Tears of the Kingdom | Bright cel shading · Hyrule exploration · Light HUD |
| Dark Souls III | Ashen decay · Lothric stone · Souls-style HUD |
| Elden Ring | Erdtree grace · Royal capital · Open world |
| Cyberpunk 2077 | Neon Night City · High-contrast cyberware aesthetic |
| GTA V | Los Santos sunlight · Realistic city |
| Animal Crossing: New Horizons | Soft hand-drawn · Cozy island |
| Fortnite | Vivid cartoon · Architectural feel |
| Hogwarts Legacy | Magic castle · Fantasy atmosphere |
| Honor of Kings | Lanes · Turrets · Highly readable mobile MOBA |
| Minecraft | Block voxels · Pixel texture |
| Pokémon Scarlet / Violet | Bright anime · Paldea scenery |
| Red Dead Redemption 2 | Western wilderness · Cinematic lighting |
| Resident Evil 4 | Cold realism · Horror atmosphere |
| Silent Hill 2 | Thick fog · Psychological dread |
| Super Mario Odyssey | Colorful jumping · Playful world |

**3 real city photos**: New York · Times Square (16:9 widescreen), Kyoto · Five-Story Pagoda, Shanghai · Jing'an Temple.

## Features

- **Three-city comparison**: open any game card to switch between Shanghai, Kyoto, and New York and see how one style lands on different cities.
- **Source side by side**: each detail view pairs the original photo with the transfer for direct comparison of materials, lighting, and mood.
- **Copyable prompts**: every style ships with its full prompt recipe and Skill structure — one click to copy and reproduce.
- **16:9 widescreen**: the Times Square set is framed in cinematic 16:9, matching a console viewport.

## Run Locally

```bash
npm install
npm run dev      # development server (Node >= 22.13)
npm run build    # production build
```

## Tech

- Next.js 16 + React 19 + Tailwind CSS 4, single-page app (`app/page.tsx`), fully local static data, no backend.
- 45 transfer images and 3 source photos live in `public/images/`; WebP thumbnails in `public/images/thumbs/`.

```
app/page.tsx            Single-page app: atlas grid / detail lightbox / source comparison / prompt copy
app/layout.tsx          Page skeleton and metadata
app/globals.css         Global styles (including the HUD viewport look)
public/images/          15 games × 3 cities transfers + 3 city source photos
public/images/thumbs/   WebP thumbnails
```
