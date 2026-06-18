---
title: 投影片索引 — AI 入門：用 AI 做出本機網頁
tags: [ai-training, opencode, local-html, beginner-course]
created: 2026-06-18
updated: 2026-06-18
status: active
---

# 投影片索引 — AI 入門：用 AI 做出本機網頁

> 2026-06-18 更新：課程全面改為 AI 入門體驗版。主線是用 opencode 做出本機可開啟的 `index.html`，terminal 是操作 AI 的入口，不教 Git、不部署、不公開網址。

## 檔案對照

| 檔案 | 內容 | 投影片數 | 時段 |
|------|------|---------|------|
| `00-briefing.html` | 課程簡報（招生用） | 8 | — |
| `01-opening.html` | UNIT 1：開場 + AI 定位 + Terminal 入口 | 10 | 09:00–10:30 |
| `02-ai-terminal.html` | UNIT 2：用 opencode 做出第一個本機 HTML | 12 | 10:45–12:10 |
| `03-ai-revision.html` | UNIT 3：AI 改版練習 | 13 | 13:05–14:35 |
| `04-free-project.html` | UNIT 4：自由完成作品 + skill 概念 | 10 | 14:50–16:05 |
| `05-closing.html` | UNIT 5：作品回顧與下一步 | 9 | 16:15–16:50 |

## 模板

- `00-template.html`：共用設計系統與 slide 骨架。
- `shared.css`：舊版共用樣式（新 deck 主要使用各自內嵌樣式）。

## 設計系統

- 背景：極深黑藍 `#050508` + 橘色光暈 + 網格遮罩
- 主色：橘珊瑚 `#d4896e`（Mac / 主視覺）
- 輔色：紫色 `#a68fc9`（AI 標示）
- 字體：Noto Sans TC（中文）、Bricolage Grotesque（英文標題）、JetBrains Mono（程式碼）
- 投影片：100vh/100dvh、scroll-snap、GSAP ScrollTrigger reveal
- 終端機元件：`.terminal` + macOS 三色圓點
- 布局組件：`layout-center`、`layout-split`、`layout-full-bleed`、`card-grid`、`feature-list`、`compare-grid`、`step-list`

## 互動元件

- **GSAP reveal 動畫**：`data-gsap` 支援 fade-up / fade-right / fade-left / stagger-up / scale-in
- **微休息倒數**（`[data-countdown]`）：90 秒真倒數，橘色圓環同步收束
- **鍵盤導航**：↑ ↓ 或 Home / End
- **Nav dots**：右側導覽點

## 時間表

- 09:00 開場（01）— 課程定位 + AI 能做什麼 + terminal 入口
- 10:45 第一個本機 HTML（02）— 安裝 opencode、建立 my-page、產生 index.html
- 12:10 午餐（55min）
- 13:05 AI 改版練習（03）— 好 prompt、版面與風格改版
- 14:50 自由完成作品（04）— 三選一主題 + skill 概念
- 16:15 總結（05）— 作品展示、本機 HTML、下一步、Q&A

## 舊版歸檔

舊版 deck 已移至 `archive/`：
- `00-briefing.html` ~ `05-closing.html`（CLI + Git + Claude Code 版本）
- `instructor-guide.md`、`instructor-guide-v2.md`
- `03-git-slides-outline.md`、`04-agentic-ai-slides-outline.md`
- `existing-slides-updates.md`

## 三層能力架構

- **AI 對話**：把想法說清楚
- **Terminal 入口**：知道檔案在哪，能叫 AI 操作
- **HTML 作品**：本機瀏覽器看得到自己的頁面
