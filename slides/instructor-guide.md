---
title: Instructor Guide — CLI、Git 與 Agentic AI
tags: [project/ipas, instructor-guide, cli-training]
created: 2026-05-21
status: deprecated
deprecated: 2026-06-05
superseded_by: instructor-guide-v2.md
---

> ⚠️ **本檔為 v1 講師指南，已於 2026-06-05 標記過時。** 投影片編號、slide ID、時間表皆已過時。請改用 [`instructor-guide-v2.md`](./instructor-guide-v2.md)。
>
> 下方 v1 分段表保留作歷史參考，請勿用於實際授課。

# Instructor Guide — CLI、Git 與 Agentic AI 實作班

## 時間分配總覽

| 時段 | 投影片 | 時間 | 分鐘 | 節奏 |
|------|--------|------|------|------|
| 開場 | 01-opening | 09:00–09:30 | 30 | 講 + 互動 |
| CLI 基礎 | 02-cli-basics | 09:30–12:15 | 165 | 講 + 跟做 |
| 午餐 | — | 12:15–13:15 | 60 | — |
| Git 基礎 | 03-git | 13:15–14:45 | 90 | 講 + 跟做 |
| AI 實作 | 04-agentic-ai | 15:00–16:15 | 75 | 引導實作 |
| 總結 | 05-closing | 16:15–16:45 | 30 | 講 + Q&A |

> 本檔為 v1 講師指南。投影片已拆分/改編號（`03-git-and-ai.html` → `03-git.html` + `04-agentic-ai.html`，`04-closing.html` → `05-closing.html`）。新結構的逐張 slide 分解以 `instructor-guide-v2.md` 為準；下方 v1 分段表保留作參考。

---

## 01-opening（09:00–09:30，30 min）

| # | Slide ID | 內容 | 時間 | 講解重點 | 互動 |
|---|----------|------|------|---------|------|
| 1 | welcome | 歡迎 | 2 min | 不超過 30 秒開場 | — |
| 2 | black-screen | 黑畫面恐懼 | 3 min | 問：「看到這個畫面的感覺？」讓 2-3 人回答 | 舉手調查：誰怕黑畫面？ |
| 3 | why-here | 為什麼要學 CLI | 4 min | 連結到 AI 工具都需要 CLI | 問：「你用過哪些 AI 工具？」 |
| 4 | before-after | 今天前 vs 今天後 | 3 min | 對比表，讓學員知道終點 | — |
| 5 | shift | 從點滑鼠到下指令 | 3 min | 一行指令 vs 點 20 下的對比 | — |
| 6 | plan | 路線圖 | 3 min | AM = CLI，PM1 = Git，PM2 = AI | — |
| 7 | rules | 四條規則 | 4 min | 強調「錯了也沒關係」和「橘色 Mac / 藍色 Win」 | — |
| 8 | terminal-check | 打開終端機 | 8 min | 全場同時開終端機，確保每個人都能用 | 巡場幫裝 |
| 9 | succeed | 承諾：不怕黑畫面 | 2 min | 收攏信心 | — |
| 10 | start | 開始 | — | 過渡到 CLI | — |

**關鍵：slide 8（terminal-check）要預留最多時間。一定有人裝不好。**

---

## 02-cli-basics（09:30–12:00，150 min）

### 第一段：導航（09:30–10:15，45 min）

| # | Slide ID | 內容 | 時間 | 講解重點 | 互動 |
|---|----------|------|------|---------|------|
| 1 | section-title | CLI 基礎標題 | 1 min | 快速過 | — |
| 2 | what-cli | CLI 是什麼 | 4 min | 打字告訴電腦做什麼，不是點圖片 | — |
| 3 | why-cli | 為什麼要學 | 4 min | AI 工具門票、10x 效率、Git 基礎、自動化 | — |
| 4 | os-intro | Mac/Win 終端機 | 5 min | 橘色 Mac / 藍色 Win，解釋差異 | 全場開終端機確認 |
| 5 | nav-1 | pwd / cd | 6 min | 為什麼要先知道自己在哪 | 全場跟做 pwd |
| **5.5** | **practice-nav** | **跟做：穿越資料夾** | **8 min** | **每個人自己打一遍** | **巡場確認** |
| 6 | nav-2 | ls | 6 min | ls -la 看隱藏檔 | 問：「誰找到 .開頭的檔案？」 |

