# 03-git.html — 投影片內容大綱

> Unit 3（13:15-14:45，90 min）｜講解:實作 = 70:30
> Git 定位：橋樑——重「為什麼需要版控」，輕操作深度

---

### Slide 1: section-title
**標題**：Git — 你的程式碼時間機器
**時間**：1 min
**內容**：
- 大標題「Git」居中，副標「版控 = 保命符」
- 背景動畫：檔案名稱 v1 → v2 → final → final_REAL 快速閃過
- 底部標註時段「13:15 – 14:45」

---

### Slide 2: why-version-control
**標題**：誰沒改過檔名改到瘋掉？
**時間**：7 min
**內容**：
- 經典慘案：report_v2_final_REAL_最終版.docx — 檔名地獄示意圖
- 「改錯了想回到昨天？找不到昨天那版？」— 版控解決的兩個核心問題
- 版控 = 自動幫你記住每一次改動，隨時能回到任何時間點
**互動**：舉手 —「誰改過檔名改到超過 5 個版本的？」

---

### Slide 3: time-machine
**標題**：Git 是你的時間機器
**時間**：8 min
**內容**：
- 每一次 commit = 一個存檔點（像遊戲 save point）
- 可以回到任何存檔點、比較兩個存檔點的差異、查看誰改了什麼
- 不只備份 — 備份只記得「現在」，Git 記得「每一次改動的歷程」
- 現實類比：Google Docs 版本記錄，但更強 — 完整掌控、離線可用
**互動**：問「Google Docs 版本記錄用過嗎？Git 就是那個的完全體」

---

### Slide 4: three-areas
**標題**：三區概念：工作區 → 暫存區 → 儲存庫
**時間**：5 min
**內容**：
- 工作區（Working Directory）：你正在編輯的檔案，還沒跟 Git 說
- 暫存區（Staging Area）：跟 Git 說「這些改動我準備好了」— git add
- 儲存庫（Repository）：正式存入歷史 — git commit
- 類比：寫報告 → 放進信封 → 寄出去
- 圖示：三區箭頭流動圖（橘色箭頭串聯三個方塊）
**互動**：跟讀一次「工作區、暫存區、儲存庫」，加深印象

---

### Slide 5: init-add-commit
**標題**：動手做：git init → add → commit
**時間**：20 min
**內容**：
- Step 1：`git init` — 在資料夾啟用版控（生 .git 隱藏資料夾）
- Step 2：`git add 檔名` — 把檔案放進暫存區
- Step 3：`git commit -m "訊息"` — 存入歷史，附上說明
- 全場跟做：建立 hello.txt → 寫一行 → add → commit → 改第二行 → add → commit
- `git log` 看到兩筆記錄 = 成功
**終端機**：
Mac: `$ git init` / `$ git add hello.txt` / `$ git commit -m "第一版"`
Win: `PS> git init` / `PS> git add hello.txt` / `PS> git commit -m "第一版"`
**互動**：全場跟做，完成 `git log` 後舉手確認

---

### Slide 6: micro-break-1
**標題**：⚡ 微休息 90 秒
**時間**：1.5 min
**內容**：
- 計時器動畫（橘色圓環倒數）
- 提示文字：「站起來、喝水、甩手」
- 底部小字：「接下來要把程式碼送上雲端」

---

### Slide 7: push-and-github
**標題**：把程式碼送上雲端：git push + GitHub
**時間**：15 min
**內容**：
- GitHub = 程式碼的雲端備份 + 協作平台（全世界最大）
- 本地 Repository → 推上遠端 = `git push`
- 為什麼要推上去？備份、跨裝置、分享、協作
- 講師 demo：在 GitHub 建 repo → 推上去 → 重新整理看到檔案
- 全場跟做：fork 或 clone 講師的範例 repo，推一筆 commit 上去
**終端機**：
Mac: `$ git remote add origin https://github.com/...` / `$ git push -u origin main`
Win: `PS> git remote add origin https://github.com/...` / `PS> git push -u origin main`
**互動**：全場跟做 push，在 GitHub 頁面看到自己的 commit 舉手

---

### Slide 8: branch-concept  ⚡可跳
**標題**：Branch：平行宇宙
**時間**：15 min
**內容**：
- 主線（main）= 正式版；分支（branch）= 實驗室
- 開 branch = 開一條平行時間線，改壞了不影響主線
- 現實類比：同一份報告，一人改結論、一人改附錄，最後合併
- 講師 demo：`git branch feature` → `git checkout feature` → 改檔 → commit → `git checkout main` → 看到主線沒被動到
- 不要求學員獨立操作，跟著看就好
**終端機**：
Mac: `$ git branch feature` / `$ git checkout feature` / `$ git merge feature`
Win: `PS> git branch feature` / `PS> git checkout feature` / `PS> git merge feature`
**互動**：問「什麼情境你會想開 branch？」引導幾個回答

---

### Slide 9: conflict-demo  ⚡可跳
**標題**：衝突是什麼？Git 說「你來決定」
**時間**：10 min
**內容**：
- 兩人改同一行 → Git 不知道聽誰的 → 衝突（conflict）
- 衝突不是壞事 = Git 把決定權交給你
- 衝突長什麼樣：`<<<<<<< HEAD` / `=======` / `>>>>>>> feature` 標記圖
- 講師 demo：故意製造衝突 → 打開檔案看到標記 → 手動選一邊 → add → commit → 解決
- 重點：不要怕衝突，手動解就是了
**終端機**：
Mac: `$ git merge feature` → 衝突訊息 → 手動編輯 → `$ git add .` → `$ git commit`
Win: `PS> git merge feature` → 衝突訊息 → 手動編輯 → `PS> git add .` → `PS> git commit`
**互動**：問「看到那些 <<<<<<< 會不會緊張？」安撫 — 就是選 A 或選 B

---

### Slide 10: git-cheatsheet
**標題**：Git 小抄：六條指令走天下
**時間**：7 min
**內容**：
- `git init` — 開始版控
- `git add <檔名>` — 放進暫存區
- `git commit -m "訊息"` — 存入歷史
- `git push` — 推上雲端
- `git pull` — 拉下最新（別人改的）
- `git log` — 查看歷史
- 加碼：`git status`（隨時看目前狀態）— 這條最常用，忘記狀態就打它
**互動**：一起唸一次六條指令，像背口訣

---

### Slide 11: five-lives
**標題**：Git 給你的五條命
**時間**：3 min
**內容**：
- 命 1：改壞了 → `git checkout -- <檔名>` 還原
- 命 2：commit 錯了 → `git reset HEAD~1` 回前一版
- 命 3：整個資料夾炸了 → `git clone` 重新拉回來
- 命 4：不知道現在什麼狀態 → `git status`
- 命 5：推上去發現有錯 → 改完再 push 一次就好，歷史都在
- 結論：有 Git，你永遠不會真的搞丟程式碼
**互動**：問「覺得哪一條命最救命？」

---

### Slide 12: unit-3-summary
**標題**：Unit 3 回顧
**時間**：1 min
**內容**：
- 版控 = 時間機器，記住每一次改動
- 三區：工作區 → 暫存區 → 儲存庫
- 六條指令：init / add / commit / push / pull / log
- Branch = 平行宇宙，衝突 = Git 請你決定
- GitHub = 程式碼的雲端家

---

**總計**：12 張投影片，90 min（含微休息 1.5 min + 緩衝 6.5 min）