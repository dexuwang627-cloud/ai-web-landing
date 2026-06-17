# 投影片索引 — CLI 與 AI HTML 實作班

> 2026-06-17 更新：課程改為初學者體驗版。主線是用 AI 做出本機 `index.html`，Git 只作為保存版本 demo，不教公開網址。

## 檔案對照

| 檔案 | 內容 | 投影片數 | 時段 |
|------|------|---------|------|
| `00-briefing.html` | 課程簡報（宣傳用） | 8 | — |
| `01-opening.html` | 開場：自我介紹 + AI 互動 + CLI 入門 | 12 | 09:00–10:30 |
| `02-cli-basics.html` | CLI 生存指令 + 第一個本機 HTML | 24 | 10:45–12:10 |
| `03-git.html` | Git 保存版本概念（講師 demo / 加分） | 12 | 14:50 前後彈性插入 |
| `04-agentic-ai.html` | AI 產生與改版本機 HTML | 13 | 13:05–16:05 |
| `05-closing.html` | 作品回顧與下一步 | 10 | 16:15–16:50 |

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
- **AI 互動對比卡**（`01-opening.html` slide 3）：4 張任務按鈕（會議記錄 / PDF 轉表格 / 修 bug / 學新東西），點擊切換下方 Before/After 步驟 + 時間。

## 時間表

- 09:00 開場（01）— 自我介紹 + AI 互動 + 路線圖
- 09:45 CLI 生存指令（02）— pwd/cd → ls → mkdir/touch → 建 `index.html`
- 10:45 第一個本機 HTML（02/04）— AI 產生 HTML → 本機瀏覽器打開
- 12:10 午餐（55min）
- 13:05 AI 改版練習（04）：好 prompt → 改版 → 本機重新整理驗收
- 14:35 休息
- 14:50 保存版本 + 自由完成作品（03/04）：Git 本機 demo → 三選一作品完成
- 16:05 休息
- 16:15 總結（05）：作品展示、本機 HTML、下一步、Q&A

## 三層定位

- **AI 對話 = 熟悉入口**：把想法說成 AI 能執行的任務
- **CLI = 操作入口**：知道作品在哪裡，能用指令開檔案
- **HTML = 可見成果**：本機瀏覽器看得到自己的作品
- **Git = 加分保存**：知道可以保存版本，不要求 push