### 休息 5 min（10:15–10:20）

### 第二段：操作（10:20–11:10，50 min）

| # | Slide ID | 內容 | 時間 | 講解重點 | 互動 |
|---|----------|------|------|---------|------|
| 7 | create | mkdir / touch | 6 min | 建立 vs 新建，兩平台差異 | — |
| **7.5** | **practice-create** | **跟做：建專案結構** | **8 min** | **建 cli-practice + 三個檔案** | **巡場，確認 ls 看得到** |
| 8 | file-ops | cp / mv / rm | 8 min | rm 恐嚇時刻：刪了就沒了 | — |
| **8.5** | **practice-ops** | **跟做：複製搬移清理** | **8 min** | **cp → mv → rm 流程** | **提醒先 ls 再 rm** |
| 9 | read | cat / head / grep | 6 min | grep 搜尋是 CLI 最實用指令之一 | — |
| 10 | pipe | 管線與重導向 | 8 min | 這是 CLI 的超能力 | — |
| **10.5** | **practice-pipe** | **跟做：管線與搜尋** | **8 min** | **echo → grep → pipe** | **挑戰：ls \| grep .html** |

### 第三段：進階與總結（11:10–12:00，50 min）

| # | Slide ID | 內容 | 時間 | 講解重點 | 互動 |
|---|----------|------|------|---------|------|
| 11 | env | 環境變數 | 6 min | API Key 設定先預告，下午會用到 | — |
| 12 | cheatsheet | 指令總覽 | 4 min | 不用背，帶回去用 | 印出紙本小抄發下去 |
| 13 | practice | 動手時間 | 10 min | 完整練習一次 pwd→mkdir→touch→ls | 巡場確認每人都做完 |
| 14 | lunch | 午餐 | — | 預告下午學 Git | — |

---

## 03-git + 04-agentic-ai（13:15–16:15，原 03-git-and-ai 拆分）

### 第一段：Git 基礎（13:00–14:45，105 min）

| # | Slide ID | 內容 | 時間 | 講解重點 | 互動 |
|---|----------|------|------|---------|------|
| 1 | section-title | Git 與 AI 標題 | 1 min | 快速過 | — |
| 2 | what-git | Git 是什麼 | 5 min | 時間機器比喻，report_v2_final_REAL 對比 | 問：「誰改過檔名改到瘋掉？」 |
| 3 | git-flow | 三個區域 | 8 min | 工作目錄→暫存區→儲存庫，畫圖解釋 | — |
| 4 | git-init | git init / clone | 8 min | Mac/Win 雙版本 | 全場跟做 git init |
| **4.5** | **practice-git-init** | **跟做：第一次 commit** | **10 min** | **mkdir→init→touch→add→commit→log** | **巡場確認 git log 有東西** |
| 5 | git-commit | add + commit | 6 min | status→add→commit 三步曲 | — |
| 6 | branch | 分支 | 8 min | 平行宇宙比喻 | — |
| **6.5** | **practice-branch** | **跟做：分支與合併** | **10 min** | **checkout -b→修改→merge** | **挑戰：建 feature-footer 分支** |
| 7 | remote | push / pull | 8 min | GitHub 是雲端備份 | 如果時間夠，全場 push 到 GitHub |
| 8 | git-cheatsheet | Git 指令總覽 | 4 min | 發紙本小抄 | — |

### 休息 15 min（14:45–15:00）

### 第二段：Agentic AI（15:00–16:15，75 min）

