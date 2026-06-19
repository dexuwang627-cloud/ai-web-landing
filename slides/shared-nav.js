// shared-nav.js — 自动为每个投影片页加上上一页/下一页/回目录导航条
// 方向键保留给页内 slide 使用；切换单元改用 Alt + 方向键或点击底部导航条。
(function () {
  'use strict';

  // 投影片播放顺序（与 index.html 一致）
  const order = [
    'intro.html',
    '01-opening.html',
    '02-ai-terminal.html',
    '03-ai-revision.html',
    '04-free-project.html',
    '05-closing.html'
  ];

  const current = location.pathname.split('/').pop() || order[0];
  const idx = order.indexOf(current);
  if (idx === -1) return;

  const prevFile = order[idx - 1] || null;
  const nextFile = order[idx + 1] || null;
  const total = order.length;

  const nav = document.createElement('nav');
  nav.className = 'slide-site-nav';
  nav.setAttribute('aria-label', '投影片导览');
  nav.innerHTML = `
    <a class="site-nav-link${prevFile ? '' : ' disabled'}" href="${prevFile || '#'}" aria-label="上一单元">← Prev</a>
    <a class="site-nav-link site-nav-index" href="index.html" aria-label="回目录">Index · ${idx + 1} / ${total}</a>
    <a class="site-nav-link${nextFile ? '' : ' disabled'}" href="${nextFile || '#'}" aria-label="下一单元">Next →</a>
  `;
  document.body.appendChild(nav);

  // 键盘：Alt + 方向键切换单元；Esc 回目录。
  // ↑ ↓ ← → 与空白键保留给页内 slide 的 GSAP 导航，不拦截。
  document.addEventListener('keydown', function (e) {
    if (!e.altKey) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (nextFile) {
        e.preventDefault();
        location.href = nextFile;
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (prevFile) {
        e.preventDefault();
        location.href = prevFile;
      }
    }
  });

  // Esc 回目录（不与页内导航冲突）
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      location.href = 'index.html';
    }
  });
})();
