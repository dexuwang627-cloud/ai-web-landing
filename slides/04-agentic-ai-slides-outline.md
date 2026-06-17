# 04-agentic-ai.html — 投影片內容大綱

> AI HTML 改版段（13:05-16:05 彈性使用）｜主線：AI 改 `index.html` → 本機打開 → 重新整理確認。Git / push 不列入本單元必做。

---

### Slide 1: ai-section-title
**標題**：AI 改版 — 今天的作品引擎
**內容**：
- 你已經建立了 `index.html`
- 接下來讓 AI 幫你把它改成像作品
- 完成循環：「AI 改 HTML → 本機打開 → 重新整理確認」

---

### Slide 2: from-cli-to-ai
**標題**：對話式 vs 代理式 AI
**內容**：
- 對話式：你問一句、AI 答一句（ChatGPT 網頁版）
- 代理式：你給目標，AI 讀檔、寫檔、幫你改頁面
- 今天的重點不是炫技，是讓 AI 修改專案資料夾裡的 `index.html`

---

### Slide 3: tool-ecosystem
**標題**：AI 工具生態概覽
**內容**：
- Cursor：編輯器裡直接用
- Copilot：適合已經知道要寫什麼的人
- Claude Code / Codex CLI：終端機裡改檔案
- 本課用哪個工具不重要，重點是看懂「AI 幫你改了哪個檔案」

---

### Slide 4: claude-code-features
**標題**：Claude Code 四大特色
**內容**：
- 終端機操作：就在 `my-page` 資料夾裡跑
- 直接改檔案：修改 `index.html`
- 一條指令啟動
- 看得到結果：用瀏覽器驗收，不只看程式碼

---

### Slide 5: claude-code-demo
**標題**：現場 Demo：一句話改出網頁
**終端機**：
```bash
cd my-page
claude "請把 index.html 改成個人介紹頁，單檔 HTML，不用外部套件"
cat index.html
open index.html   # Windows: start index.html
```
**講師重點**：AI 產出一定要用瀏覽器看過才算完成。

---

### Slide 6: micro-break-1
**標題**：微休息 90 秒
**內容**：
- 站起來、動一動、喝水
- 等等換學員動手改自己的頁面

---

### Slide 7: hands-on-init
**標題**：跟做：回到 my-page + 啟動 Claude
**終端機**：
```bash
cd my-page
ls
claude "請把 index.html 改成我的個人介紹頁，保留單檔 HTML"
```
**過關標準**：`ls` 看得到 `index.html`，AI 開始修改同一個檔案。

---

### Slide 8: hands-on-diff
**標題**：跟做：AI 產出 → 瀏覽器檢查
**終端機**：
```bash
open index.html   # Windows: start index.html
```
**內容**：
- 瀏覽器看到標題、介紹、卡片
- 重新整理後確認新版有出現
- 不滿意就再請 AI 修改

---

### Slide 9: hands-on-open-revise
**標題**：跟做：打開 → 修改 → 重新整理
**終端機**：
```bash
open index.html
claude "請加上三張卡片，風格低飽和、乾淨"
open index.html
```
**循環**：AI 改 → 你看 → 不滿意再改。

---

### Slide 10: free-play-intro
**標題**：自由嘗試：三個題目
**內容**：
- 個人介紹頁：姓名、興趣、聯絡方式
- 活動介紹頁：活動主題、時間、地點
- 店家介紹頁：服務、營業時間、聯絡方式
- 記得：`claude → open index.html → refresh`

---

### Slide 11: free-play-session
**標題**：自由嘗試時間
**內容**：
- 用同一個 `my-page` 繼續玩
- 每次改完都回瀏覽器重新整理
- 遇到問題舉手，助教幫忙

---

### Slide 12: ai-daily-loop
**標題**：AI 日常循環
**終端機**：
```bash
claude "請修改 index.html..."
cat index.html
open index.html
# 重新整理瀏覽器
```
**一句話**：CLI 是入口，HTML 是成果，AI 是幫手。

---

### Slide 13: unit4-wrap
**標題**：你今天從零學會了
**內容**：
- CLI 操作
- 本機 HTML
- AI 改版
- 回家作業：把今天的 `index.html` 再改一版
