# 投影片索引 — CLI、Git 與 Agentic AI 實作班

## 檔案對照

| 檔案 | 內容 | 投影片數 | 時段 |
|------|------|---------|------|
| `00-briefing.html` | 課程簡報（宣傳用） | 8 | — |
| `01-opening.html` | 開場：為什麼要學 CLI | 10 | 09:00–09:30 |
| `02-cli-basics.html` | CLI 基礎（含單元分界 + 微休息 + 綜合練習） | 24 | 09:30–12:15 |
| `03-git.html` | Git 版控橋樑 | 12 | 13:15–14:45 |
| `04-agentic-ai.html` | Agentic AI 協作目的地 | 13 | 15:00–16:15 |
| `05-closing.html` | 總結與下一步 | 10 | 16:15–16:45 |

> `03-git-and-ai.html` 已拆分為 `03-git.html` + `04-agentic-ai.html`，原檔已移除。
> 內容來源大綱：`03-git-slides-outline.md`、`04-agentic-ai-slides-outline.md`、`existing-slides-updates.md`（保留當源頭）。

## 設計系統

- 背景：`--bg: #050508`（深黑）
- 主色：`--accent: #ff6b35`（橘色 = Mac）
- 輔色：`--accent2: #3b82f6`（藍色 = Windows）
- AI 標識色：`--ai: #a855f7`（紫色，04-agentic-ai 使用）
- 字體：Noto Sans TC（正文）、Sora（標題）、JetBrains Mono（程式碼）
- 投影片：100vh/100dvh、scroll-snap、IntersectionObserver reveal 動畫
- 終端機元件：`.terminal` + `.terminal-header` + macOS 三色圓點
- OS 雙欄：`.os-split` + `.os-label.mac`（橘）+ `.os-label.win`（藍）

## 互動元件

- **微休息倒數**（`[data-countdown]`）：JS `requestAnimationFrame` 真倒數 90 秒，橘色圓環同步收束，歸零變綠；每次滑回該頁自動重跑。02 有 4 張、03/04 各 1 張。
- **檔名飛掠背景**（`[data-filename-fly]`）：03 section-title 背景，JS 注入「report_final_REAL…」等檔名橫向飄過，呈現「檔名地獄」意象。
- **單元分界**（`.unit-divider`）：02 導航 → 操作之間，左綠勾已完成、右橘箭頭接下來。

## 時間表

- 09:00 開場（01）
- 09:30 CLI 基礎（02）— Unit 1 導航：pwd/cd → ls → mkdir/touch
- 10:45 CLI 基礎（02）— Unit 2 操作：cp/mv/rm → cat/grep → pipe/redirect → env → 綜合練習
- 12:15 午餐
- 13:15 Git 版控橋樑（03）：時間機器 → 三區 → init/add/commit → push/GitHub → branch/衝突 → 五條命
- 14:45 休息
- 15:00 Agentic AI（04）：對話式 vs 代理式 → Claude Code → demo → 跟做循環 → 自由嘗試
- 16:15 總結（05）：三層能力（門票/橋樑/目的地）、日常循環、常見地雷、資源、Q&A

## 三層定位

- **CLI = 門票**：不怕黑畫面，能操作檔案和目錄
- **Git = 橋樑**：知道為什麼要版控，會 add / commit / push
- **AI = 目的地**：用自然語言指揮 AI，你負責審查 —— 你是最後守門員
