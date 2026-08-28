(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27991,e=>{"use strict";var a=e.i(6263),t=e.i(26300);let r="images/jingan-source.png",n="images/kyoto-source.png",i="images/times-square-source.png",s=e=>e.replace("images/","images/thumbs/").replace(".png",".webp"),o=["输入锚点：明确参考图中必须保留的机位、建筑轮廓与空间层次","世界转译：把现代元素换成目标游戏中的建筑、角色、道具和环境叙事","渲染语言：限定材质、色彩、光照、几何特征与引擎画面质感","玩法镜头：指定第一/第三人称、角色位置、路径和可交互元素","HUD 约束：只保留足以证明“实机截图”的轻量界面","反向约束：排除海报、概念图、巨型人物、错位地标和水印"],l={zelda:"images/kyoto-zelda.png","dark-souls-3":"images/kyoto-dark-souls-3.png","elden-ring":"images/kyoto-elden-ring.png","honor-of-kings":"images/kyoto-honor-of-kings.png","animal-crossing":"images/kyoto-animal-crossing.png",minecraft:"images/kyoto-minecraft.png",fortnite:"images/kyoto-fortnite.png","gta-v":"images/kyoto-gta-v.png","cyberpunk-2077":"images/kyoto-cyberpunk-2077.png","red-dead-redemption-2":"images/kyoto-red-dead-redemption-2.png","hogwarts-legacy":"images/kyoto-hogwarts-legacy.png","super-mario-odyssey":"images/kyoto-super-mario-odyssey.png","pokemon-scarlet-violet":"images/kyoto-pokemon-scarlet-violet.png","resident-evil-4":"images/kyoto-resident-evil-4.png","silent-hill-2":"images/kyoto-silent-hill-2.png"},d={zelda:`Use case: style-transfer
Input image: Image 1 is the edit target and composition reference. Preserve the Kyoto historic lane, dark timber machiya on both sides, central three-story pagoda, narrow stone path, distant greenery and overcast spacious sky.
Primary request: transform this real Kyoto street into an authentic Nintendo Switch The Legend of Zelda: Tears of the Kingdom gameplay screenshot. Convert the timber lane into a Hyrule village passage with hand-built wood, stone and cloth while preserving the pagoda silhouette and perspective. Place Link small and seen from behind near lower center, walking uphill with a wooden shield. Add subtle sky islands, lanterns, grass and a small stable detail.
Style/medium: clean cel-shaded 3D game-engine rendering, unified color blocks, crisp silhouettes, simplified materials and soft low-contrast shadows.
Composition/framing: vertical 4:5 third-person gameplay capture.
UI: restrained hearts, stamina wheel, minimap and item indicator.
Avoid: anime poster, photoreal city, oversized character, excessive fantasy effects, watermark.`,"dark-souls-3":`Use case: style-transfer
Input image: Preserve the Kyoto lane, dark timber machiya, central pagoda, narrow stone route and rooflines.
Primary request: transform the street into an authentic Dark Souls III third-person gameplay screenshot. Make the pagoda a blackened Lothric shrine with faint ember seams; make the houses damp Gothic-Asian masonry and warped wood. Replace modern details with ash, broken carts, torn banners, hollow pilgrims and one armored Ashen One from behind approaching the shrine. Add a small bonfire.
Style/medium: grounded dark medieval engine rendering, tactile stone and wood, charcoal, tarnished bronze and ember orange.
Composition/framing: vertical 4:5 third-person gameplay capture with the pagoda centered.
Lighting/mood: cold dusk, wet stone and sparse firelight.
UI: health, focus, stamina, item slot and soul count.
Avoid: boss key art, oversized knight, excessive flames, generic castle, watermark.`,"elden-ring":`Use case: style-transfer
Input image: Preserve the Kyoto timber lane, centered three-story pagoda, narrow stone path, layered roofs and distant greenery.
Primary request: transform the scene into an authentic Elden Ring third-person gameplay screenshot. Recast the pagoda as a sacred sanctuary in a ruined capital and keep its tiered silhouette. Add weathered medieval timber-and-stone houses, a lone Tarnished from behind at lower center, a subtle Site of Grace and windblown golden leaves.
Style/medium: detailed but readable open-world 3D, pale stone, antique bronze, muted greens and restrained gold.
Composition/framing: vertical 4:5 gameplay capture.
Lighting/mood: pale overcast afternoon, solemn wonder.
UI: compass, health/focus/stamina bars, item slots and rune count.
Avoid: giant boss, golden palace, excessive magic, generic castle, watermark.`,"honor-of-kings":`Use case: style-transfer
Input image: Preserve the Kyoto wooden lane, central three-story pagoda, narrow stone route and symmetrical house fronts.
Primary request: transform the street into a polished Honor of Kings in-engine MOBA battlefield. Recast the pagoda as a gold-and-cyan high-ground base, the lane as a readable route, and place an original agile swordsman hero from behind with two blue allied minions and one defense turret.
Style/medium: bright Chinese-fantasy mobile 3D, crisp silhouettes, saturated gold, jade and cyan energy.
Composition/framing: vertical 4:5 third-person gameplay capture.
Lighting/mood: clean daylight with warm lantern accents.
UI: compact minimap, joystick, health bar and circular skill buttons.
Avoid: giant hero portrait, excessive VFX, modern cars, splash art, watermark.`,"animal-crossing":`Use case: style-transfer
Input image: Preserve the Kyoto timber machiya, central three-story pagoda, narrow pale stone path, low roofs and greenery.
Primary request: transform the scene into an authentic Animal Crossing: New Horizons gameplay screenshot. Recast the pagoda as a rounded island cultural center and the lane as a tiny diorama neighborhood. Add a human avatar from behind with a shopping bag, friendly animal villagers, flowers, benches, fruit baskets and lanterns.
Style/medium: cute rounded low-poly Nintendo Switch 3D, miniature scale, soft clean materials and gentle colors.
Composition/framing: vertical 4:5 third-person gameplay capture.
Lighting/mood: calm cloudy afternoon, honey wood, cream stone and mint foliage.
UI: small time/date and contextual prompt.
Avoid: combat, dark fantasy, realistic crowds, giant characters, watermark.`,minecraft:`Use case: style-transfer
Input image: Preserve the Kyoto timber machiya, central three-story pagoda, narrow stone lane, layered eaves and greenery.
Primary request: transform the scene into an authentic Minecraft survival-mode gameplay screenshot. Rebuild every building, pagoda tier, roof tile, path, lantern and tree from crisp cubic voxel blocks. Turn the lane into a village trading route with blocky villagers, flower planters, chests and market tables. First-person camera from lower center with a diamond pickaxe at lower right and crosshair aimed at the pagoda.
Style/medium: vanilla Minecraft engine rendering, square voxels, 16x pixel textures and hard cubic silhouettes.
Composition/framing: vertical 4:5 gameplay capture.
UI: hearts, hunger, XP bar, crosshair and 9-slot hotbar.
Avoid: rounded geometry, photoreal textures, ray tracing, generic fantasy castle, watermark.`,fortnite:`Use case: style-transfer
Input image: Preserve the Kyoto timber houses, central three-story pagoda, narrow stone path and layered eaves.
Primary request: transform the lane into an authentic Fortnite Battle Royale gameplay screenshot. Rebuild the pagoda as a bright named POI, add colorful market buildings, climbable roofs, ramps and a few wooden build pieces. Place an original avatar from behind at lower center with a harvesting tool, a glowing chest, loot items, distant players and a glider.
Style/medium: bright stylized in-engine PBR, faceted surfaces, saturated clean colors and readable geometry.
Composition/framing: vertical 4:5 third-person gameplay capture.
UI: minimap, health/shield bars, inventory and crosshair.
Avoid: key art, giant hero, military realism, excessive effects, watermark.`,"gta-v":`Use case: style-transfer
Input image: Preserve the Kyoto timber machiya, central pagoda, narrow wet lane and layered roofs.
Primary request: transform this historic neighborhood into an authentic Grand Theft Auto V third-person open-world gameplay screenshot. Keep the pagoda as a real cultural landmark. Add pedestrians, parked compact cars, delivery scooters, storefront clutter and a playable adult from behind walking toward the pagoda.
Style/medium: polished realistic open-world engine rendering, believable urban materials and crisp simulation detail.
Composition/framing: vertical 4:5 human-height gameplay camera.
Lighting/mood: warm late afternoon after rain.
UI: circular minimap, small cash/ammo indicators and subtle objective marker.
Avoid: explosions, American skyline, neon cyberpunk, cinematic poster, watermark.`,"cyberpunk-2077":`Use case: style-transfer
Input image: Preserve the Kyoto timber lane, central pagoda, narrow stone route and tight roof perspective.
Primary request: transform the neighborhood into an authentic Cyberpunk 2077 first-person Night City gameplay screenshot. Keep the pagoda as an old sacred landmark inside a neon district. Add wet pavement, overhead cables, steam, cybernetic pedestrians, futuristic scooters and abstract holographic wayfinding. Show restrained cybernetic forearms and a scanner at the bottom edge.
Style/medium: high-detail in-engine cyberpunk realism, rain, dark industrial materials, lantern gold against cyan, magenta and red neon.
Composition/framing: vertical 4:5 first-person gameplay capture.
Lighting/mood: rainy blue-hour night, humid haze and lived-in density.
UI: subtle minimap, health bar, objective distance and scanner readout.
Avoid: giant billboards, clean utopia, fantasy castle, character portrait, watermark.`,"red-dead-redemption-2":`Use case: historical-scene
Input image: Preserve the Kyoto timber houses, central pagoda, narrow lane, layered eaves and distant greenery.
Primary request: transform the neighborhood into an authentic Red Dead Redemption 2 third-person gameplay screenshot set in an imagined 1899 immigrant quarter. Keep the pagoda as a period community shrine. Replace modern details with horse carts, handcarts, canvas awnings, gas lamps, period pedestrians and muddy stone. Place a weathered cowboy from behind at lower center with a saddled horse at the side.
Style/medium: realistic open-world rendering, late-19th-century wood, stone, brass and leather, grounded scale.
Composition/framing: vertical 4:5 third-person gameplay capture.
Lighting/mood: amber sunset after rain, long shadows and dusty haze.
UI: circular minimap, health/stamina cores and ammo indicator.
Avoid: movie poster, giant gunfight, modern vehicles, fantasy castle, watermark.`,"hogwarts-legacy":`Use case: style-transfer
Input image: Preserve the Kyoto timber machiya, central pagoda, narrow stone route, layered eaves and overcast sky.
Primary request: transform the lane into an authentic Hogwarts Legacy third-person open-world gameplay screenshot. Reimagine the pagoda as an East Asian wing of a wizarding academy and the houses as magical shops. Place a young wizard student from behind at lower center with a wand, robed students, floating lanterns, an owl and restrained magical particles.
Style/medium: realistic fantasy engine rendering, carved wood, stone, gilded trim and embroidered robes.
Composition/framing: vertical 4:5 third-person gameplay capture.
Lighting/mood: cool misty morning with warm lantern highlights.
UI: minimap, health bar, spell wheel and quest marker.
Avoid: giant castle, oversized character, battle scene, excessive purple glow, watermark.`,"super-mario-odyssey":`Use case: style-transfer
Input image: Preserve the Kyoto timber lane, central pagoda, narrow stone path, layered eaves and greenery.
Primary request: rebuild the scene as a joyful globe-trotting 3D platforming level called Pagoda District, using the bright playful language associated with Super Mario Odyssey without copying a named character. Keep the pagoda silhouette and use rounded game geometry. Add a tiny original explorer, floating gold coins, spring pads, friendly round creatures, climbable roof ornaments and moving platforms.
Style/medium: premium family-friendly console 3D platformer render, saturated colors, rounded toy-like forms and soft ambient occlusion.
Composition/framing: vertical 4:5 third-person gameplay capture.
UI: minimal three-heart life meter and coin counter.
Avoid: character close-up, photorealism, generic field replacing the city, text-heavy layout, watermark.`,"pokemon-scarlet-violet":`Use case: style-transfer
Input image: Preserve the Kyoto timber machiya, central pagoda, narrow stone lane, layered eaves and greenery.
Primary request: transform the street into an authentic Pok\xe9mon Scarlet and Violet open-world gameplay screenshot. Recast the pagoda as a city Gym and academy shrine. Place an original trainer from behind at lower center with a small yellow electric mouse companion, friendly creatures, student NPCs, flower stalls and a Pok\xe9 Ball interaction prompt.
Style/medium: clean anime-shaded 3D engine rendering, simple readable forms, soft cel shading and vivid natural colors.
Composition/framing: vertical 4:5 third-person gameplay capture.
UI: party icons, minimap and compact interaction prompt.
Avoid: giant mascot portrait, battle key art, photorealism, empty field, watermark.`,"resident-evil-4":`Use case: style-transfer
Input image: Preserve the Kyoto timber houses, central pagoda, narrow stone route and layered roofs.
Primary request: transform the neighborhood into an authentic Resident Evil 4 Remake over-the-shoulder survival-horror gameplay screenshot. Reimagine the pagoda as an isolated cult shrine. Weather the houses, empty the lane and add torn awnings, wet stone, barricades, crates and distant hostile villagers. Place one blond field agent from behind in the lower center with flashlight and pistol.
Style/medium: photoreal survival-horror engine rendering, damp materials, restrained desaturation and environmental storytelling.
Composition/framing: vertical 4:5 over-the-shoulder gameplay capture.
Lighting/mood: cold overcast dusk, low fog and sparse amber windows.
UI: compact health, ammo, crosshair and interaction marker.
Avoid: gore, giant monster, action key art, unreadably dark image, watermark.`,"silent-hill-2":`Use case: style-transfer
Input image: Preserve the Kyoto timber machiya, central three-story pagoda, narrow stone lane, layered eaves and pale sky.
Primary request: transform the historic lane into an authentic Silent Hill 2 Remake over-the-shoulder psychological-horror gameplay screenshot. Keep the pagoda and street recognizable but abandoned, rain-stained and swallowed by pale fog. Leave collapsed awnings, wet wood, fallen leaves, a handcart and weak window lights. Place one lonely man in a green field jacket from behind at lower center with a lowered flashlight. No visible monster.
Style/medium: realistic survival-horror engine rendering, wet stone and wood, rust, peeling paint, volumetric fog and desaturated color.
Composition/framing: vertical 4:5 gameplay capture.
Lighting/mood: cold grey dawn, silence and melancholy.
UI: minimal radio/health indicator and interaction dot.
Avoid: monster reveal, blood, jump scare, character close-up, watermark.`},c={zelda:"images/times-square-zelda.png","dark-souls-3":"images/times-square-dark-souls-3.png","elden-ring":"images/times-square-elden-ring.png","honor-of-kings":"images/times-square-honor-of-kings.png","animal-crossing":"images/times-square-animal-crossing.png",minecraft:"images/times-square-minecraft.png",fortnite:"images/times-square-fortnite.png","gta-v":"images/times-square-gta-v.png","cyberpunk-2077":"images/times-square-cyberpunk-2077.png","red-dead-redemption-2":"images/times-square-red-dead-redemption-2.png","hogwarts-legacy":"images/times-square-hogwarts-legacy.png","super-mario-odyssey":"images/times-square-super-mario-odyssey.png","pokemon-scarlet-violet":"images/times-square-pokemon-scarlet-violet.png","resident-evil-4":"images/times-square-resident-evil-4.png","silent-hill-2":"images/times-square-silent-hill-2.png"},m={zelda:`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Image 1 is the edit target and composition reference; preserve the wide Times Square street canyon, giant curved LED billboard on the left, dense vertical signs and skyscrapers, center avenue perspective, yellow taxis, pedestrians and bright blue daylight.
Primary request: transform the supplied New York Times Square photograph into an authentic Nintendo Switch The Legend of Zelda: Tears of the Kingdom landscape gameplay screenshot. Keep the original wide street-canyon composition and landmark placement, but translate the signs into unreadable Hyrule symbols, the billboards into colorful fantasy shop banners, the taxis into small wooden carts, and the avenue into a lively Hyrule city market. Place Link small in third-person view near the lower center, walking into the avenue with a shield. Add a few subtle sky-island fragments and soft shrine-blue accents without obscuring the architecture.
Style/medium: clean cel-shaded 3D game-engine rendering, large unified color blocks, crisp silhouettes, simplified materials and soft low-contrast shadows.
Composition/framing: exact 16:9 landscape, wide third-person gameplay camera, street vanishing point centered, full game viewport.
Lighting/mood: clear daytime, optimistic exploration.
UI: restrained hearts, stamina wheel, minimap and item indicator only.
Avoid: vertical image, portrait crop, anime poster, cinematic key art, photoreal Times Square, readable brand logos, oversized HUD, watermark.`,"dark-souls-3":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide Times Square street canyon, left curved LED fa\xe7ade, dense vertical architecture, central avenue vanishing point, foreground sidewalk and traffic lanes.
Primary request: transform the photograph into an authentic Dark Souls III third-person gameplay screenshot. Recast the avenue as a decaying gothic capital street: the curved LED fa\xe7ade becomes a black cathedral arcade, tall buildings become soot-stained stone towers, billboards become torn heraldic banners, and yellow taxis become abandoned wooden carts. Place one armored Ashen One small and seen from behind near the lower center, approaching the distant gate. Add ember braziers, ash and one faint bonfire.
Style/medium: grounded dark medieval 3D, wet stone, worn iron and timber, charcoal gray with restrained ember orange.
Composition/framing: exact 16:9 landscape, wide third-person gameplay camera.
Lighting/mood: cold overcast dusk, oppressive but readable.
UI: subtle health, focus, stamina bars, item slot and soul count.
Avoid: vertical image, cinematic key art, oversized boss, excessive fire, modern logos, watermark.`,"elden-ring":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide urban canyon, curved left fa\xe7ade, dense towers, center avenue perspective, road markings and yellow-car foreground rhythm.
Primary request: transform the photograph into an authentic Elden Ring third-person gameplay screenshot. Recast the avenue as a monumental ruined capital: the curved LED building becomes a sacred arc-crown tower, skyscrapers become weathered citadels, billboards become faded rune banners and taxis become medieval wagons. Place a lone Tarnished small from behind near the lower center, walking toward a distant golden sanctuary. Add one subtle Site of Grace and drifting golden leaves.
Style/medium: detailed but readable open-world 3D, pale stone, antique bronze, muted blue-gray haze and restrained gold.
Composition/framing: exact 16:9 landscape, wide third-person gameplay capture.
Lighting/mood: solemn blue-hour daylight with soft golden illumination.
UI: compass, health/focus/stamina bars, item slots and rune count.
Avoid: vertical crop, giant boss, generic gold palace, excessive magic, readable modern logos, watermark.`,"honor-of-kings":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve Times Square's broad horizontal street canyon, curved left billboard, central avenue lane, dense fa\xe7ades and pedestrian scale.
Primary request: transform the scene into a polished Honor of Kings in-engine MOBA battlefield. Keep the urban layout but turn it into a bright Chinese-fantasy city lane: billboards become magical team banners and ability panels, the curved fa\xe7ade becomes an arena wall, traffic becomes lane props and merchant carts, and the avenue becomes a readable three-lane route. Place an original agile swordsman hero near the lower center with two blue allied minions and one cyan-gold defense turret.
Style/medium: crisp Chinese-fantasy mobile 3D, high readability, clean faceted forms, warm amber architecture with cyan energy.
Composition/framing: exact 16:9 landscape, wide horizontal third-person gameplay viewport.
Lighting/mood: clear late afternoon, lively and competitive.
UI: compact minimap, health bar, joystick, ability buttons and objective indicator.
Avoid: vertical image, splash art, giant hero portrait, excessive VFX, realistic gunplay, watermark.`,"animal-crossing":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide Times Square street canyon, curved billboard, colorful vertical signs, center avenue perspective, yellow taxis and friendly human scale.
Primary request: transform the photograph into an authentic Animal Crossing: New Horizons landscape gameplay screenshot. Recast Times Square as a cheerful island town plaza: signs become rounded shop fa\xe7ades, taxis become tiny yellow delivery carts, skyscrapers become soft toy-like buildings, and the avenue becomes a clean patterned path. Place a human avatar near the lower center with a shopping bag, friendly animal villagers, flowers, benches, fruit baskets and a market stall.
Style/medium: cute rounded low-poly Nintendo Switch 3D, miniature diorama scale, soft clean materials and pastel accents.
Composition/framing: exact 16:9 landscape, wide third-person gameplay camera.
Lighting/mood: clear blue daytime, calm and playful.
UI: small time/date, minimap and one contextual prompt only.
Avoid: vertical image, combat, realistic crowds, photoreal skyscrapers, heavy HUD, watermark.`,minecraft:`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide street canyon, left curved billboard mass, tall buildings, centered avenue, crosswalks, taxis and sidewalk rhythm.
Primary request: transform the photograph into an authentic Minecraft survival-mode landscape gameplay screenshot. Rebuild the entire scene from crisp cubic voxel blocks: the curved billboard becomes a block-built display wall, skyscrapers become stone, glass and concrete towers, yellow taxis become blocky vehicles, and the avenue becomes a broad road with villagers and market booths. Use a first-person viewpoint with a diamond pickaxe at lower right.
Style/medium: vanilla Minecraft rendering, square voxels, 16x pixel textures and hard cubic silhouettes.
Composition/framing: exact 16:9 landscape, wide first-person gameplay viewport.
Lighting/mood: bright daytime with clear blue sky.
UI: crosshair, hearts, hunger, XP bar and 9-slot hotbar.
Avoid: vertical crop, rounded forms, realistic people, cinematic ray tracing, readable modern logos, watermark.`,fortnite:`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide Times Square canyon, curved LED fa\xe7ade, dense tower walls, central street perspective, sidewalks, taxis and crowd scale.
Primary request: transform the photograph into an authentic Fortnite Battle Royale landscape third-person gameplay screenshot. Turn Times Square into a memorable urban POI while keeping its landmark arrangement: billboards become colorful in-game panels, taxis become stylized vehicles, storefronts become loot shops, and the road becomes a combat-ready plaza. Place one original player avatar from behind near the lower center holding a colorful harvesting tool. Add a glowing chest, loot items, restrained ramps/build pieces and distant players.
Style/medium: bright stylized in-engine PBR, clean faceted forms, saturated balanced colors and crisp silhouettes.
Composition/framing: exact 16:9 landscape, wide third-person gameplay camera.
Lighting/mood: sunny late morning, energetic but uncluttered.
UI: minimap, health/shield bars, inventory slots and crosshair.
Avoid: vertical image, key art, giant hero portrait, realistic military scene, excessive explosions, watermark.`,"gta-v":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the broad Times Square street canyon, giant curved LED fa\xe7ade, dense vertical signs and towers, centered road perspective, yellow taxi foreground, sidewalks and traffic scale.
Primary request: transform the photograph into an authentic Grand Theft Auto V third-person open-world gameplay screenshot. Keep the location as a modern Manhattan entertainment district with believable traffic simulation. Preserve the horizontal composition, translate signage into fictional unreadable ads, add pedestrians, taxis, buses and an unnamed adult playable character from behind near the lower center.
Style/medium: polished realistic open-world engine rendering, crisp architecture, believable vehicle materials and natural pedestrian simulation.
Composition/framing: exact 16:9 landscape, wide third-person gameplay camera.
Lighting/mood: clear winter afternoon with clean shadows.
UI: circular minimap, small cash/ammo indicators and subtle objective marker.
Avoid: vertical crop, movie poster, giant character, explosions, title card, neon cyberpunk grade, watermark.`,"cyberpunk-2077":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide street canyon, curved billboard mass, skyscraper walls, central avenue vanishing point, traffic lanes and layered signage.
Primary request: transform the photograph into an authentic Cyberpunk 2077 first-person Night City gameplay screenshot. Keep the Times Square geometry but make it a rainy megacity district: the curved billboard becomes a luminous holographic fa\xe7ade, vertical signs become abstract neon glyphs, taxis become autonomous vehicles, and pedestrians become cybernetic crowds. Show restrained cybernetic forearms and a scanner at the lower edge aimed toward the avenue.
Style/medium: high-detail in-engine cyberpunk realism, wet reflective asphalt, dark industrial materials, cyan-magenta-red neon against amber windows.
Composition/framing: exact 16:9 landscape, wide first-person gameplay viewport.
Lighting/mood: blue-hour rain, humid haze and electric density.
UI: subtle minimap, health bar, objective distance and scanner readout.
Avoid: vertical image, clean utopia, fantasy castle, giant character portrait, unreadable clutter, watermark.`,"red-dead-redemption-2":`Use case: historical-scene
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide street canyon, left curved fa\xe7ade mass, central avenue perspective, dense building rhythm, broad sidewalk and foreground vehicle placement.
Primary request: transform the photograph into an authentic Red Dead Redemption 2 third-person gameplay screenshot set in an imagined 1899 Saint Denis entertainment district. Translate the curved LED fa\xe7ade into a grand illuminated theater, skyscrapers into period brick and iron towers, billboards into painted posters without readable text, and yellow taxis into horse-drawn cabs. Place one weathered cowboy seen from behind near the lower center with a saddled horse and carriage nearby.
Style/medium: richly detailed realistic late-19th-century open-world rendering, tactile brick, cast iron, wet cobblestone, brass lamps, leather and wood.
Composition/framing: exact 16:9 landscape, wide third-person gameplay camera.
Lighting/mood: amber gaslight at dusk after rain, smoky distance.
UI: period-style circular minimap, health/stamina cores and small ammo indicator.
Avoid: vertical crop, movie poster, giant gunfight, sepia-only treatment, modern glass skyscrapers, watermark.`,"hogwarts-legacy":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the broad Times Square canyon, curved illuminated fa\xe7ade, tall tower rhythm, central avenue perspective, sidewalks and human scale.
Primary request: transform the photograph into an authentic Hogwarts Legacy third-person open-world gameplay screenshot. Reimagine the city as a magical wizarding district: the giant screen becomes an enchanted moving mural, signs become floating rune banners, skyscrapers become stone-and-brick wizard towers, taxis become enchanted carriages, and the avenue becomes a magical market. Place a young wizard student small from behind near the lower center holding a wand, with robed pedestrians and owls.
Style/medium: richly detailed realistic fantasy engine rendering, carved stone, aged brick, dark timber, brass and embroidered robes.
Composition/framing: exact 16:9 landscape, wide third-person gameplay camera.
Lighting/mood: cool clear afternoon with warm shop lights.
UI: minimap, health bar, spell wheel and subtle quest marker.
Avoid: vertical crop, giant castle replacing the city, oversized character, battle scene, excessive purple glow, watermark.`,"super-mario-odyssey":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide street canyon, curved billboard, vertical building blocks, centered avenue, crosswalks and yellow-car color accent.
Primary request: rebuild the scene as a joyful globe-trotting 3D platforming level called Neon Avenue Kingdom, using the bright playful visual language associated with Super Mario Odyssey without copying a named character. Keep the horizontal composition and transform skyscrapers into rounded platforming buildings, the curved billboard into a bouncing display, taxis into toy vehicles, and the avenue into a route of platforms. Add a tiny original explorer, floating gold coins, spring pads, climbable signs and friendly round creatures.
Style/medium: premium family-friendly console 3D platformer render, saturated colors, rounded toy-like forms, soft ambient occlusion and bold silhouettes.
Composition/framing: exact 16:9 landscape, wide third-person gameplay viewport.
Lighting/mood: clear sunny daytime, energetic and joyful.
UI: minimal three-heart life meter, coin counter and small objective icon.
Avoid: vertical image, character close-up, photorealism, dark realism, cluttered UI, readable real-world logos, watermark.`,"pokemon-scarlet-violet":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the broad Times Square street canyon, curved left display, tall buildings, center avenue perspective, sidewalks, yellow taxis and pedestrian scale.
Primary request: transform the photograph into an authentic Pok\xe9mon Scarlet and Violet open-world landscape gameplay screenshot. Recast the district as a lively city Gym and academy neighborhood: billboards become creature-themed displays, taxis become colorful vehicles, storefronts become battle-item shops and the avenue becomes a walkable route. Place an original young trainer near the lower center with a small yellow electric mouse companion, friendly creatures, student NPCs and flower planters.
Style/medium: clean anime-shaded 3D game-engine rendering, simplified readable forms, soft cel shading, vivid natural colors and polished console materials.
Composition/framing: exact 16:9 landscape, wide third-person gameplay camera.
Lighting/mood: bright clear afternoon, adventurous and welcoming.
UI: restrained party icons, minimap and compact interaction prompt.
Avoid: vertical crop, giant mascot portrait, battle key art, photorealism, empty field, oversized HUD, watermark.`,"resident-evil-4":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide Times Square street canyon, curved left fa\xe7ade, tall buildings, central avenue perspective, crosswalks, sidewalks and yellow taxi placement.
Primary request: transform the photograph into an authentic Resident Evil 4 Remake over-the-shoulder survival-horror gameplay screenshot. Keep the architecture recognizable but abandoned and barricaded: billboards become flickering blank panels, traffic becomes overturned cars, storefronts become shuttered, and the avenue fills with damp fog. Place one field agent seen from behind near the lower center with flashlight and pistol. Add distant hostile silhouettes without gore.
Style/medium: photoreal high-end survival-horror engine rendering, wet asphalt, broken glass, rust, restrained desaturation and environmental storytelling.
Composition/framing: exact 16:9 landscape, wide over-the-shoulder gameplay camera.
Lighting/mood: cold blue-gray dusk, sparse amber practical lights and low fog.
UI: compact health, ammo, crosshair and interaction marker.
Avoid: vertical image, gore, giant monster, action poster, unreadably dark architecture, watermark.`,"silent-hill-2":`Use case: style-transfer
Asset type: 16:9 landscape game screenshot
Input image: Preserve the wide horizontal Times Square street canyon, curved left billboard mass, dense tower silhouettes, centered avenue, sidewalks and yellow taxi accent.
Primary request: transform the photograph into an authentic Silent Hill 2 Remake over-the-shoulder psychological-horror gameplay screenshot. Keep the city geometry recognizable but empty, rain-stained and swallowed by pale fog: screens flicker with indistinct gray light, signs lose readable text, taxis are abandoned, storefronts are sealed, and the avenue fades into mist. Place one lonely man in a weathered green field jacket seen from behind near the lower center holding a flashlight low. No visible monster.
Style/medium: high-end realistic survival-horror rendering, wet reflective asphalt, rust, peeling paint, volumetric fog, restrained grain and desaturated color.
Composition/framing: exact 16:9 landscape, wide over-the-shoulder gameplay viewport.
Lighting/mood: cold gray dawn, silence and melancholy.
UI: extremely minimal radio/health indicator and interaction dot.
Avoid: vertical crop, creature reveal, blood, jump scare, character close-up, generic haunted house, watermark.`},h=[{id:"zelda",title:"Zelda: Tears of the Kingdom",subtitle:"明亮色块 · 海拉鲁探索 · 轻量 HUD",image:"images/zelda.png",skill:"zelda-screenshot-transfer",prompt:`Use case: style-transfer
Input image: Image 1 is the edit target and composition reference.
Primary request: transform the Shanghai Jing'an Temple photograph into an authentic Nintendo Switch Tears of the Kingdom gameplay screenshot. Preserve the vertical camera, the stepped foreground plaza, market-canopy rhythm, central layered golden temple roofs, three arched doors, right pagoda and curved-open-crown tower. Convert modern traffic, signs and clothing into Hyrule market stalls, carts, villagers and unreadable symbols. Link stands lower-center, seen from behind, walking toward the temple route.
Style: clean digital 3D cel-shaded game-engine rendering; large flat unified color blocks; 3–4 soft shadow tones; bright low-contrast daylight; simplified materials; crisp silhouettes.
UI: subtle Chinese gameplay HUD only, no large title.
Avoid: illustration, anime poster, cinematic CG, photoreal city, dense windows, cars, asphalt grain, oversized UI, watermark.`},{id:"dark-souls-3",title:"Dark Souls III",subtitle:"灰烬衰败 · 洛斯里克石材 · 魂系 HUD",image:"images/dark-souls-3.png",skill:"dark-souls-3-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: edit target and composition reference. Preserve the exact vertical camera, layered foreground plaza and broad steps, market-canopy rhythm, central multi-tier golden Jing'an Temple roof mass with three arched doors, smaller right pagoda, and tall curved-arch skyscraper silhouette.
Primary request: transform the scene into an authentic Dark Souls III third-person gameplay screenshot. The temple becomes a decaying Lothric-style cathedral-shrine with blackened gold roofs, Gothic buttresses, weathered stone arches and sparse ember glow. The curved skyscraper becomes a distant broken cathedral tower with the same open crown. Modern cars, umbrellas, signs and clothing become abandoned carts, torn stalls, ash-covered terraces, pilgrims and hollow soldiers. A single armored Ashen One stands lower-center from behind, facing the cathedral entrance. Add one small bonfire.
Style: Dark Souls III in-engine gameplay; grounded dark medieval 3D; overcast ash-gray light; tarnished gold and restrained ember orange.
UI: subtle Chinese health/focus/stamina bars, item slot and soul count.
Avoid: fantasy poster, oversized boss, excessive flames, modern objects, anime, painterly concept art, watermark.`},{id:"elden-ring",title:"Elden Ring",subtitle:"黄金树恩典 · 王城圣殿 · 开放世界",image:"images/elden-ring.png",skill:"elden-ring-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: edit target and composition reference. Preserve the exact camera, layered plaza and steps, canopy rhythm, central golden temple, three arched doors, right pagoda and curved-open-crown tower.
Primary request: transform the scene into an authentic Elden Ring third-person gameplay screenshot. Recast the temple as a Leyndell sanctuary with gilded roofs, pale monumental stone and restrained golden leaves. Recast the curved skyscraper as a distant broken sacred tower threaded by a few enormous Erdtree roots. Modern vehicles and crowds become medieval wagons, merchant awnings, wandering nobles and soldiers. A single Tarnished stands lower-center facing the entrance. Add one Site of Grace with subtle guidance.
Style: detailed but readable FromSoftware open-world 3D rendering; pale overcast afternoon with soft Erdtree-gold illumination; ivory limestone, antique gold and gray-blue distance haze.
UI: Chinese health/focus/stamina bars, item slots, compass and rune count.
Avoid: generic golden palace, excessive ornament, boss key art, modern objects, painterly concept art, watermark.`},{id:"honor-of-kings",title:"Honor of Kings",subtitle:"兵线 · 防御塔 · 高可读性移动 MOBA",image:"images/honor-of-kings.png",skill:"honor-of-kings-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: edit target and composition reference. Preserve the vertical camera, broad stepped plaza, repeated canopy stalls, central golden temple with three doors, smaller right pagoda and curved-open-crown skyscraper.
Primary request: transform the scene into a polished Honor of Kings in-engine MOBA battlefield. Recast the temple as a Chinese-fantasy high-ground base and the curved tower as a distant arc-shaped magic-tech landmark. Convert modern traffic and crowds into fantasy market awnings, lane paving, allied soldiers and blue-team minions. An original swordsman hero stands lower-center facing the base, with two allied minions advancing. Add one restrained blue-gold defense turret.
Style: bright stylized Chinese-fantasy mobile game 3D; crisp silhouettes; warm gold roofs and cyan allied energy; soft readable shadows.
UI: recognizable Chinese mini-map, bars, joystick and circular skill buttons.
Avoid: splash art, giant character portrait, excessive VFX, modern vehicles, oversized UI, watermark.`},{id:"animal-crossing",title:"Animal Crossing: New Horizons",subtitle:"圆润低多边形 · 岛屿市集 · 轻松生活",image:"images/animal-crossing.png",skill:"animal-crossing-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: edit target and composition reference. Preserve the vertical framing, tiered foreground plaza and steps, repeated market canopies, central golden temple with three doors, right pagoda and curved-open-crown building.
Primary request: transform the scene into an authentic Animal Crossing: New Horizons gameplay screenshot. Recast the temple as a charming island cultural center made from rounded warm wood, cream stone and cheerful golden tiled roofs. Simplify the curved skyscraper into a chunky toy-like island landmark. Convert traffic and crowds into market stalls, flowers, benches, paths, one human avatar and 4–6 friendly animal villagers. The player stands lower-center holding a shopping bag while villagers browse fruit, pottery and flowers.
Style: cute rounded low-poly Nintendo Switch 3D; miniature diorama scale; bright spring afternoon; honey gold, cream, mint green and sky blue.
UI: small Chinese time/date and one contextual prompt.
Avoid: combat, dark fantasy, realistic crowds, clutter, photoreal materials, excessive text, watermark.`},{id:"minecraft",title:"Minecraft",subtitle:"方块体素 · 生存模式 · 像素材质",image:"images/minecraft.png",skill:"minecraft-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Image 1 is the edit target and composition reference. Preserve the exact vertical framing, broad stepped foreground plaza, repeated market canopies, central multi-tier golden Jing'an Temple with three arched doors, smaller right pagoda, and tall curved-open-crown skyscraper behind it.
Primary request: transform the complete Shanghai scene into an authentic Minecraft survival-mode gameplay screenshot. Rebuild every visible object from crisp cubic voxel blocks: the temple becomes a recognizable block-built golden-roof shrine; the curved skyscraper retains its looped crown silhouette in quartz and glass blocks. Convert people and cars into a sparse village market with villagers, carts, lantern stalls, flowers and stone-slab steps. First-person view from lower center with a diamond pickaxe at lower right.
Style: authentic modern Minecraft in-engine rendering, vanilla readability, square voxels, 16x pixel textures, hard cubic silhouettes; no smooth geometry or photoreal textures.
UI: crosshair, hearts, hunger, XP bar and 9-slot hotbar.
Avoid: rounded geometry, realistic people, cinematic ray tracing, generic fantasy castle, poster layout, watermark.`},{id:"fortnite",title:"Fortnite",subtitle:"明亮 PBR · 大逃杀 POI · 建造与战利品",image:"images/fortnite.png",skill:"fortnite-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Preserve the exact vertical framing, stepped plaza, market canopies, central multi-tier golden Jing'an Temple with three arched doors, right pagoda and loop-crown skyscraper.
Primary request: transform the Shanghai scene into an authentic Fortnite Battle Royale third-person gameplay screenshot. Rebuild the temple district as a memorable named POI while keeping all landmark silhouettes aligned. Place one original player avatar from behind at lower center holding a colorful harvesting tool. Add a treasure chest glow, a few loot items, restrained wooden build pieces and distant stylized players.
Style: authentic Fortnite in-engine rendering, bright stylized PBR materials, clean faceted shapes, bold silhouettes and saturated balanced colors.
UI: minimap, health and shield bars, inventory slots and crosshair.
Avoid: key art, giant hero portrait, realistic military look, excessive effects, generic fantasy castle, watermark.`},{id:"gta-v",title:"GTA 5 · Grand Theft Auto V",subtitle:"开放城市 · 写实交通 · 第三人称任务",image:"images/gta-v.png",skill:"gta-v-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Preserve the source photo's exact 9:16 framing and spatial anchors: stepped foreground plaza, central multi-tier golden Jing'an Temple with three arched doors, right pagoda, dense market edge and curved open-crown skyscraper.
Primary request: transform this Shanghai location into an authentic modern open-world crime-game third-person gameplay screenshot in the visual language of Grand Theft Auto V. Keep Jing'an Temple as a literal Chinatown cultural landmark. Add believable traffic, pedestrians, scooters, plaza vendors, road markings and an unnamed adult playable character from behind near lower center.
Style: polished realistic in-engine open-world rendering, crisp architecture, believable materials and lively urban simulation.
Lighting: warm late-afternoon sun with long soft shadows.
UI: circular minimap at lower left, small cash/ammo indicators and subtle objective marker.
Avoid: cinematic poster, giant character, explosions, generic American skyline, neon cyberpunk styling, watermark.`},{id:"cyberpunk-2077",title:"Cyberpunk 2077",subtitle:"雨夜霓虹 · 第一人称 · 科技寺院",image:"images/cyberpunk-2077.png",skill:"cyberpunk-2077-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Preserve the stepped plaza, market canopies, central golden temple with three arched doors, right pagoda and curved open-crown tower.
Primary request: transform the location into an authentic Cyberpunk 2077 first-person Night City gameplay screenshot. Reimagine the temple as an old golden techno-temple surviving inside a neon megacity. Turn the curved skyscraper into an arc-crown corporate tower. Add wet pavement, cables, compact food stalls, cybernetic pedestrians, futuristic vehicles, holographic wayfinding and steam. Show restrained cybernetic forearms at the lower edge.
Style: high-detail in-engine cyberpunk realism, dark industrial materials, warm gold contrasted with cyan, magenta and red neon.
UI: subtle minimap, health bar, objective distance and compact ammo readout.
Avoid: movie still, giant portrait, billboards hiding the temple, fantasy castle, clean utopia, watermark.`},{id:"red-dead-redemption-2",title:"Red Dead Redemption 2",subtitle:"1899 年代 · 西部写实 · 圣丹尼斯市集",image:"images/red-dead-redemption-2.png",skill:"rdr2-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Preserve the exact vertical composition: broad stepped plaza, rows of market awnings, central multi-tier Jing'an Temple with three arched doors, right pagoda and curved open-crown skyscraper.
Primary request: transform the scene into an authentic Red Dead Redemption 2 third-person gameplay screenshot set in a fictional 1899 Saint Denis immigrant quarter. Rebuild the temple as a period Chinese community shrine. Translate the skyscraper into a distant iron-and-glass world-fair tower retaining its looped crown. Add horse carts, canvas stalls, gas lamps, muddy stone steps, period pedestrians and one cowboy protagonist from behind with a horse nearby.
Style: richly detailed realistic open-world rendering, late-19th-century materials and subtle filmic color.
UI: period-style circular minimap, health/stamina cores and ammo indicator.
Avoid: movie poster, giant gunfight, sepia-only treatment, modern objects, watermark.`},{id:"hogwarts-legacy",title:"Hogwarts Legacy",subtitle:"魔法学院 · 东方庭院 · 咒语探索",image:"images/hogwarts-legacy.png",skill:"hogwarts-legacy-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Preserve the broad plaza steps, market awnings, golden temple with three arched doors, right pagoda and curved open-crown skyscraper.
Primary request: transform the scene into an authentic Hogwarts Legacy third-person open-world gameplay screenshot. Reimagine the temple as the East Asian wing of an international wizarding academy and the skyscraper as a magical arc-crown astronomy tower. Place a young wizard student from behind at lower center holding a wand. Add robed students, enchanted stalls, floating lanterns and subtle magical creatures.
Style: richly detailed realistic fantasy engine rendering, carved stone, gilded tiles, dark timber, embroidered robes and restrained particles.
Lighting: cool misty morning with warm gold highlights.
UI: minimap, health bar, four-spell diamond and quest marker.
Avoid: giant castle replacing the temple, battle scene, theme-park poster, excessive purple glow, watermark.`},{id:"super-mario-odyssey",title:"Super Mario Odyssey",subtitle:"环球 3D 平台 · 金币路线 · 玩具化关卡",image:"images/super-mario-odyssey.png",skill:"3d-platformer-screenshot-transfer / safe visual prototype",prompt:`Use case: style-transfer
Input image: Preserve the vertical camera, broad plaza steps, market awnings, central multi-tier golden Jing'an Temple with three arched doors, right pagoda and curved open-crown skyscraper.
Primary request: rebuild the location as a joyful globe-trotting 3D platforming level called Golden Pagoda Kingdom, using the energetic visual and level-design language associated with Super Mario Odyssey without copying a named character. Keep the temple hierarchy in bright rounded geometry and make the curved tower a loop-crown platforming landmark. Add one tiny original explorer at lower center, floating gold coins, spring pads, friendly round creatures, climbable ornaments and moving platforms.
Style: premium family-friendly console 3D platformer render, saturated primary colors, rounded toy-like forms, soft ambient occlusion and bold silhouettes.
UI: minimal three-heart life meter and coin counter.
Avoid: character close-up, key art, photorealism, generic field replacing the city, watermark.`},{id:"pokemon-scarlet-violet",title:"Pokémon Scarlet / Violet",subtitle:"开放世界 · 动漫渲染 · 训练家与伙伴",image:"images/pokemon-scarlet-violet.png",skill:"pokemon-sv-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Preserve the reference's 9:16 framing, plaza steps, market canopies, golden temple with three arched doors, right pagoda and curved open-crown tower.
Primary request: transform the scene into an authentic Pok\xe9mon Scarlet and Violet open-world gameplay screenshot. Reimagine Jing'an Temple as a golden-roof city Gym and academy district while keeping its complete facade. Place an original young trainer from behind at lower center with a small yellow electric mouse companion. Add friendly fantasy creatures, plaza NPCs, market kiosks, planters and battle-court markings.
Style: clean anime-shaded 3D game-engine rendering, simplified readable shapes, soft cel shading and vivid natural colors.
UI: restrained circular minimap, party icons and interaction prompt.
Avoid: giant mascot portrait, battle key art, photorealism, generic empty field, watermark.`},{id:"resident-evil-4",title:"Resident Evil 4 Remake",subtitle:"越肩生存恐怖 · 冷色废墟 · 压迫动线",image:"images/resident-evil-4.png",skill:"resident-evil-4-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Preserve the source camera, stepped plaza, market canopies, central temple with three arched doors, right pagoda and loop-crown skyscraper.
Primary request: transform the scene into an authentic Resident Evil 4 Remake over-the-shoulder survival-horror gameplay screenshot. Reimagine the temple as an isolated cult-controlled shrine and the tower as a decayed steel observation structure. Empty and partially collapse the market; add torn canvas, wet stone, barricades, a few distant hostile villagers and one blond field agent from behind at lower center with flashlight and pistol held cautiously.
Style: photoreal high-end survival-horror rendering, restrained desaturation and environmental storytelling.
Lighting: cold overcast dusk, low fog and amber shrine windows.
UI: compact health, ammo, crosshair and interaction marker.
Avoid: gore, giant monster, action poster, unreadably dark architecture, watermark.`},{id:"silent-hill-2",title:"Silent Hill 2 Remake",subtitle:"心理恐怖 · 浓雾空城 · 孤独探索",image:"images/silent-hill-2.png",skill:"silent-hill-2-screenshot-transfer / prompt prototype",prompt:`Use case: style-transfer
Input image: Preserve the vertical source camera, broad plaza, market canopies, temple tiers and three doors, right pagoda and curved open-crown skyscraper.
Primary request: transform the scene into an authentic Silent Hill 2 Remake over-the-shoulder psychological-horror gameplay screenshot. Keep the architecture recognizable but abandoned, rain-stained and swallowed by pale fog. Empty the market; leave collapsed stalls, damp benches, dead leaves and an abandoned handcart. Place one lonely man in a weathered green field jacket from behind at lower center holding a flashlight. No visible monster.
Style: high-end realistic survival-horror rendering, tactile damp stone, rust, peeling paint, volumetric fog, restrained grain and desaturated color.
Lighting: cold grey dawn with faint sickly amber and red practical lights.
UI: extremely minimal health/radio indicator.
Avoid: creature reveal, blood, jump scare, character close-up, generic haunted house, watermark.`}].map(e=>({...e,variantImage:l[e.id],variantPrompt:d[e.id],timesSquareImage:c[e.id],timesSquarePrompt:m[e.id]})),p=[{id:"jingan",index:"01 / LOCATION",title:"上海 · 静安寺",description:"金顶、三门立面、阶梯市集和弧顶高楼。",sourceImage:r,variant:"city"},{id:"kyoto",index:"02 / LOCATION",title:"京都 · 古街五重塔",description:"木构街巷、中心五重塔、窄石路和两侧屋檐。",sourceImage:n,variant:"kyoto"},{id:"times-square",index:"03 / LOCATION",title:"纽约 · 时代广场",description:"横向街谷、曲面屏幕、摩天楼、车流和人行道。",sourceImage:i,variant:"timesSquare"}].map(e=>({...e,examples:h}));function g({text:e,label:r="复制提示词"}){let[n,i]=(0,t.useState)(!1);async function s(){await navigator.clipboard.writeText(e),i(!0),window.setTimeout(()=>i(!1),1400)}return(0,a.jsx)("button",{className:"copy-button",onClick:s,type:"button",children:n?"已复制":r})}function u(e){return"timesSquare"===e.variant?e.game.timesSquareImage??e.game.image:"kyoto"===e.variant?e.game.variantImage??e.game.image:e.game.image}function y(e){return"timesSquare"===e.variant?e.game.timesSquarePrompt??e.game.prompt:"kyoto"===e.variant?e.game.variantPrompt??e.game.prompt:e.game.prompt}e.s(["default",0,function(){let[e,l]=(0,t.useState)(null);return(0,t.useEffect)(()=>{function e(e){"Escape"===e.key&&l(null)}return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,t.useEffect)(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e]),(0,a.jsxs)("main",{id:"top",children:[(0,a.jsxs)("header",{className:"site-header",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"eyebrow",children:"GAME STYLE TRANSFER ATLAS"}),(0,a.jsxs)("h1",{children:["同一处地点，",(0,a.jsx)("br",{}),"进入不同游戏。"]})]}),(0,a.jsxs)("div",{className:"intro-block",children:[(0,a.jsx)("p",{className:"intro",children:"按地点浏览三组城市参考图，在同一空间里比较 15 款游戏的实机风格、提示词和 Skill 结构。"}),(0,a.jsxs)("a",{className:"repo-link",href:"https://github.com/holynova/game-style-transfer-atlas",target:"_blank",rel:"noopener noreferrer",children:["GitHub Repo ",(0,a.jsx)("span",{"aria-hidden":"true",children:"↗"})]})]})]}),(0,a.jsx)("nav",{className:"location-index","aria-label":"按地点浏览",children:p.map(e=>(0,a.jsxs)("a",{className:"location-link",href:`#location-${e.id}`,children:[(0,a.jsx)("img",{src:s(e.sourceImage),alt:""}),(0,a.jsxs)("span",{className:"location-link-copy",children:[(0,a.jsx)("span",{className:"location-code",children:e.index}),(0,a.jsx)("strong",{children:e.title}),(0,a.jsx)("em",{children:e.description})]}),(0,a.jsx)("span",{className:"location-arrow","aria-hidden":"true",children:"↘"})]},e.id))}),(0,a.jsxs)("div",{className:"count-line",children:[(0,a.jsxs)("span",{children:[p.length," 个地点 · ",h.length*p.length," 张示例"]}),(0,a.jsxs)("span",{children:["每组 ",h.length," 款游戏 · 点击图片查看详情"]})]}),p.map(e=>(0,a.jsxs)("section",{className:"location-section",id:`location-${e.id}`,"aria-labelledby":`location-title-${e.id}`,children:[(0,a.jsxs)("div",{className:"location-heading",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"eyebrow",children:e.index}),(0,a.jsx)("h2",{id:`location-title-${e.id}`,children:e.title}),(0,a.jsx)("p",{children:e.description})]}),(0,a.jsxs)("div",{className:"location-stat",children:[(0,a.jsx)("strong",{children:e.examples.length}),(0,a.jsx)("span",{children:"款游戏"})]})]}),(0,a.jsx)("div",{className:"gallery","aria-label":`${e.title} 游戏风格图库`,children:e.examples.map((t,r)=>{let n={game:t,variant:e.variant};return(0,a.jsxs)("article",{className:"card",children:[(0,a.jsx)("button",{className:`image-button ${"timesSquare"===e.variant?"landscape":""}`,type:"button",onClick:()=>l(n),"aria-label":`查看 ${t.title} 的${e.title}版本`,children:(0,a.jsx)("img",{src:s(u(n)),alt:`${t.title} 风格的${e.title}`,loading:r>2?"lazy":"eager"})}),(0,a.jsxs)("div",{className:"card-meta",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"card-kicker",children:[String(r+1).padStart(2,"0")," / ",e.title]}),(0,a.jsx)("h3",{children:t.title}),(0,a.jsx)("p",{children:t.subtitle})]}),(0,a.jsx)("div",{className:"card-actions",children:(0,a.jsx)(g,{text:y(n)})})]})]},`${e.id}-${t.id}`)})})]},e.id)),e&&(0,a.jsx)("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>l(null),children:(0,a.jsxs)("section",{className:"modal",role:"dialog","aria-modal":"true","aria-label":`${e.game.title} 详情`,onMouseDown:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{className:"close-button",type:"button",onClick:()=>l(null),"aria-label":"关闭详情",children:"×"}),(0,a.jsx)("div",{className:`modal-visual ${"timesSquare"===e.variant?"landscape":""}`,children:(0,a.jsx)("img",{src:u(e),alt:`${e.game.title} 风格转换大图`})}),(0,a.jsxs)("div",{className:"modal-content",children:[(0,a.jsx)("p",{className:"eyebrow",children:e.game.skill}),(0,a.jsx)("h2",{children:e.game.title}),(0,a.jsx)("p",{className:"modal-subtitle",children:e.game.subtitle}),(0,a.jsxs)("div",{className:"variant-switch",role:"tablist","aria-label":"选择转换版本",children:[(0,a.jsx)("button",{className:"city"===e.variant?"is-active":"",type:"button",role:"tab","aria-selected":"city"===e.variant,onClick:()=>l({...e,variant:"city"}),children:"上海 · 静安寺"}),(0,a.jsx)("button",{className:"kyoto"===e.variant?"is-active":"",type:"button",role:"tab","aria-selected":"kyoto"===e.variant,onClick:()=>l({...e,variant:"kyoto"}),children:"京都 · 五重塔"}),(0,a.jsx)("button",{className:"timesSquare"===e.variant?"is-active":"",type:"button",role:"tab","aria-selected":"timesSquare"===e.variant,onClick:()=>l({...e,variant:"timesSquare"}),children:"纽约 · 时代广场 · 16:9"})]}),(0,a.jsxs)("div",{className:"compare-row",children:[(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:s("timesSquare"===e.variant?i:"kyoto"===e.variant?n:r),alt:"当前参考原图"}),(0,a.jsx)("figcaption",{children:"当前参考原图"})]}),(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{src:s(u(e)),alt:`${e.game.title} 转换结果`}),(0,a.jsx)("figcaption",{children:"当前转换结果"})]})]}),(0,a.jsxs)("div",{className:"prompt-head",children:[(0,a.jsx)("strong",{children:"完整提示词"}),(0,a.jsx)(g,{text:y(e),label:"复制"})]}),(0,a.jsx)("pre",{children:y(e)}),(0,a.jsxs)("div",{className:"structure-block",children:[(0,a.jsx)("strong",{children:"Skill 结构"}),(0,a.jsx)("ol",{children:(e.game.structure??o).map(e=>(0,a.jsx)("li",{children:e},e))})]})]})]})})]})}])}]);