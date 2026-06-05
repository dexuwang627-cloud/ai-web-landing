# 04-agentic-ai.html — 投影片內容大綱

> Unit 4（15:00-16:15，75 min）｜講解:實作 = 45:55
> AI 定位：目的地——學員今天的最終目標

---

### Slide 1: ai-section-title
**標題**：AI 協作 — 今天的目的地
**時間**：1 min
**內容**：
- 你已經學會 CLI 和 Git——它們是工具
- AI 讓工具自己動起來
- 接下來 75 分鐘，你會親手完成「跟 AI 一起寫 code → commit → push」

---

### Slide 2: from-cli-to-ai
**標題**：對話式 vs 代理式 AI
**時間**：6 min
**內容**：
- 對話式：你問一句、AI 答一句（ChatGPT 網頁版）
- 代理式：你給目標、AI 自己找工具完成（讀檔、寫檔、跑指令、commit）
- 類比：對話式 = 坐計程車說「左轉右轉」；代理式 = 說地址，司機自己導航
- 今天的主角是代理式——它直接操作你的終端機和 Git
**終端機**：
```
# 對話式：複製貼上
你：幫我寫一個函式
AI：[貼到編輯器]

# 代理式：直接動手
你：幫我建 Express API 專案
AI：[讀檔 → 寫檔 → npm install → git commit]
```
**互動**：問「平常用過哪些 AI 工具？是對話式還是代理式？」

---

### Slide 3: tool-ecosystem
**標題**：AI 工具生態概覽
**時間**：6 min
**內容**：
- Cursor：IDE 內建 AI，視覺化操作
- GitHub Copilot：行內自動完成，適合已經知道要寫什麼的人
- Claude Code：終端機原生的代理式 AI，今天的主角
- Codex CLI：OpenAI 的終端機 AI agent
- 選擇邏輯：IDE 用戶 → Cursor/Copilot；CLI 用戶 → Claude Code/Codex
**互動**：秀四個工具的 logo 截圖，問「有人用過哪一個？」

---

### Slide 4: claude-code-features
**標題**：Claude Code 四大特色
**時間**：7 min
**內容**：
- 終端機操作：就是在你熟悉的 CLI 裡跑，不用切視窗
- 自動 Git：改完檔案自動 diff、自動 commit，版本控制不漏接
- 就是 CLI：一條指令啟動，不需要 IDE 或特殊編輯器
- 端到端：從建檔到 push 全包，不是只幫你寫片段
**終端機**：
```
$ claude
> 幫我建一個 Express 專案，要有 hello world 路由

✓ Created package.json
✓ Created index.js
✓ Ran npm install
✓ Created git repo + initial commit
```
**互動**：指出「你最熟的 CLI，就是 Claude Code 的家」

---

### Slide 5: claude-code-demo
**標題**：現場 Demo
**時間**：11 min
**內容**：
- 講師現場操作：mkdir → cd → git init → claude
- 給 Claude 一個明確指令，看它讀檔、寫檔、跑指令
- 打開產出的檔案，確認內容合理
- 示範 diff 檢查 → add → commit → push 全流程
- 關鍵：AI 產出的東西你一定要自己看過再 commit
**終端機**：
```
$ mkdir demo-project && cd demo-project
$ git init
$ claude "幫我建一個 Python 計算機 CLI 工具"
# [觀察 Claude 的操作過程]
$ git diff          # 先看改了什麼
$ git add .
$ git commit -m "feat: calculator CLI"
$ git push
```
**互動**：講師邊做邊說，學員只看不操作。重複強調「先 diff 再 commit」

---

### Slide 6: micro-break-1
**標題**：⚡ 微休息 90 秒
**時間**：1.5 min
**內容**：
- 站起來、動一動、喝水
- 等等就要換你動手了

---

