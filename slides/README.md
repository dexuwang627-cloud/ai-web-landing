# 投影片索引 — CLI、Git 與 Agentic AI 實作班

## 檔案對照

| 檔案 | 內容 | 投影片數 | 時段 |
|------|------|---------|------|
| `00-briefing.html` | 課程簡報（宣傳用） | 8 | — |
| `01-opening.html` | 開場：為什麼要學 CLI | 10 | 09:00–09:30 |
| `02-cli-basics.html` | CLI 基礎 | 14 | 09:30–12:00 |
| `03-git-and-ai.html` | Git 與 Agentic AI | 16 | 13:00–17:00 |
| `04-closing.html` | 總結與下一步 | 10 | 16:30–17:00 |

## 設計系統

- 背景：`--bg: #050508`（深黑）
- 主色：`--accent: #ff6b35`（橘色 = Mac）
- 輔色：`--accent2: #3b82f6`（藍色 = Windows）
- 字體：Noto Sans TC（正文）、Sora（標題）、JetBrains Mono（程式碼）
- 投影片：100vh/100dvh、scroll-snap、IntersectionObserver reveal 動畫
- 終端機元件：`.terminal` + `.terminal-header` + macOS 三色圓點
- OS 雙欄：`.os-split` + `.os-label.mac`（橘）+ `.os-label.win`（藍）

## 時間表

- 09:00 開場（01）
- 09:30 CLI 基礎（02）：pwd/cd → ls → mkdir/touch → cp/mv/rm → cat/grep → pipe/redirect → env → 練習
- 12:00 午餐
- 13:00 Git 基礎（03 前半）：init → add/commit → branch → remote/push
- 15:00 Agentic AI 實作（03 後半）：Claude Code 示範 + 實作練習
- 16:30 總結（04）：三支柱、日常循環、常見地雷、資源、Q&A