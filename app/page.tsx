'use client';

import { useEffect, useState } from 'react';

type GameStyle = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  prompt: string;
  skill: string;
  structure?: string[];
};

const sourceImage = '/images/jingan-source.png';
const thumbnail = (path: string) => path.replace('/images/', '/images/thumbs/').replace('.png', '.webp');

const defaultStructure = [
  '输入锚点：明确参考图中必须保留的机位、建筑轮廓与空间层次',
  '世界转译：把现代元素换成目标游戏中的建筑、角色、道具和环境叙事',
  '渲染语言：限定材质、色彩、光照、几何特征与引擎画面质感',
  '玩法镜头：指定第一/第三人称、角色位置、路径和可交互元素',
  'HUD 约束：只保留足以证明“实机截图”的轻量界面',
  '反向约束：排除海报、概念图、巨型人物、错位地标和水印',
];

const games: GameStyle[] = [
  {
    id: 'zelda',
    title: 'Zelda: Tears of the Kingdom',
    subtitle: '明亮色块 · 海拉鲁探索 · 轻量 HUD',
    image: '/images/zelda.png',
    skill: 'zelda-screenshot-transfer',
    prompt: `Use case: style-transfer
Input image: Image 1 is the edit target and composition reference.
Primary request: transform the Shanghai Jing'an Temple photograph into an authentic Nintendo Switch Tears of the Kingdom gameplay screenshot. Preserve the vertical camera, the stepped foreground plaza, market-canopy rhythm, central layered golden temple roofs, three arched doors, right pagoda and curved-open-crown tower. Convert modern traffic, signs and clothing into Hyrule market stalls, carts, villagers and unreadable symbols. Link stands lower-center, seen from behind, walking toward the temple route.
Style: clean digital 3D cel-shaded game-engine rendering; large flat unified color blocks; 3–4 soft shadow tones; bright low-contrast daylight; simplified materials; crisp silhouettes.
UI: subtle Chinese gameplay HUD only, no large title.
Avoid: illustration, anime poster, cinematic CG, photoreal city, dense windows, cars, asphalt grain, oversized UI, watermark.`,
  },
  {
    id: 'dark-souls-3',
    title: 'Dark Souls III',
    subtitle: '灰烬衰败 · 洛斯里克石材 · 魂系 HUD',
    image: '/images/dark-souls-3.png',
    skill: 'dark-souls-3-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: edit target and composition reference. Preserve the exact vertical camera, layered foreground plaza and broad steps, market-canopy rhythm, central multi-tier golden Jing'an Temple roof mass with three arched doors, smaller right pagoda, and tall curved-arch skyscraper silhouette.
Primary request: transform the scene into an authentic Dark Souls III third-person gameplay screenshot. The temple becomes a decaying Lothric-style cathedral-shrine with blackened gold roofs, Gothic buttresses, weathered stone arches and sparse ember glow. The curved skyscraper becomes a distant broken cathedral tower with the same open crown. Modern cars, umbrellas, signs and clothing become abandoned carts, torn stalls, ash-covered terraces, pilgrims and hollow soldiers. A single armored Ashen One stands lower-center from behind, facing the cathedral entrance. Add one small bonfire.
Style: Dark Souls III in-engine gameplay; grounded dark medieval 3D; overcast ash-gray light; tarnished gold and restrained ember orange.
UI: subtle Chinese health/focus/stamina bars, item slot and soul count.
Avoid: fantasy poster, oversized boss, excessive flames, modern objects, anime, painterly concept art, watermark.`,
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    subtitle: '黄金树恩典 · 王城圣殿 · 开放世界',
    image: '/images/elden-ring.png',
    skill: 'elden-ring-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: edit target and composition reference. Preserve the exact camera, layered plaza and steps, canopy rhythm, central golden temple, three arched doors, right pagoda and curved-open-crown tower.
Primary request: transform the scene into an authentic Elden Ring third-person gameplay screenshot. Recast the temple as a Leyndell sanctuary with gilded roofs, pale monumental stone and restrained golden leaves. Recast the curved skyscraper as a distant broken sacred tower threaded by a few enormous Erdtree roots. Modern vehicles and crowds become medieval wagons, merchant awnings, wandering nobles and soldiers. A single Tarnished stands lower-center facing the entrance. Add one Site of Grace with subtle guidance.
Style: detailed but readable FromSoftware open-world 3D rendering; pale overcast afternoon with soft Erdtree-gold illumination; ivory limestone, antique gold and gray-blue distance haze.
UI: Chinese health/focus/stamina bars, item slots, compass and rune count.
Avoid: generic golden palace, excessive ornament, boss key art, modern objects, painterly concept art, watermark.`,
  },
  {
    id: 'honor-of-kings',
    title: 'Honor of Kings',
    subtitle: '兵线 · 防御塔 · 高可读性移动 MOBA',
    image: '/images/honor-of-kings.png',
    skill: 'honor-of-kings-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: edit target and composition reference. Preserve the vertical camera, broad stepped plaza, repeated canopy stalls, central golden temple with three doors, smaller right pagoda and curved-open-crown skyscraper.
Primary request: transform the scene into a polished Honor of Kings in-engine MOBA battlefield. Recast the temple as a Chinese-fantasy high-ground base and the curved tower as a distant arc-shaped magic-tech landmark. Convert modern traffic and crowds into fantasy market awnings, lane paving, allied soldiers and blue-team minions. An original swordsman hero stands lower-center facing the base, with two allied minions advancing. Add one restrained blue-gold defense turret.
Style: bright stylized Chinese-fantasy mobile game 3D; crisp silhouettes; warm gold roofs and cyan allied energy; soft readable shadows.
UI: recognizable Chinese mini-map, bars, joystick and circular skill buttons.
Avoid: splash art, giant character portrait, excessive VFX, modern vehicles, oversized UI, watermark.`,
  },
  {
    id: 'animal-crossing',
    title: 'Animal Crossing: New Horizons',
    subtitle: '圆润低多边形 · 岛屿市集 · 轻松生活',
    image: '/images/animal-crossing.png',
    skill: 'animal-crossing-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: edit target and composition reference. Preserve the vertical framing, tiered foreground plaza and steps, repeated market canopies, central golden temple with three doors, right pagoda and curved-open-crown building.
Primary request: transform the scene into an authentic Animal Crossing: New Horizons gameplay screenshot. Recast the temple as a charming island cultural center made from rounded warm wood, cream stone and cheerful golden tiled roofs. Simplify the curved skyscraper into a chunky toy-like island landmark. Convert traffic and crowds into market stalls, flowers, benches, paths, one human avatar and 4–6 friendly animal villagers. The player stands lower-center holding a shopping bag while villagers browse fruit, pottery and flowers.
Style: cute rounded low-poly Nintendo Switch 3D; miniature diorama scale; bright spring afternoon; honey gold, cream, mint green and sky blue.
UI: small Chinese time/date and one contextual prompt.
Avoid: combat, dark fantasy, realistic crowds, clutter, photoreal materials, excessive text, watermark.`,
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    subtitle: '方块体素 · 生存模式 · 像素材质',
    image: '/images/minecraft.png',
    skill: 'minecraft-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Image 1 is the edit target and composition reference. Preserve the exact vertical framing, broad stepped foreground plaza, repeated market canopies, central multi-tier golden Jing'an Temple with three arched doors, smaller right pagoda, and tall curved-open-crown skyscraper behind it.
Primary request: transform the complete Shanghai scene into an authentic Minecraft survival-mode gameplay screenshot. Rebuild every visible object from crisp cubic voxel blocks: the temple becomes a recognizable block-built golden-roof shrine; the curved skyscraper retains its looped crown silhouette in quartz and glass blocks. Convert people and cars into a sparse village market with villagers, carts, lantern stalls, flowers and stone-slab steps. First-person view from lower center with a diamond pickaxe at lower right.
Style: authentic modern Minecraft in-engine rendering, vanilla readability, square voxels, 16x pixel textures, hard cubic silhouettes; no smooth geometry or photoreal textures.
UI: crosshair, hearts, hunger, XP bar and 9-slot hotbar.
Avoid: rounded geometry, realistic people, cinematic ray tracing, generic fantasy castle, poster layout, watermark.`,
  },
  {
    id: 'fortnite',
    title: 'Fortnite',
    subtitle: '明亮 PBR · 大逃杀 POI · 建造与战利品',
    image: '/images/fortnite.png',
    skill: 'fortnite-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the exact vertical framing, stepped plaza, market canopies, central multi-tier golden Jing'an Temple with three arched doors, right pagoda and loop-crown skyscraper.
Primary request: transform the Shanghai scene into an authentic Fortnite Battle Royale third-person gameplay screenshot. Rebuild the temple district as a memorable named POI while keeping all landmark silhouettes aligned. Place one original player avatar from behind at lower center holding a colorful harvesting tool. Add a treasure chest glow, a few loot items, restrained wooden build pieces and distant stylized players.
Style: authentic Fortnite in-engine rendering, bright stylized PBR materials, clean faceted shapes, bold silhouettes and saturated balanced colors.
UI: minimap, health and shield bars, inventory slots and crosshair.
Avoid: key art, giant hero portrait, realistic military look, excessive effects, generic fantasy castle, watermark.`,
  },
  {
    id: 'gta-v',
    title: 'Grand Theft Auto V',
    subtitle: '开放城市 · 写实交通 · 第三人称任务',
    image: '/images/gta-v.png',
    skill: 'gta-v-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the source photo's exact 9:16 framing and spatial anchors: stepped foreground plaza, central multi-tier golden Jing'an Temple with three arched doors, right pagoda, dense market edge and curved open-crown skyscraper.
Primary request: transform this Shanghai location into an authentic modern open-world crime-game third-person gameplay screenshot in the visual language of Grand Theft Auto V. Keep Jing'an Temple as a literal Chinatown cultural landmark. Add believable traffic, pedestrians, scooters, plaza vendors, road markings and an unnamed adult playable character from behind near lower center.
Style: polished realistic in-engine open-world rendering, crisp architecture, believable materials and lively urban simulation.
Lighting: warm late-afternoon sun with long soft shadows.
UI: circular minimap at lower left, small cash/ammo indicators and subtle objective marker.
Avoid: cinematic poster, giant character, explosions, generic American skyline, neon cyberpunk styling, watermark.`,
  },
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    subtitle: '雨夜霓虹 · 第一人称 · 科技寺院',
    image: '/images/cyberpunk-2077.png',
    skill: 'cyberpunk-2077-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the stepped plaza, market canopies, central golden temple with three arched doors, right pagoda and curved open-crown tower.
Primary request: transform the location into an authentic Cyberpunk 2077 first-person Night City gameplay screenshot. Reimagine the temple as an old golden techno-temple surviving inside a neon megacity. Turn the curved skyscraper into an arc-crown corporate tower. Add wet pavement, cables, compact food stalls, cybernetic pedestrians, futuristic vehicles, holographic wayfinding and steam. Show restrained cybernetic forearms at the lower edge.
Style: high-detail in-engine cyberpunk realism, dark industrial materials, warm gold contrasted with cyan, magenta and red neon.
UI: subtle minimap, health bar, objective distance and compact ammo readout.
Avoid: movie still, giant portrait, billboards hiding the temple, fantasy castle, clean utopia, watermark.`,
  },
  {
    id: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    subtitle: '1899 年代 · 西部写实 · 圣丹尼斯市集',
    image: '/images/red-dead-redemption-2.png',
    skill: 'rdr2-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the exact vertical composition: broad stepped plaza, rows of market awnings, central multi-tier Jing'an Temple with three arched doors, right pagoda and curved open-crown skyscraper.
Primary request: transform the scene into an authentic Red Dead Redemption 2 third-person gameplay screenshot set in a fictional 1899 Saint Denis immigrant quarter. Rebuild the temple as a period Chinese community shrine. Translate the skyscraper into a distant iron-and-glass world-fair tower retaining its looped crown. Add horse carts, canvas stalls, gas lamps, muddy stone steps, period pedestrians and one cowboy protagonist from behind with a horse nearby.
Style: richly detailed realistic open-world rendering, late-19th-century materials and subtle filmic color.
UI: period-style circular minimap, health/stamina cores and ammo indicator.
Avoid: movie poster, giant gunfight, sepia-only treatment, modern objects, watermark.`,
  },
  {
    id: 'hogwarts-legacy',
    title: 'Hogwarts Legacy',
    subtitle: '魔法学院 · 东方庭院 · 咒语探索',
    image: '/images/hogwarts-legacy.png',
    skill: 'hogwarts-legacy-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the broad plaza steps, market awnings, golden temple with three arched doors, right pagoda and curved open-crown skyscraper.
Primary request: transform the scene into an authentic Hogwarts Legacy third-person open-world gameplay screenshot. Reimagine the temple as the East Asian wing of an international wizarding academy and the skyscraper as a magical arc-crown astronomy tower. Place a young wizard student from behind at lower center holding a wand. Add robed students, enchanted stalls, floating lanterns and subtle magical creatures.
Style: richly detailed realistic fantasy engine rendering, carved stone, gilded tiles, dark timber, embroidered robes and restrained particles.
Lighting: cool misty morning with warm gold highlights.
UI: minimap, health bar, four-spell diamond and quest marker.
Avoid: giant castle replacing the temple, battle scene, theme-park poster, excessive purple glow, watermark.`,
  },
  {
    id: 'super-mario-odyssey',
    title: 'Super Mario Odyssey',
    subtitle: '环球 3D 平台 · 金币路线 · 玩具化关卡',
    image: '/images/super-mario-odyssey.png',
    skill: '3d-platformer-screenshot-transfer / safe visual prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the vertical camera, broad plaza steps, market awnings, central multi-tier golden Jing'an Temple with three arched doors, right pagoda and curved open-crown skyscraper.
Primary request: rebuild the location as a joyful globe-trotting 3D platforming level called Golden Pagoda Kingdom, using the energetic visual and level-design language associated with Super Mario Odyssey without copying a named character. Keep the temple hierarchy in bright rounded geometry and make the curved tower a loop-crown platforming landmark. Add one tiny original explorer at lower center, floating gold coins, spring pads, friendly round creatures, climbable ornaments and moving platforms.
Style: premium family-friendly console 3D platformer render, saturated primary colors, rounded toy-like forms, soft ambient occlusion and bold silhouettes.
UI: minimal three-heart life meter and coin counter.
Avoid: character close-up, key art, photorealism, generic field replacing the city, watermark.`,
  },
  {
    id: 'pokemon-scarlet-violet',
    title: 'Pokémon Scarlet / Violet',
    subtitle: '开放世界 · 动漫渲染 · 训练家与伙伴',
    image: '/images/pokemon-scarlet-violet.png',
    skill: 'pokemon-sv-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the reference's 9:16 framing, plaza steps, market canopies, golden temple with three arched doors, right pagoda and curved open-crown tower.
Primary request: transform the scene into an authentic Pokémon Scarlet and Violet open-world gameplay screenshot. Reimagine Jing'an Temple as a golden-roof city Gym and academy district while keeping its complete facade. Place an original young trainer from behind at lower center with a small yellow electric mouse companion. Add friendly fantasy creatures, plaza NPCs, market kiosks, planters and battle-court markings.
Style: clean anime-shaded 3D game-engine rendering, simplified readable shapes, soft cel shading and vivid natural colors.
UI: restrained circular minimap, party icons and interaction prompt.
Avoid: giant mascot portrait, battle key art, photorealism, generic empty field, watermark.`,
  },
  {
    id: 'resident-evil-4',
    title: 'Resident Evil 4 Remake',
    subtitle: '越肩生存恐怖 · 冷色废墟 · 压迫动线',
    image: '/images/resident-evil-4.png',
    skill: 'resident-evil-4-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the source camera, stepped plaza, market canopies, central temple with three arched doors, right pagoda and loop-crown skyscraper.
Primary request: transform the scene into an authentic Resident Evil 4 Remake over-the-shoulder survival-horror gameplay screenshot. Reimagine the temple as an isolated cult-controlled shrine and the tower as a decayed steel observation structure. Empty and partially collapse the market; add torn canvas, wet stone, barricades, a few distant hostile villagers and one blond field agent from behind at lower center with flashlight and pistol held cautiously.
Style: photoreal high-end survival-horror rendering, restrained desaturation and environmental storytelling.
Lighting: cold overcast dusk, low fog and amber shrine windows.
UI: compact health, ammo, crosshair and interaction marker.
Avoid: gore, giant monster, action poster, unreadably dark architecture, watermark.`,
  },
  {
    id: 'silent-hill-2',
    title: 'Silent Hill 2 Remake',
    subtitle: '心理恐怖 · 浓雾空城 · 孤独探索',
    image: '/images/silent-hill-2.png',
    skill: 'silent-hill-2-screenshot-transfer / prompt prototype',
    prompt: `Use case: style-transfer
Input image: Preserve the vertical source camera, broad plaza, market canopies, temple tiers and three doors, right pagoda and curved open-crown skyscraper.
Primary request: transform the scene into an authentic Silent Hill 2 Remake over-the-shoulder psychological-horror gameplay screenshot. Keep the architecture recognizable but abandoned, rain-stained and swallowed by pale fog. Empty the market; leave collapsed stalls, damp benches, dead leaves and an abandoned handcart. Place one lonely man in a weathered green field jacket from behind at lower center holding a flashlight. No visible monster.
Style: high-end realistic survival-horror rendering, tactile damp stone, rust, peeling paint, volumetric fog, restrained grain and desaturated color.
Lighting: cold grey dawn with faint sickly amber and red practical lights.
UI: extremely minimal health/radio indicator.
Avoid: creature reveal, blood, jump scare, character close-up, generic haunted house, watermark.`,
  },
];

function CopyButton({ text, label = '复制提示词' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }
  return <button className="copy-button" onClick={copy} type="button">{copied ? '已复制' : label}</button>;
}

export default function Home() {
  const [active, setActive] = useState<GameStyle | null>(null);
  useEffect(() => {
    function close(event: KeyboardEvent) { if (event.key === 'Escape') setActive(null); }
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  return (
    <main>
      <header className="site-header">
        <div>
          <p className="eyebrow">GAME STYLE TRANSFER ATLAS</p>
          <h1>同一座城市，进入不同游戏。</h1>
        </div>
        <p className="intro">以静安寺为统一参考，快速比较游戏实机风格、提示词和 Skill 结构。</p>
      </header>

      <section className="source-strip" aria-label="参考原图">
        <img src={thumbnail(sourceImage)} alt="上海静安寺参考原图" />
        <div>
          <span>统一参考</span><strong>上海 · 静安寺</strong>
          <p>保留金顶、三门立面、前景阶梯市集和后方弧顶高楼。</p>
        </div>
      </section>

      <div className="count-line"><span>{games.length} 个已完成风格</span><span>点击图片查看详情</span></div>
      <section className="gallery" aria-label="游戏风格图库">
        {games.map((game, index) => (
          <article className="card" key={game.id}>
            <button className="image-button" type="button" onClick={() => setActive(game)} aria-label={`查看 ${game.title} 详情`}>
              <img src={thumbnail(game.image)} alt={`${game.title} 风格的静安寺`} loading={index > 2 ? 'lazy' : 'eager'} />
            </button>
            <div className="card-meta"><div><h2>{game.title}</h2><p>{game.subtitle}</p></div><CopyButton text={game.prompt} /></div>
          </article>
        ))}
      </section>

      {active && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActive(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-label={`${active.title} 详情`} onMouseDown={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" onClick={() => setActive(null)} aria-label="关闭详情">×</button>
            <div className="modal-visual"><img src={active.image} alt={`${active.title} 风格静安寺大图`} /></div>
            <div className="modal-content">
              <p className="eyebrow">{active.skill}</p><h2>{active.title}</h2><p className="modal-subtitle">{active.subtitle}</p>
              <div className="compare-row">
                <figure><img src={thumbnail(sourceImage)} alt="参考原图" /><figcaption>参考原图</figcaption></figure>
                <figure><img src={thumbnail(active.image)} alt={`${active.title} 转换结果`} /><figcaption>转换结果</figcaption></figure>
              </div>
              <div className="prompt-head"><strong>完整提示词</strong><CopyButton text={active.prompt} label="复制" /></div>
              <pre>{active.prompt}</pre>
              <div className="structure-block">
                <strong>Skill 结构</strong>
                <ol>{(active.structure ?? defaultStructure).map((item) => <li key={item}>{item}</li>)}</ol>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