### Slide 7: hands-on-init
**標題**：跟做 Step 1-2：建專案 + 啟動 Claude
**時間**：8 min
**內容**：
- Step 1：mkdir my-project && cd my-project
- Step 2：git init
- 啟動 Claude：輸入明確指令
- 指令寫法技巧：說清楚「做什麼」+「長什麼樣」
- 等待 Claude 完成，觀察它的操作過程
**終端機**：
```
$ mkdir my-project
$ cd my-project
$ git init
Initialized empty Git repository in .../my-project/.git/
$ claude "幫我建一個 intro.txt，內容是自我介紹，3-5 行"
# [等待 Claude 完成]
```
**互動**：學員同步操作，助教巡場。有人卡住就全場暫停一起解

---

### Slide 8: hands-on-diff
**標題**：跟做 Step 3：AI 產出 → diff 檢查
**時間**：8 min
**內容**：
- Step 3：git diff 看看 AI 改了什麼
- 為什麼要先看 diff？AI 也會寫錯，你是最後守門員
- diff 看不懂沒關係：找綠色（新增）和紅色（刪除）就好
- 確認沒問題才進入下一步
**終端機**：
```
$ git diff
+ Hello, 我是 ___
+ 今天參加了 CLI + Git + AI 課程
+ 正在學習用 AI 協作寫程式
```
**互動**：問「diff 裡看到什麼？有沒有出乎意料的內容？」

---

### Slide 9: hands-on-commit-push
**標題**：跟做 Step 4-6：add → commit → push
**時間**：9 min
**內容**：
- Step 4：git add . 把 AI 產出的檔案加入暫存區
- Step 5：git commit -m "你的提交訊息"
- Step 6：git push 推上遠端
- 完成一個完整循環：AI 寫 → 你看 → 你 commit → 你 push
- 這就是 AI 時代的 Git 工作流
**終端機**：
```
$ git add .
$ git commit -m "feat: add intro.txt"
[main (root-commit) abc1234] feat: add intro.txt
 1 file changed, 3 insertions(+)
$ git push origin main
```
**互動**：全場確認 push 成功。舉手示意「push 成功的舉手」

---

### Slide 10: free-play-intro
**標題**：自由嘗試：三個題目
**時間**：3 min
**內容**：
- 題目 1：用 AI 建一個 README.md，介紹你的 my-project
- 題目 2：用 AI 幫你的資料夾加一個 index.html
- 題目 3：用 AI 修改剛才的 intro.txt，加一段今天學了什麼
- 有自己的想法也歡迎——給 AI 一個明確指令就好
- 記得：claude → diff → add → commit → push
**終端機**：
```
$ claude "幫我建 README.md，介紹 my-project 專案"
# 看完 diff 再 commit
$ git diff && git add . && git commit -m "..."
```

---

### Slide 11: free-play-session  ⚡可跳
**標題**：自由嘗試時間 ⚡
**時間**：10 min
**內容**：
- 用同一個 my-project 資料夾繼續操作
- 每次改完都跑 diff → add → commit → push
- 嘗試不同的指令，觀察 AI 的回應差異
- 遇到問題舉手，助教會來幫忙

---

### Slide 12: ai-daily-loop
**標題**：AI 日常循環
**時間**：5 min
**內容**：
- 一句話記住今天：claude → diff → add → commit → push
- 你負責「看」和「決定」，AI 負責「做」
- diff 是關鍵——不看就不 commit
- 這個循環以後每天都可以用，不限於課堂
- CLI 是手，Git 是記憶，AI 是夥伴
**終端機**：
```
# 你的日常循環
$ claude "做什麼"     # AI 幫你做
$ git diff             # 你檢查產出
$ git add .            # 你決定納入
$ git commit -m "..."  # 你留下紀錄
$ git push             # 你推上遠端
```
**互動**：帶全場一起唸一次「claude → diff → add → commit → push」

---

### Slide 13: unit4-wrap
**標題**：Unit 4 小結
**時間**：2 min
**內容**：
- 你今天從零學會了：CLI 操作、Git 版本控制、AI 協作
- 三者串起來就是現代開發者的日常
- 回家作業：用 claude 幫自己做一個小專案，走完一次循環

---

**總計**：13 張投影片，75 min