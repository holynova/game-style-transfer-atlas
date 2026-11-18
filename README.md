<p align="right"><a href="README.en.md">English</a></p>

<p align="center">
  <img src="./assets/readme/hero.svg" width="100%" alt="Game Style Transfer Atlas · 游戏风格横屏转译 — 三组城市实景转译为 15 款游戏的实机风格">
</p>

<p align="center">
  <a href="https://xiaosang.cc/game-style-transfer-atlas/">▶ 在线体验</a>
  ·
  <a href="https://github.com/holynova/game-style-transfer-atlas">GitHub 仓库</a>
</p>

游戏风格转译图鉴：取纽约时代广场、京都街巷、上海静安寺三组真实城市照片，把同一街景转译成 15 款热门游戏的实机视觉风格——同一条街，在《塞尔达传说》里是明亮色块，在《黑暗之魂 III》里是灰烬衰败。每个转译都配原图对照、完整提示词与 Skill 结构，可一键复制提示词复刻。

## 截图

<p align="center">
  <img src="./assets/readme/screenshot.jpg" width="100%" alt="图鉴网格：同一组上海与京都街景在塞尔达、黑暗之魂 III、艾尔登法环三种风格下的转译结果，15 款游戏 · 45 张示例">
</p>

## 收录

**15 款游戏 × 3 组城市实景 = 45 张示例**

| 游戏 | 风格关键词 |
|------|-----------|
| 塞尔达传说：王国之泪 | 明亮色块 · 海拉鲁探索 · 轻量 HUD |
| 黑暗之魂 III | 灰烬衰败 · 洛斯里克石材 · 魂系 HUD |
| 艾尔登法环 | 黄金树恩典 · 王城圣殿 · 开放世界 |
| 赛博朋克 2077 | 霓虹夜城 · 高对比义体美学 |
| GTA V | 洛圣都日光 · 写实都市 |
| 集合啦！动物森友会 | 柔和手绘 · 治愈小岛 |
| 堡垒之夜 | 鲜艳卡通 · 建筑感 |
| 霍格沃茨之遗 | 魔法城堡 · 奇幻氛围 |
| 王者荣耀 | 兵线 · 防御塔 · 高可读性移动 MOBA |
| 我的世界 | 方块体素 · 像素质感 |
| 宝可梦 朱 / 紫 | 明快动漫 · 帕底亚风光 |
| 荒野大镖客：救赎 2 | 西部荒原 · 电影级光影 |
| 生化危机 4 | 阴冷写实 · 恐怖氛围 |
| 寂静岭 2 | 浓雾压抑 · 心理恐怖 |
| 超级马里奥：奥德赛 | 缤纷跳跃 · 童趣世界 |

**3 组城市实景**：纽约 · 时代广场（16:9 横屏）、京都 · 五重塔、上海 · 静安寺。

## 功能

- **三城对照**：点任意游戏卡片进详情灯箱，在上海 / 京都 / 纽约三组实景间切换，看同一风格如何落在不同城市。
- **原图并排对照**：详情里当前参考原图与转换结果并排展示，直观比较材质、光影与氛围重塑。
- **一键复制提示词**：每套风格配完整提示词配方与 Skill 结构，点复制即可在 AI 作图里复刻。
- **16:9 横屏取景**：纽约时代广场一组为 16:9 电影级画幅，还原次世代游戏主机的原生视窗。

## 本地运行

```bash
npm install
npm run dev      # 开发服务器（Node >= 22.13）
npm run build    # 生产构建
```

## 技术

- Next.js 16 + React 19 + Tailwind CSS 4，单页应用（`app/page.tsx`），全部内容为本地静态数据，无后端。
- 45 张转译图与 3 张原图在 `public/images/`，缩略图（WebP）在 `public/images/thumbs/`。

```
app/page.tsx            单页应用：图鉴网格 / 详情灯箱 / 原图对照 / 提示词复制
app/layout.tsx          页面骨架与元信息
app/globals.css         全局样式（含 HUD 视窗视觉）
public/images/          15 款游戏 × 3 城市转译图 + 3 张城市原图
public/images/thumbs/   WebP 缩略图
```
