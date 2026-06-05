# 現有投影片更新內容大綱

> v1 → v2 投影片更新清單

---

## A. 01-opening.html

### Slide 6（路線圖）：修改

**原內容**：AM = CLI 基礎，PM1 = Git 版本控制，PM2 = Agentic AI 實作
**新內容**：
- AM（09:00-12:15）：CLI 基礎 — 不怕黑畫面，能操作檔案和目錄
- PM1（13:15-14:45）：Git 版控橋樑 — 知道為什麼要版控，會 add/commit/push
- PM2（15:00-16:15）：AI 協作目的地 — 用自然語言指揮 AI，你負責審查

**關鍵字變更**：
- Git：「版本控制」→ 「版控橋樑」
- AI：「Agentic AI 實作」→ 「AI 協作目的地」

---

## B. 02-cli-basics.html

### 新增：Unit 分界 slide

**位置**：在 CLI 導航段和 CLI 操作段之間
**Slide ID**：unit-transition-1to2
**標題**：CLI 導航 ✓ → CLI 操作
**內容**：
- 左邊綠色勾勾：pwd / cd / ls / mkdir / touch — 已完成
- 右邊箭頭：cp / mv / rm / cat / grep / pipe — 接下來
- 底部：「10:45 回來，我們繼續」

### 新增：微休息提示 slide（×3-4 張）

**Slide ID**：micro-break-1, micro-break-2, micro-break-3, micro-break-4
**標題**：⚡ 微休息 90 秒
**內容**：
- 大字：「⚡ 微休息 90 秒」
- 副標：「站起來，伸個懶腰，看遠方」
- 視覺：簡單計時器動畫（橘色圓環倒數）
- 底部小字：「時間到，我們繼續」

**出現時機**（每 25min 插一次）：
- micro-break-1：約 09:50（Unit 1 中段）
- micro-break-2：約 10:15（Unit 1 末段）
- micro-break-3：約 11:10（Unit 2 中段）
- micro-break-4：約 11:35（Unit 2 末段）

### 新增：綜合練習 slide

**Slide ID**：comprehensive-practice
**標題**：你的第一個專案資料夾
**時間**：11:55-12:10（15 min）
**內容**：
- 情境：「建一個 my-project 資料夾，裡面放你的自我介紹」
- 步驟：
  ```bash
  # Step 1: 建專案資料夾
  mkdir my-project
  cd my-project

  # Step 2: 建自我介紹檔案
  touch intro.txt

  # Step 3: 寫入內容
  echo "我叫 ___，今天學 CLI" > intro.txt

  # Step 4: 確認內容
  cat intro.txt

  # Step 5: 搜尋關鍵字
  grep "CLI" intro.txt

  # Step 6: 回到上層確認結構
  cd ..
  ls my-project/
  ```
- 完成標準：「cat intro.txt 看得到內容就過關！」
- 底部：「卡住？翻紅色便利貼」

---

## C. 04-closing.html → 05-closing.html

### 更新：三層能力架構圖（Slide 3: pillars）

**原**：CLI 能力→Git 習慣→AI 協作
**新**：
- CLI = 門票（不怕黑畫面，能操作檔案和目錄）
- Git = 橋樑（知道為什麼要版控，會 add/commit/push）
- AI = 目的地（用自然語言指揮 AI，你負責審查）

**視覺**：
- CLI 綠色（門票 = 入場券圖示）
- Git 藍色（橋樑 = 連接線圖示）
- AI 紫色（目的地 = 旗幟圖示）

### 更新：日常循環（Slide 4: daily）

**原**：pull → branch → claude → diff → commit → push
**新**：
```
claude "做什麼"     # AI 幫你做
git diff             # 你檢查產出
git add .            # 你決定納入
git commit -m "..."  # 你留下紀錄
git push             # 你推上遠端
```
重點：AI 在前、人在後。人永遠是最後守門員。

### 更新：延伸資源（Slide 7: resources）

**新增資源**：
- learngitbranching.js.org — Git 分支視覺化練習
- Claude Code docs — claude.ai/code
- 「為什麼要版控」一頁摘要（今天帶回去的）

---

## 投影片編號對照

| 原編號 | 新編號 | 變更 |
|--------|--------|------|
| 00-briefing.html | 00-briefing.html | 不變 |
| 01-opening.html | 01-opening.html | 修改路線圖 |
| 02-cli-basics.html | 02-cli-basics.html | 新增 Unit 分界 + 微休息 + 綜合練習 |
| 03-git-and-ai.html | 03-git.html | 拆分：Git 獨立 |
| — | 04-agentic-ai.html | 新增：AI 獨立 |
| 04-closing.html | 05-closing.html | 改編號 + 更新三層架構 |