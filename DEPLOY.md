# 部署到 Cloudflare Pages

這份文件說明如何把 `00-briefing.html` 的一頁式招生網站部署到 Cloudflare Pages。

## 檔案結構

```
cli-course/
├── dist/                          # 靜態網站輸出
│   ├── index.html                 # 一頁式 landing page
│   └── cafe-intro-demo.html       # 作品展示用的範例頁
├── slides/                        # 原始投影片與 source
│   ├── 00-briefing.html           # 主要編輯檔案
│   └── cafe-intro-demo.html
├── .github/workflows/deploy.yml   # GitHub Actions 自動部署
└── wrangler.toml                  # Wrangler 設定
```

## 方式一：GitHub + Cloudflare Pages 自動部署（推薦）

### 1. 建立 GitHub repo

在 GitHub 建立一個新 repository，例如 `ai-web-landing`，不要初始化 README。

### 2. 本地推上去

```bash
cd /Users/te-shuwang/Desktop/Projects/personal/cli-course
git remote add origin https://github.com/YOUR_USERNAME/ai-web-landing.git
git add slides/00-briefing.html slides/cafe-intro-demo.html slides/06-recap.html dist/ .github/workflows/deploy.yml wrangler.toml .gitignore
git commit -m "feat: landing page for Terminal + AI web course"
git push -u origin main
```

### 3. 在 Cloudflare Pages 綁定專案

1. 登入 https://dash.cloudflare.com/pages
2. 點 **Create a project** → **Connect to Git**
3. 選剛剛推上去的 GitHub repo
4. 設定：
   - **Project name**: `ai-web-landing`
   - **Production branch**: `main`
   - **Build output directory**: `dist`
5. 儲存並部署

### 4. 設定 GitHub Secrets（給 GitHub Actions 用）

在 GitHub repo 頁面進入：

**Settings → Secrets and variables → Actions → New repository secret**

新增兩個 secret：

| Name | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | 你的 Cloudflare API Token |
| `CLOUDFLARE_ACCOUNT_ID` | `f247b3027e4f2171491a0ce65f4547a6` |

API Token 需要權限：
- Account:Read
- Cloudflare Pages:Edit
- Zone:Read（綁定自訂網域時需要）

### 5. 綁定自訂網域 `ai.shiheintelligent.com`

1. 在 Cloudflare Pages 專案頁面進入 **Custom domains**
2. 點 **Set up a custom domain**
3. 輸入 `ai.shiheintelligent.com`
4. 依照指示加一筆 CNAME 或等待 Cloudflare 自動驗證

## 方式二：手動上傳（不用 GitHub）

1. 壓縮 `dist/` 資料夾成 zip
2. 到 https://dash.cloudflare.com/pages
3. 點 **Create a project** → **Upload assets**
4. 上傳 zip
5. 專案名稱設為 `ai-web-landing`
6. 在 **Custom domains** 加上 `ai.shiheintelligent.com`

## 修改內容後更新

landing page 的主要編輯檔案是 `slides/00-briefing.html`。改完後記得同步複製到 `dist/index.html`：

```bash
cp slides/00-briefing.html dist/index.html
```

如果用 GitHub Actions，把修改 commit + push 就會自動部署。

## 注意事項

- `.google_form_token.pickle` 與 `client_secret_*.json` 已加入 `.gitignore`，不會被推上 repo。
- Google 表單連結目前放在 `index.html` 的彈出視窗中。未來要換表單或換價格/日期/地點，直接改 `slides/00-briefing.html` 即可。
