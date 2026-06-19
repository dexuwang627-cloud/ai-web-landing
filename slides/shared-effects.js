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

  /* ---------- 初始化 ---------- */
  initGlow();
  initMagnetic();
  initSpotlight();
  initTilt();
  initScramble();
  initParticles();
  initScrollProgress();
  initTypewriter();
})();
