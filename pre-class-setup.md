---
title: 課前安裝與備援指南 — CLI 與 AI HTML 實作班
tags: [project/ipas, pre-class, setup, instructor-guide]
created: 2026-06-18
status: draft
parent: 單日班架構-v2.md
---

# 課前安裝與備援指南 — CLI 與 AI HTML 實作班

> 給講師與學員的課前準備手冊。目標：上課前每個人都能打開終端機、跑起 opencode、並且有至少一條可用的 AI 額度。裝不起來沒關係，課堂前 30 分鐘是安裝緩衝，現場統一救。

---

## 一句話定位

這堂課的主工具是 **opencode**（本機 AI CLI）。它有三種免費上路方式：用內建免費模型、登入 ChatGPT 帳號、或登入 GitHub Copilot。學員不需要先辦 API key、不需要信用卡。

---

## 學員自備清單

上課前請學員自行確認：

- [ ] 自備筆電（Mac 或 Windows 皆可），電力充足並帶充電器
- [ ] 瀏覽器可正常開啟（Chrome / Edge / Safari 任一）
- [ ] 能連上網路（現場 Wi-Fi 或熱點）
- [ ] 終端機打得開：Mac 的 Terminal、Windows 的 PowerShell
- [ ] 其中一個帳號備用（擇一即可，課堂會帶著登入）：
  - ChatGPT 帳號（免費版即可，有 Plus / Pro 更好）
  - 或 GitHub 帳號（用來登入 Copilot 免費額度）
- [ ] 不需要先安裝任何東西。安裝在課堂統一帶。

> 講師提醒：把這份清單在開課前三天貼到 LINE 群組。重複提醒「不用先裝、不用先辦 API key」，降低學員焦慮。

---

## 安裝步驟（Mac 與 Windows 共用）

下面三步是完整安裝流程。課堂緩衝時間會帶著走，學員課前不必先做；想先試的人可以照著跑。

### 步驟 1：安裝 Node.js

opencode 需要 Node.js 環境。裝一次終身可用。

**Mac（Terminal）**

到 https://nodejs.org 下載 LTS 版本安裝器，雙擊安裝。安裝完打開 Terminal 驗證：

```bash
node -v
npm -v
```

有看到版本號（例如 `v20.x.x`）就成功。

**Windows（PowerShell）**

同樣到 https://nodejs.org 下載 LTS 版本安裝器，執行安裝。安裝完打開 PowerShell 驗證：

```powershell
node -v
npm -v
```

> 如果 `node -v` 出現「找不到命令」，關掉終端機重開一次；安裝器需要重開才生效。

### 步驟 2：安裝 opencode

**Mac（Terminal）**

```bash
curl -fsSL https://opencode.ai/install | bash
```

**Windows（PowerShell）**

推薦用 npm 安裝（需先完成步驟 1）：

```powershell
npm i -g opencode-ai@latest
```

安裝完驗證：

```bash
opencode -v
```

有看到版本號就成功。

### 步驟 3：設定 AI 額度（三條路線，擇一即可）

opencode 不強制要 API key。下面三條路線任選一條，課堂會帶著登入。

#### 路線 A：用內建免費模型（最簡單）

opencode 本身附免費模型，打開就能用，不需要任何帳號或 key。

```bash
cd Desktop/my-page
opencode
```

進入後直接打字下指令即可。適合第一次體驗、不想綁帳號的學員。

> 講師提醒：免費模型有速率限制，全班同時用可能排隊。建議至少一半學員走路線 B 或 C 分流。

#### 路線 B：登入 ChatGPT 帳號（推薦）

有 ChatGPT 帳號（免費版即可，Plus / Pro 額度更多）的學員走這條。opencode 會用 ChatGPT 訂閱額度，不另外扣費、不需要 API key。

```bash
opencode auth login
```

選 OpenAI 登入，瀏覽器會跳出授權頁，登入 ChatGPT 帳號即完成。

#### 路線 C：登入 GitHub Copilot

有 GitHub 帳號的學員可用 Copilot 免費額度。

```bash
opencode auth login
```

選 GitHub 登入，瀏覽器跳出授權頁，登入 GitHub 帳號即完成。

> 三條路線都不需要付費、不需要綁信用卡。學員只要記得自己用哪一條，下課後回家也能繼續用。

---

## 驗證安裝成功

完成上面三步後，跑這段確認整條鏈通：

```bash
# 1. 確認 Node
node -v

# 2. 確認 opencode
opencode -v

# 3. 確認能進對話
cd Desktop
mkdir my-page
cd my-page
opencode
```

進到 opencode 對話畫面、能輸入訊息，就過關。退出按 `Ctrl + C` 或輸入 `/exit`。

---

## 備援方案（主工具掛掉時）

課堂不以失敗為恥，以「每個人都有畫面」為準。opencode 裝不起來、額度卡住、或全班同時塞車時，立刻切備援。

### 備援 1：ChatGPT Codex 桌面版

ChatGPT 官方桌面版（Mac / Windows）可本機讀寫檔案，行為接近 CLI 體驗。

- 下載：https://chatgpt.com/download
- 開啟後選「Codex」模式，指向 `my-page` 資料夾
- 用對話方式請它改 `index.html`，改完一樣用瀏覽器 `open index.html` 看

> 適合 opencode 完全裝不起來、但 ChatGPT 帳號正常的學員。

