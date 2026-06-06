# 現有投影片更新內容大綱

> v1 → v2 投影片更新清單
>
> 2026-06-05 更新：01-opening.html 從 10 頁擴充到 12 頁，加自我介紹 + AI 互動對比卡；時段從 09:00-09:30 拉長到 09:00-09:40。

---

## A. 01-opening.html

### 新增：自我介紹 slide（NEW 2026-06-05）

**Slide ID**：`self-intro`
**位置**：slide 1（welcome）之後
**時間**：約 5 min
**內容**：
- 4 條 feature item
  - 橘色邊線：你的名字 + 一句話定位（placeholder：`你的名字（placeholder）` / `一句話定位：例如「寫程式的人 / 教人寫程式的人」`）
  - 藍色邊線：技術背景（placeholder：`技術背景（placeholder）` / `例：全端工程師 N 年 / 寫過什麼 / 在哪裡寫過`）
  - 紫色邊線：教學經驗（placeholder：`教學經驗（placeholder）` / `例：開源貢獻 / 教過幾梯 / 學員背景`）
  - 綠色邊線：今天為什麼站在這（固定文案：`一句話：把我會的，用你也能會的方式教給你`）

### 新增：AI 互動對比卡 slide（NEW 2026-06-05）

**Slide ID**：`ai-can`
**位置**：自我介紹之後，原本「黑畫面恐懼」之前
**時間**：約 12 min（講師控節奏）
**內容**：
- 標題：「AI 已經能做到哪些事？」
- 副標：「點任一張卡，看同一件事在『過去』和『現在』怎麼做」
- 4 個任務按鈕：
  - 📄 寫會議記錄
  - 📊 PDF 轉表格
  - 🐛 修程式 bug
  - 📚 學新東西
- 點擊後下方 Before/After 對比卡同時更新：
  - 左：過去的步驟 + ⏱ 時間
  - 右：現在的步驟 + ⏱ 時間
- 預設顯示「← 點上方任一張卡」引導

**為什麼是 HTML 互動而不是 live demo**：不依賴現場網路 / AI 服務穩定性，零風險。

### Slide 7（路線圖，原本是 slide 6）：修改

**原內容**：AM = CLI 基礎，PM1 = Git 版本控制，PM2 = Agentic AI 實作
**新內容**：
- AM（09:00-12:10）：CLI 基礎 — 不怕黑畫面，能操作檔案和目錄
- PM1（13:05-14:35）：Git 版控橋樑 — 知道為什麼要版控，會 add/commit/push
- PM2（14:50-16:05）：AI 協作目的地 — 用自然語言指揮 AI，你負責審查

**關鍵字變更**：
- Git：「版本控制」→ 「版控橋樑」
- AI：「Agentic AI 實作」→ 「AI 協作目的地」

### Slide 編號對應（v1 → v2）

| v1 slide # | v2 slide # | 內容 |
|------------|------------|------|
| 1 welcome | 1 welcome | 不變 |
| — | 2 self-intro | **新增** |
| — | 3 ai-can | **新增** |
| 2 black-screen | 4 black-screen | 順移 |
| 3 why-here | 5 why-here | 順移 |
| 4 before-after | 6 before-after | 順移 |
| 5 shift | 7 shift | 順移 |
| 6 plan | 8 plan | 順移（內容更新） |
| 7 rules | 9 rules | 順移 |
| 8 terminal-check | 10 terminal-check | 順移 |
| 9 succeed | 11 succeed | 順移 |
| 10 start | 12 start | 順移 |

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