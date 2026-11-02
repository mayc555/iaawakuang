(() => {
  const textMap = new Map(Object.entries({
    "Dig A Hole": "挖个大坑", "Dig a Hole": "挖个大坑", "How deep will you go?": "你能挖多深？",
    "Continue": "继续游戏", "Play": "开始挖掘", "Worlds": "世界存档", "Settings": "设置", "Credits": "制作人员",
    "Create a new world": "创建新世界", "Name your world": "为世界命名", "Your worlds": "你的世界", "Each world saved on its own": "每个世界单独保存", "Right where you left it": "从上次离开的地方继续", "Last played": "最近游玩", "just now": "刚刚", "playing now": "正在游玩", "Rename": "重命名", "a brand-new world": "新世界", "start a new one here": "可在此创建新世界", "other worlds": "其他世界", "Starts fresh at the top. Your other worlds stay saved.": "从地表重新开始，其他世界会保留。", "Your worlds stay just as they are": "现有世界会保持不变",
    "The new world starts fresh at the top — these keep every hole, coin and find.": "新世界会从地表重新开始；现有世界中的坑、金币和发现都会保留。",
    "Create world": "创建世界", "Cancel": "取消", "Your worlds": "你的世界", "Each world saved on its own": "每个世界单独保存",
    "Right where you left it": "从上次离开的地方继续", "Back": "返回", "Press ": "按下 ", " to continue": " 继续",
    "Paused": "已暂停", "Resume": "继续游戏", "Back to title": "返回标题页", "Controls": "操作说明", "Sound": "声音", "Game": "游戏",
    "Master volume": "主音量", "How loud everything in the game is.": "游戏整体音量大小。", "Music": "音乐",
    "Quiet background music. Sound effects stay on.": "播放背景音乐；音效仍会保留。", "Music volume": "音乐音量",
    "How loud the music is, compared to the effects.": "音乐相对于音效的音量。", "Tips": "游戏提示",
    "Short hints that explain the game as you play.": "游玩时显示简短操作提示。", "Mouse sensitivity": "鼠标灵敏度",
    "How fast the view turns when you move the mouse.": "鼠标移动时视角转动的速度。", "Graphics": "画面", "Graphics quality": "画质",
    "Lower it if the game feels slow.": "游戏运行卡顿时可调低画质。", "Lower": "调低画质", "Higher": "调高画质",
    "Low": "低", "Medium": "中", "High": "高", "See the credits": "查看制作人员", "300 m · The bottom of the world": "300 米 · 世界的尽头",
    "You made it.": "你做到了。", "Your reward": "你的奖励", "E.'s Workshop": "E 的工坊",
    "The fabricator turns what you dig up into tools.": "工坊能把挖到的材料制成工具。", "Close ": "关闭 ", "Pickaxes": "镐子",
    "Gear": "装备", "Sell": "出售", "In hand": "手持", "Owned": "已拥有", "Next": "下一个", "Dig size": "挖掘范围",
    "The pick in your hand": "当前手持的镐子", "Use this pick": "使用这把镐子", "Fully upgraded": "已升至最高级",
    "That’s the finest pick the fabricator can make.": "这已经是工坊能打造的最好镐子了。",
    "Deeper ground is harder: every pick digs a little less on each new level.": "越往深处岩层越硬；每进入新区域，镐子的挖掘效率都会略微下降。",
    "Nothing to sell yet — dig, and bring back what you find.": "还没有可出售的东西——继续挖掘，把发现带回来。",
    "Sell everything": "全部出售", "Journal": "日志", "Story chapters · click one to open it": "故事章节 · 点击打开",
    "Start here": "从这里开始", "The end of the story": "故事的结尾", "Dig deeper to find more pages.": "继续向下挖，寻找更多篇章。",
    "The story is complete. The Deep goes on below — twenty more levels.": "故事已完整。下方还有更深处——再往下二十层。",
    "Add to journal": "加入日志", "click one to read it": "点击查看", "New! Click to read": "新发现！点击阅读",
    "Click to read": "点击阅读", "Not found yet": "尚未找到", "Buried near the surface": "埋在浅层", "In your pack — add it below ↓": "在背包中——拖到下方页面 ↓",
    "Drag one onto the page": "将物品拖到页面上", "You’re carrying these finds. To add them, go to the ": "你正带着这些发现。要将它们加入日志，请前往",
    "workshop desk": "工坊桌旁", "Tip": "提示", "Coins": "金币", "Dirt": "泥土", "Iron ore": "铁矿", "Copper ore": "铜矿",
    "Silver ore": "银矿", "Gold ore": "金矿", "LMB": "鼠标左键", "TIP": "提示", "Take iron ore": "拾取铁矿",
    "Old Iron Pick": "旧铁镐", "FORGED!": "打造完成！", "It’s in your hand now.": "已装备到手中。", "Close": "关闭",
    "Move and look": "移动与视角", "Walk with ": "使用 ", ", look around with the mouse. Hold ": " 移动，使用鼠标转动视角。按住 ", " to run.": " 奔跑。",
    "Dig": "挖掘", "Hold": "按住", " the left button to keep swinging. Click ore, chests and finds to pick them up.": "鼠标左键持续挥镐。点击矿石、宝箱和发现物即可拾取。",
    "Jump and fly": "跳跃与飞行", "Jump, then ": "先跳起，然后", "keep holding": "持续按住", " in the air to fly out with the jetpack.": "，即可用喷气背包飞出去。",
    "Lanterns": "提灯", "Right-click sets down the lantern in your hand. Hold ": "右键放下手中的提灯。按住 ", " on one to take it back.": " 可将提灯收回。",
    "What's in your hand": "当前手持物", "Number keys or the mouse wheel.": "使用数字键或鼠标滚轮切换。", "Workshop and journal": "工坊与日志",
    " at the workshop or the journal desk. ": "在工坊或日志桌旁打开。", " opens the journal anywhere.": " 可随时打开日志。",
    "Pause": "暂停", "Settings, controls, and the way back to the title.": "设置、操作说明和返回标题页。", "Press Enter to continue": "按回车键继续",
    "The floor of the world — nothing can dig through it.": "这里是世界的底部，任何镐子都无法继续挖掘。",
    "Someone left this here. Bring it to the journal on the workshop desk.": "有人把它留在了这里。带到工坊桌旁的日志处。",
    "A lantern lost its hold and broke": "提灯松脱并摔坏了", "No room — file your finds first": "背包已满——先把发现存入日志",
    "Lantern back in your pack": "提灯已收回背包", "Clay": "黏土", "Sandstone": "砂岩", "Limestone": "石灰岩",
    "Granite": "花岗岩", "Marble": "大理石", "Obsidian": "黑曜石", "Gem": "宝石", "Coal": "煤炭", "Quartz": "石英",
    "No pick can break this floor. You dug one hole — through thirty kinds of rock, past everything that was buried along the way — all the way to the bottom of the world.": "没有镐子能凿穿这片地层。你一路挖穿三十种岩层，经过沿途所有埋藏之物，终于抵达世界的最底部。",
    "Tip: lanterns light the dark. Right-click to set one on a wall.": "提示：提灯能照亮黑暗。右键可将提灯放在墙上。",
    "Tip: every world is saved on its own. Start as many as you like.": "提示：每个世界都会单独保存。想创建多少个都可以。",
    "Tip: the deeper you go, the harder the rock — and the rarer the ore.": "提示：越往深处，岩石越坚硬，矿石也越稀有。",
    "Tip: bring buried finds to the journal desk at the workshop to read them.": "提示：把挖到的发现带到工坊日志桌，就能阅读其中内容。"
  }));

  const dynamic = [
    [/^World (\d+)$/, "世界 $1"],
    [/^Level (\d+) · (\d+) of 7$/, "第 $1 层 · 已发现 $2 / 7 件物品"],
    [/^Level (\d+) · find (\d+) of 7 · (\d+) m down$/, "第 $1 层 · 寻找第 $2 / 7 件物品 · 深度 $3 米"],
    [/^Level (\d+) · (.+) · ([\d.]+)–([\d.]+) m down$/, "第 $1 层 · $2 · 深度 $3–$4 米"],
    [/^([\d.]+) m down$/, "深度 $1 米"],
    [/^Buried below (\d+) m$/, "埋在 $1 米以下"],
    [/^Sell · ([\d,]+)$/, "出售 · $1 金币"],
    [/^Sell everything · ([\d,]+)$/, "全部出售 · $1 金币"],
    [/^Forge it · ([\d,]+)$/, "打造 · $1 金币"],
    [/^You need ([\d,]+) more coins\.$/, "还差 $1 金币。"],
    [/^Graphics set to (.+) so the game runs smoothly\. You can change it in Settings\.$/, "画质已调整为 $1 以保持流畅运行。你可以在设置中修改。"],
    [/^(\d+) of (\d+) things found$/, "已找到 $1 / $2 件物品"],
    [/^(\d+) worlds? · start a new one here$/, "$1 个世界 · 可在此创建新世界"],
    [/^(.+) · a brand-new world$/, "$1 · 全新世界"],
    [/^(\d+) m deep · (\d+) coins · pickaxe (\d+) · (\d+) finds?$/, "深度 $1 米 · $2 金币 · 镐子 $3 级 · 发现物 $4 件"],
    [/^Last played just now$/, "最近游玩：刚刚"],
    [/^(?!World )(.*) world$/, "$1 的世界"],
    [/^(.*) · a brand-new world$/, "$1 · 全新世界"],
    [/^(\d+) m deep · (\d+) coins · pickaxe (\d+) · (\d+) finds?$/, "深度 $1 米 · $2 金币 · 镐子 $3 级 · 发现物 $4 件"],
    [/^Last played (.+)$/, "最近游玩：$1"],
    [/^(.+) · a brand-new world$/, "$1 · 全新世界"],
    [/^(\d+) m deep · (\d+) coins · pickaxe (\d+) · (\d+) finds?$/, "深度 $1 米 · $2 金币 · 镐子 $3 级 · 发现物 $4 件"]
  ];
  const storyRows = window.DAH_STORY_ZH || [];
  for (const row of storyRows) {
    if (row.title && row.title_zh) textMap.set(row.title, row.title_zh);
    if (row.description && row.description_zh) textMap.set(row.description, row.description_zh);
    if (row.note && row.note_zh) textMap.set(row.note, row.note_zh);
  }
  const replacements = Array.from(textMap.entries()).sort((a, b) => b[0].length - a[0].length);
  const translatedOriginals = new WeakMap();
  function translate(value) {
    let result = value.trim();
    if (textMap.has(result)) return textMap.get(result);
    for (const [source, target] of replacements) {
      if (source.length > 2 && result.includes(source)) result = result.split(source).join(target);
    }
    for (const [pattern, replacement] of dynamic) result = result.replace(pattern, replacement);
    result = result.replace(/(My first|World \d+) worlds/g, "$1 世界");
    result = result.replace(/other 个世界/g, "其他世界");
    return result;
  }
  function visit(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const before = node.nodeValue;
      const original = translatedOriginals.get(node);
      if (original !== undefined && before === translate(original)) return;
      const after = translate(before);
      if (after !== before.trim()) { translatedOriginals.set(node, before); node.nodeValue = before.replace(before.trim(), after); }
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE && node !== document) return;
    if (node.nodeType === Node.ELEMENT_NODE) {
      for (const name of ["aria-label", "title", "placeholder"]) {
        const value = node.getAttribute(name);
        if (value) {
          const translated = translate(value);
          if (translated !== value) node.setAttribute(name, translated);
        }
      }
    }
    for (const child of node.childNodes) visit(child);
  }

  try {
    const key = "mining-game.settings.v2";
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    saved.volume = 0;
    saved.music = false;
    saved.musicVolume = 0;
    localStorage.setItem(key, JSON.stringify(saved));
  } catch (_) {}

  // Local-only GM panel: applies currency through the original progress object and save path.
  const gmStyle = document.createElement("style");
  gmStyle.textContent = "#gm-entry{position:fixed;right:14px;top:14px;z-index:100000;border:1px solid #e5b75f;border-radius:999px;padding:9px 15px;background:#302719;color:#ffe0a0;font:700 14px system-ui;box-shadow:0 4px 16px #0006;cursor:pointer}#gm-entry:hover{background:#493820}#gm-panel{position:fixed;inset:0;z-index:100001;display:none;place-items:center;background:#0009;font:15px system-ui;color:#f7f1e7}#gm-panel.open{display:grid}#gm-card{width:min(340px,calc(100vw - 36px));padding:22px;border:1px solid #8b704a;border-radius:16px;background:#29251f;box-shadow:0 18px 55px #0009}#gm-card h2{margin:0 0 8px;font-size:21px}#gm-card p{margin:0 0 16px;color:#cfc4b2}#gm-amount{box-sizing:border-box;width:100%;padding:11px;border:1px solid #76664f;border-radius:9px;background:#171512;color:#fff;font-size:17px}#gm-actions{display:flex;gap:10px;margin-top:14px}#gm-actions button{flex:1;padding:10px;border:0;border-radius:9px;font-weight:700;cursor:pointer}#gm-add{background:#e7b65e;color:#282016}#gm-close{background:#49433a;color:#fff}#gm-status{min-height:20px;margin-top:12px;color:#bfe0a1;font-size:13px}";
  document.head.appendChild(gmStyle);
  const gmButton = document.createElement("button");
  gmButton.id = "gm-entry";
  gmButton.type = "button";
  gmButton.textContent = "GM";
  gmButton.title = "金币管理";
  const gmPanel = document.createElement("div");
  gmPanel.id = "gm-panel";
  gmPanel.innerHTML = '<section id="gm-card" role="dialog" aria-modal="true" aria-labelledby="gm-title"><h2 id="gm-title">GM 金币</h2><p>输入要增加的金币数量</p><input id="gm-amount" type="number" min="1" step="1" inputmode="numeric" placeholder="例如：1000"><div id="gm-actions"><button id="gm-add" type="button">增加金币</button><button id="gm-close" type="button">关闭</button></div><div id="gm-status" role="status"></div></section>';
  document.body.append(gmButton, gmPanel);
  const amountInput = gmPanel.querySelector("#gm-amount");
  const status = gmPanel.querySelector("#gm-status");
  const closePanel = () => gmPanel.classList.remove("open");
  gmButton.addEventListener("click", () => { status.textContent = ""; gmPanel.classList.add("open"); amountInput.focus(); });
  gmPanel.addEventListener("click", event => { if (event.target === gmPanel) closePanel(); });
  gmPanel.querySelector("#gm-close").addEventListener("click", closePanel);
  gmPanel.addEventListener("keydown", event => { if (event.key === "Escape") closePanel(); });
  gmPanel.querySelector("#gm-add").addEventListener("click", () => {
    const amount = Number(amountInput.value);
    const game = window.__digAHoleGame;
    if (!Number.isSafeInteger(amount) || amount < 1) { status.textContent = "请输入大于 0 的整数。"; return; }
    if (!game || !game.progress || !game.save || game.state === "loading") { status.textContent = "游戏仍在加载，请稍后再试。"; return; }
    game.progress.addCoins(amount);
    game.saveProgress();
    status.textContent = "已增加 " + amount.toLocaleString("zh-CN") + " 金币；当前余额 " + game.progress.data.coins.toLocaleString("zh-CN") + "。已保存到当前世界。";
    amountInput.value = "";
  });


  // Keep world-slot activation reliable even when localized descendants are re-rendered.
  document.addEventListener("click", event => {
    const row = event.target instanceof Element ? event.target.closest(".world-list [data-slot]") : null;
    if (!row || event.target.closest("[data-rename], .world-rename-input")) return;
    const game = window.__digAHoleGame;
    if (!game || !game.screens || !game.screens.onLoadSlot) return;
    if (row.classList.contains("current")) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    game.screens.onLoadSlot(row.dataset.slot);
  }, true);
  document.addEventListener("keydown", event => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const row = event.target instanceof Element ? event.target.closest(".world-list [data-slot]") : null;
    if (!row || event.target.closest("[data-rename], .world-rename-input")) return;
    const game = window.__digAHoleGame;
    if (!game || !game.screens || !game.screens.onLoadSlot || row.classList.contains("current")) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    game.screens.onLoadSlot(row.dataset.slot);
  }, true);

  document.documentElement.lang = "zh-CN";
  document.title = "挖个大坑";
  visit(document.body || document.documentElement);
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === "characterData") visit(record.target);
      for (const node of record.addedNodes || []) visit(node);
    }
  }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
})();