### 備援 2：Claude Cowork

Claude 桌面版 / Cowork 功能可本機改檔，流程與 Codex 類似。

- 下載：https://claude.ai/download
- 開啟後授權資料夾存取，指向 `my-page`
- 請它修改 `index.html`，瀏覽器驗收

> 適合本來就用 Claude 的學員。

### 備援 3：ChatGPT / Claude 網頁版（最後防線）

完全沒有本機工具時，退回網頁版手動貼。

1. 在網頁版 ChatGPT 或 Claude 貼 prompt，請它產生 `index.html` 完整內容
2. 學員手動把內容複製貼進本機 `index.html`（用記事本 / TextEdit 開）
3. 存檔後 `open index.html` 看畫面
4. 要改版就回網頁版貼新 prompt，再手動覆蓋檔案

> 這條路線放棄「AI 直接改檔」的體驗，但保證每個人都能看到自己的網頁。講師判定主工具無救時才走這條。

### 備援選擇順序

| 情況 | 用哪個備援 |
|------|-----------|
| opencode 裝不起來，但有 ChatGPT 帳號 | 備援 1 Codex 桌面版 |
| opencode 裝得起來但額度塞車 | 路線 B / C 換帳號，或備援 1 |
| 整台筆電裝什麼都失敗 | 備援 3 網頁版 + 手動貼 |
| 學員只熟悉某一個工具 | 直接用他熟悉的那個，不要硬換 |

---

## 課堂 30 分鐘安裝緩衝方案

課程排 09:00 開始，但 **08:30 – 09:00 保留為安裝緩衝**。提前到的學員先裝，正常到的學員在這 30 分鐘內補裝。09:00 正式開場時，全班至少要有一條可用 AI 路線。

### 緩衝時間流程

| 時間 | 動作 | 負責 |
|------|------|------|
| 08:30 | 開門，助教就位，發紅綠便利貼 | 助教 |
| 08:30 – 08:40 | 學員報到，確認筆電開機、連 Wi-Fi | 助教 |
| 08:40 – 08:50 | 統一帶安裝 Node.js + opencode（投影片同步秀指令） | 講師 |
| 08:50 – 09:00 | 個別救援：裝不起來的舉紅便利貼，助教逐一處理 | 助教 |
| 09:00 | 正式開場。尚未裝好的學員走備援 3 網頁版，不阻塞全場 | 講師 |

### 救援優先順序

助教處理紅便利貼時，依下面順序快速判斷：

1. **Node.js 沒裝好** → 幫他重跑安裝器，重開終端機再驗證 `node -v`
2. **opencode 指令找不到** → 確認 Node 在，重跑 `npm i -g opencode-ai@latest`；Mac 可改用 `curl -fsSL https://opencode.ai/install | bash`
3. **opencode 進不去 / 額度卡住** → 改走路線 A 內建免費模型；再不行走備援 1
4. **整台筆電網路或權限問題** → 直接走備援 3 網頁版，先讓他有畫面，不要在緩衝時間 debug 系統

### 時間不夠時的取捨

- 緩衝時間只能救 30 分鐘。超過 09:00 還裝不好的人，**果斷切備援 3**，讓他跟上主流程。下午再找空檔幫他裝本機工具。
- 不要為了一個學員的安裝問題卡住全班。本機工具是體驗加分，不是畢業門檻；網頁版也能做出 `index.html`。

---

## 講師課前檢查表

開課前一天，講師自己跑一遍：

- [ ] 自己的筆電跑過完整三步安裝，確認 `opencode -v` 有版本號
- [ ] 三條額度路線都試過一次（內建免費模型、ChatGPT 登入、GitHub Copilot 登入）
- [ ] 備援 1（Codex 桌面版）、備援 2（Claude Cowork）至少試過一次能改本機檔
- [ ] 準備好 `starter-index.html` 救援範本（備援 3 手動貼用）
- [ ] LINE 群組已發自備清單，並重申「不用先裝、不用辦 API key」
- [ ] 投影片準備好安裝指令的雙色標示（Mac / Windows）
- [ ] 紅綠便利貼備齊
- [ ] 確認現場 Wi-Fi 頻寬足夠全班同時下載安裝器

---

## 常見問題

**Q：學員問「要不要付費？」**
A：不用。opencode 有內建免費模型；登入 ChatGPT 或 GitHub Copilot 用既有帳號額度，不另外扣費、不綁信用卡。

**Q：學員沒有 ChatGPT 也沒有 GitHub 帳號？**
A：走路線 A 內建免費模型即可，完全不用帳號。備援再用網頁版（網頁版 ChatGPT 免登入也能有限度使用）。

**Q：opencode 跟 Claude Code / Codex CLI 有什麼不一樣？**
A：都是終端機裡的 AI 工具，行為類似。本課選 opencode 是因為它有內建免費模型、三條免 key 上路路線，最適合初學者體驗。工具不是重點，重點是看懂「AI 幫你改了哪個檔案」。

**Q：學員回家後還能用嗎？**
A：可以。opencode 裝在本機，帳號登入一次長期有效。回家繼續改 `index.html` 不需要重新安裝。

**Q：Mac 與 Windows 指令差異？**
A：只有開啟檔案指令不同：Mac 用 `open index.html`，Windows 用 `start index.html`。其餘 opencode 操作一致。投影片會雙色標示。