/* === CLI Course 共用視覺效果（vanilla JS） === */
/* 所有效果皆為 opt-in：透過 class 或 data-effect 屬性啟用。 */

(function () {
  'use strict';

  const html = document.documentElement;
  if (html.classList.contains('no-js')) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    document.querySelectorAll('.fx-scramble, [data-effect="scramble"]').forEach(el => {
      if (el.dataset.scrambleFinal) el.textContent = el.dataset.scrambleFinal;
    });
    document.querySelectorAll('.terminal .typewriter-line').forEach(line => {
      line.style.opacity = '1';
    });
    document.querySelectorAll('.terminal .typewriter-cursor').forEach(c => {
      c.style.display = 'none';
    });
    return;
  }

  /* ---------- Hover Glow：跟隨游標的光暈 ---------- */
  function initGlow() {
    document.querySelectorAll('.fx-glow, [data-effect="glow"]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
      }, { passive: true });
    });
  }

  /* ---------- Magnetic Button：磁吸偏移 ---------- */
  function initMagnetic() {
    document.querySelectorAll('.fx-magnetic, [data-effect="magnetic"]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const max = Math.max(rect.width, rect.height) * 0.4;
        const dist = Math.hypot(dx, dy);
        const factor = Math.max(0, 1 - dist / max);
        el.style.transform = `translate(${dx * 0.25 * factor}px, ${dy * 0.25 * factor}px)`;
      }, { passive: true });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Cursor Spotlight：游標聚光燈 ---------- */
  function initSpotlight() {
    const targets = document.querySelectorAll('.fx-spotlight, [data-effect="spotlight"]');
    if (!targets.length) return;

    targets.forEach(container => {
      if (getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
      }
      const layer = document.createElement('div');
      layer.className = 'spotlight-layer';
      layer.setAttribute('aria-hidden', 'true');
      container.appendChild(layer);

      container.addEventListener('mousemove', e => {
        const rect = container.getBoundingClientRect();
        layer.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
        layer.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
        layer.style.opacity = '1';
      }, { passive: true });

      container.addEventListener('mouseleave', () => { layer.style.opacity = '0'; });
    });
  }

  /* ---------- 3D Tilt Card：3D 傾斜 ---------- */
  function initTilt() {
    document.querySelectorAll('.fx-tilt, [data-effect="tilt"]').forEach(el => {
      const parent = el.parentElement;
      if (parent && !parent.style.perspective) parent.style.perspective = '1000px';

      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02, 1.02, 1.02)`;
      }, { passive: true });

      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Text Scramble Reveal：文字解碼 ---------- */
  function initScramble() {
    const targets = document.querySelectorAll('.fx-scramble, [data-effect="scramble"]');
    if (!targets.length) return;

    const chars = '!<>-_\\/[]{}—=+*^?#________';

    targets.forEach(el => {
      if (!el.dataset.scrambleFinal) el.dataset.scrambleFinal = el.textContent;
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scramble(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    targets.forEach(el => observer.observe(el));

    function scramble(el) {
      const final = el.dataset.scrambleFinal;
      const length = final.length;
      let step = 0;
      const total = length * 6;
      const interval = setInterval(() => {
        el.textContent = final.split('').map((c, i) => {
          if (c === ' ' || c === '\n') return c;
          if (step / 6 > i) return c;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        step++;
        if (step > total) {
          clearInterval(interval);
          el.textContent = final;
        }
      }, 28);
    }
  }

  /* ---------- Hero Particle Trail：首屏粒子 ---------- */
  function initParticles() {
    document.querySelectorAll('.fx-hero-particles, [data-effect="hero-particles"]').forEach(container => {
      const canvas = document.createElement('canvas');
      canvas.className = 'hero-particles-canvas';
      canvas.setAttribute('aria-hidden', 'true');
      container.appendChild(canvas);
      const ctx = canvas.getContext('2d');

      let width, height;
      const particles = [];
      const count = 36;
      let active = true;
      let frameId = null;

      function resize() {
        width = canvas.width = container.clientWidth;
        height = canvas.height = container.clientHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 1.8 + 0.4,
          alpha: Math.random() * 0.25 + 0.08
        });
      }

      function draw() {
        if (!active) return;
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 137, 110, ${p.alpha})`;
          ctx.fill();
        });
        frameId = requestAnimationFrame(draw);
      }

      draw();

      const visObserver = new IntersectionObserver(entries => {
        active = entries[0].isIntersecting;
        if (active && !frameId) draw();
        if (!active && frameId) {
          cancelAnimationFrame(frameId);
          frameId = null;
        }
      });
      visObserver.observe(container);
    });
  }

  /* ---------- Scroll Progress Indicator：捲動進度 ---------- */
  function initScrollProgress() {
    const bars = document.querySelectorAll('.fx-scroll-progress, [data-effect="scroll-progress"]');
    if (!bars.length) return;

    function update() {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollable = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      const progress = scrollable > 0 ? scrollTop / scrollable : 0;
      bars.forEach(bar => bar.style.setProperty('--progress', Math.min(1, Math.max(0, progress)).toFixed(4)));
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ---------- Typewriter Effect：終端機打字機 ---------- */
  function initTypewriter() {
    const terminals = document.querySelectorAll('.terminal[data-typewriter]');
    if (!terminals.length) return;

    const defaultSpeed = 36;
    const defaultDelay = 120;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          run(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    terminals.forEach(t => io.observe(t));

    function run(terminal) {
      const lines = [...terminal.querySelectorAll('.typewriter-line')];
      let lineIndex = 0;

      function nextLine() {
        if (lineIndex >= lines.length) {
          terminal.classList.add('typewriter-done');
          return;
        }
        const line = lines[lineIndex];
        lineIndex++;
        const text = line.dataset.text || line.textContent;
        const speed = parseInt(line.dataset.speed, 10) || defaultSpeed;
        const pause = parseInt(line.dataset.pause, 10) || defaultDelay;
        const variant = line.dataset.variant || 'type';

        line.textContent = '';
        line.style.opacity = '1';
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        cursor.setAttribute('aria-hidden', 'true');
        line.appendChild(cursor);

        let charIndex = 0;

        if (variant === 'reveal') {
          line.textContent = text;
          cursor.remove();
          setTimeout(nextLine, pause);
          return;
        }

        const timer = setInterval(() => {
          charIndex++;
          line.textContent = text.slice(0, charIndex);
          line.appendChild(cursor);
          if (charIndex >= text.length) {
            clearInterval(timer);
            if (variant === 'command') {
              cursor.classList.add('blink');
              setTimeout(() => {
                cursor.remove();
                nextLine();
              }, pause);
            } else if (variant === 'result') {
              cursor.remove();
              setTimeout(nextLine, pause);
            } else {
              cursor.classList.add('blink');
              setTimeout(() => {
                cursor.remove();
                nextLine();
              }, pause * 2);
            }
          }
        }, speed);
      }

      nextLine();
    }
  }

  /* ---------- Prompt Copy：一鍵複製 ---------- */
  function initPromptCopy() {
    document.querySelectorAll('[data-prompt]').forEach(el => {
      const text = el.dataset.prompt;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'prompt-copy-btn';
      btn.setAttribute('aria-label', '複製這段 prompt');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span>複製</span>';
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(text).then(() => {
          btn.classList.add('copied');
          const old = btn.innerHTML;
          btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>已複製</span>';
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = old;
          }, 1800);
        }).catch(() => {
          // Fallback
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (e) {}
          document.body.removeChild(ta);
        });
      });
      el.appendChild(btn);
    });
  }

  /* ---------- Before / After Toggle：手貼 vs AI 改檔 ---------- */
  function initBeforeAfter() {
    document.querySelectorAll('[data-toggle]').forEach(group => {
      const btns = group.querySelectorAll('[data-toggle-for]');
      const panels = group.parentElement.querySelectorAll('.toggle-panel');
      if (!btns.length) return;
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.toggleFor;
          btns.forEach(b => b.classList.toggle('active', b === btn));
          panels.forEach(p => {
            const active = p.dataset.togglePanel === target;
            p.classList.toggle('active', active);
            p.style.opacity = active ? '1' : '0';
            p.style.transform = active ? 'translateX(0)' : 'translateX(12px)';
          });
        });
      });
      // activate first
      const first = btns[0];
      if (first) first.click();
    });
  }

  /* ---------- Prompt Madlibs：填空產生 prompt ---------- */
  function initPromptMadlibs() {
    document.querySelectorAll('[data-madlib]').forEach(form => {
      const output = form.querySelector('.madlib-output');
      if (!output) return;
      const template = output.dataset.template || output.textContent;
      output.dataset.template = template;
      const promptHost = form.querySelector('[data-prompt]') || output;
      const promptTemplate = promptHost.dataset.promptTemplate || promptHost.dataset.prompt || '';
      if (promptTemplate) promptHost.dataset.promptTemplate = promptTemplate;

      function update() {
        let text = template;
        form.querySelectorAll('[data-key]').forEach(input => {
          const val = input.value.trim() || input.placeholder || `[${input.dataset.key}]`;
          text = text.replace(new RegExp(`\\[${input.dataset.key}\\]`, 'g'), val);
        });
        output.textContent = text;
        if (form.dataset.prompt) form.dataset.prompt = text;
        if (promptTemplate) {
          let filled = promptTemplate;
          form.querySelectorAll('[data-key]').forEach(input => {
            const val = input.value.trim() || input.placeholder || `[${input.dataset.key}]`;
            filled = filled.replace(new RegExp(`\\[${input.dataset.key}\\]`, 'g'), val);
          });
          promptHost.dataset.prompt = filled;
        }
      }

      form.querySelectorAll('[data-key]').forEach(input => {
        input.addEventListener('input', update);
      });
      update();
    });
  }

  /* ---------- Topic Expander：點主題卡展開 prompt ---------- */
  function initTopicExpander() {
    document.querySelectorAll('[data-expander-group]').forEach(group => {
      const cards = group.querySelectorAll('[data-expander]');
      cards.forEach(card => {
        card.addEventListener('click', e => {
          // 如果點的是複製按鈕，不要折疊卡片
          if (e.target.closest('.prompt-copy-btn')) return;
          const isOpen = card.classList.contains('open');
          cards.forEach(c => c.classList.remove('open'));
          if (!isOpen) card.classList.add('open');
        });
      });
    });
  }

  /* ---------- Progress Tracker：自我驗收進度 ---------- */
  function initProgressTracker() {
    document.querySelectorAll('[data-progress]').forEach(group => {
      const items = group.querySelectorAll('[data-progress-item]');
      const bar = group.querySelector('.progress-bar-fill');
      const label = group.querySelector('.progress-label');

      function update() {
        const done = [...items].filter(i => i.classList.contains('done')).length;
        const total = items.length;
        const pct = total ? done / total : 0;
        if (bar) bar.style.width = `${pct * 100}%`;
        if (label) label.textContent = `${done}/${total}`;
      }

      items.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('done');
          update();
        });
      });
      update();
    });
  }

  /* ---------- Block Sorter：點擊排序區塊 ---------- */
  function initBlockSorter() {
    document.querySelectorAll('[data-sorter]').forEach(sorter => {
      const output = sorter.querySelector('.sorter-output');
      const items = [...sorter.querySelectorAll('[data-sort]')];
      if (!items.length) return;
      const promptTemplate = sorter.dataset.prompt || '';

      function update() {
        const order = items.map(i => i.dataset.sort);
        const text = order.join(' → ');
        if (output) output.textContent = text;
        if (promptTemplate) {
          sorter.dataset.prompt = promptTemplate.replace(/\[順序\]/g, text);
        }
      }

      items.forEach(item => {
        item.addEventListener('click', () => {
          const current = parseInt(item.style.order || '0', 10);
          const max = Math.max(...items.map(i => parseInt(i.style.order || '0', 10)));
          if (current === max) {
            item.style.order = '0';
          } else {
            item.style.order = (current + 1).toString();
          }
          update();
        });
      });
      update();
    });
  }

  /* ---------- Style Wand：點選風格 preset ---------- */
  function initStyleWand() {
    document.querySelectorAll('[data-wand]').forEach(wand => {
      const output = wand.querySelector('.wand-output');
      const preview = wand.querySelector('.wand-preview');
      const opts = wand.querySelectorAll('[data-wand-opt]');
      const state = {};
      const promptTemplate = wand.dataset.prompt || '';
      const keys = [...new Set([...opts].map(b => b.dataset.wandKey || 'style'))];

      function setActive(btn) {
        const key = btn.dataset.wandKey || 'style';
        const val = btn.dataset.wandOpt;
        state[key] = val;
        opts.forEach(o => {
          if ((o.dataset.wandKey || 'style') === key) o.classList.remove('active');
        });
        btn.classList.add('active');
      }

      // 初始化：每組優先採用 HTML 裡已有 active 的按鈕，否則第一個
      keys.forEach(key => {
        const group = [...opts].filter(o => (o.dataset.wandKey || 'style') === key);
        const active = group.find(o => o.classList.contains('active')) || group[0];
        if (active) setActive(active);
      });
      update();

      opts.forEach(btn => {
        btn.addEventListener('click', () => {
          setActive(btn);
          update();
        });
      });

      function update() {
        const parts = Object.entries(state).map(([k, v]) => `${k}：${v}`).join('，');
        if (output) output.textContent = parts;
        if (preview) {
          preview.style.background = state.color || '';
          preview.style.fontFamily = state.font || '';
        }
        if (promptTemplate) {
          let text = promptTemplate;
          Object.entries(state).forEach(([k, v]) => {
            text = text.replace(new RegExp(`\\[${k}\\]`, 'g'), v);
          });
          wand.dataset.prompt = text;
        }
      }
    });
  }

  /* ---------- 初始化 ---------- */
  initGlow();
  initMagnetic();
  initSpotlight();
  initTilt();
  initScramble();
  initParticles();
  initScrollProgress();
  initTypewriter();
  initBeforeAfter();
  initPromptMadlibs();
  initTopicExpander();
  initPromptCopy();
  initProgressTracker();
  initBlockSorter();
  initStyleWand();
})();