| # | Slide ID | 內容 | 時間 | 講解重點 | 互動 |
|---|----------|------|------|---------|------|
| 9 | transition-ai | 從 CLI 到 AI | 3 min | 你已經會 CLI 了，現在讓 AI 幫你操作 | — |
| 10 | compare | 對話式 vs 代理式 | 6 min | ChatGPT vs Claude Code 的差別 | — |
| 11 | claude-code | Claude Code 介紹 | 6 min | 四個特色：終端機操作、自動 Git、就是 CLI、端到端 | — |
| 12 | other-tools | AI 工具生態 | 4 min | 快速帶過，不深入 | — |
| 13 | agentic-flow | Agentic 工作流 | 6 min | 描述→規劃→執行 | — |
| 14 | practice | 實作練習 | 25 min | 講師 demo 一次→學員跟做→自由嘗試 | 巡場幫 debug |
| 15 | workflow-summary | Git + AI 日常循環 | 5 min | claude→diff→add→commit→push | — |
| 16 | break | 休息 + Q&A | 15 min | — | 收問題 |

---

## 05-closing（16:15–16:45，原 04-closing）

| # | Slide ID | 內容 | 時間 | 講解重點 | 互動 |
|---|----------|------|------|---------|------|
| 1 | section-title | 總結標題 | 1 min | 快速過 | — |
| 2 | learned | 今天學了什麼 | 3 min | CLI + Git + AI 三支柱 | — |
| 3 | pillars | 三根支柱 | 4 min | CLI 能力→Git 習慣→AI 協作 | 問：「哪個最難？」 |
| 4 | daily | 每天工作循環 | 4 min | pull→branch→claude→diff→commit→push | — |
| 5 | pitfalls | 常見地雷 | 5 min | 四個地雷：rm、忘 commit、AI 幻覺、env 外洩 | 問：「誰踩過這些雷？」 |
| 6 | practice-tips | 持續練習 | 3 min | 每天用一次 CLI | — |
| 7 | resources | 延伸資源 | 3 min | 小抄、git-scm、learngitbranching | — |
| 8 | next | 接下來做什麼 | 4 min | 三步：裝環境→建 repo→試 Claude Code | — |
| 9 | qa | Q&A | 10 min | 任何問題 | 開放問答 |
| 10 | thanks | 謝謝 | 2 min | 收尾語 | — |

---

## 教學提醒

### 上午 CLI（最容易出問題的時段）

- **slide 8（terminal-check）是關鍵**：一定有人裝不好，預留 8-10 分鐘
- **Mac 用戶**：Terminal.app 在 Utilities 資料夾，用 Spotlight 最快
- **Windows 用戶**：建議裝 Windows Terminal，比內建 PowerShell 好用
- **rm 恐嚇時刻**：故意 `rm` 一個不重要檔案，問「能救回來嗎？」→ 不能
- **practice slides**：每個跟做環節巡場，確保落後的人有跟上

### 下午 Git（節奏最容易拖）

- **git init 練習**：確認每個人都看到 `git log --oneline` 的輸出
- **branch 練習**：如果 merge 衝突太難解釋，跳過衝突場景，只做快轉合併
- **push 到 GitHub**：如果 WiFi 太慢或有人沒帳號，講師 demo 即可，學員不必都做

### 下午 AI（最不可控）

- **Claude Code 安裝**：預裝 Node.js，講師提前測好
- **AI 幻覺**：示範一個 AI 生成不存在指令的例子，讓學員知道要檢查
- **如果網路不穩**：準備離線 demo 腳本，用截圖備案

### 冷場應對

| 狀況 | 解法 |
|------|------|
| 學員不動手 | 走到旁邊看螢幕：「來，我陪你打第一行」 |
| 做太快沒事做 | 「試試用不同的指令完成同一件事」 |
| 做太慢跟不上 | 「先跟著我的畫面看，截圖發群組」 |
| 全場安靜 | 正常 — 學生在打字就會安靜 |
| 問題太深 | 「這個很好，我們 Q&A 時間再聊，先跟上進度」 |

### 時間緩衝

- 上午 practice slides 總共約 30 min 跟做時間
- 如果落後，可壓縮 cheatsheet slide 到 2 min 快速帶過
- 下午 Git 如果超時，other-tools slide 可 2 min 快速帶過
- Q&A 時間可彈性調整