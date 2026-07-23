/* =========================================================
   Graduation Invitation — script.js
   Nguyễn Anh Huy · HUFLIT · 2026
   ========================================================= */

(function () {
  'use strict';

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
      disable: false
    });
  }

  /* ---------- Countdown ---------- */
  const CEREMONY_TARGET = new Date('2026-07-31T09:30:00+07:00');

  const cdDays  = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMins  = document.getElementById('cd-mins');
  const cdSecs  = document.getElementById('cd-secs');
  const cdMsg   = document.getElementById('cd-message');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tickCountdown() {
    if (!cdDays) return;

    const diff = CEREMONY_TARGET.getTime() - Date.now();

    if (diff <= 0) {
      cdDays.textContent  = '00';
      cdHours.textContent = '00';
      cdMins.textContent  = '00';
      cdSecs.textContent  = '00';
      if (cdMsg) cdMsg.textContent = 'Buổi lễ đã diễn ra. Trân trọng cảm ơn quý vị!';
      clearInterval(countdownTimer);
      return;
    }

    const s = Math.floor(diff / 1000);
    cdDays.textContent  = pad(Math.floor(s / 86400));
    cdHours.textContent = pad(Math.floor((s % 86400) / 3600));
    cdMins.textContent  = pad(Math.floor((s % 3600) / 60));
    cdSecs.textContent  = pad(s % 60);
  }

  let countdownTimer;
  if (cdDays) {
    tickCountdown();
    countdownTimer = setInterval(tickCountdown, 1000);
  }

  /* ---------- Confetti on load ---------- */
  function fireConfetti() {
    if (typeof confetti !== 'function') return;

    const palette = ['#C9A961', '#E5D4A1', '#FAF7F2', '#0F2A44'];
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: palette,
        shapes: ['circle', 'square'],
        scalar: 1.1
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: palette,
        shapes: ['circle', 'square'],
        scalar: 1.1
      });
      if (Math.random() > 0.7) {
        confetti({
          particleCount: 8,
          spread: 360,
          origin: { x: 0.5, y: 0.4 },
          colors: palette,
          startVelocity: 18,
          ticks: 60,
          scalar: 0.8
        });
      }
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---------- Hero parallax (subtle) ---------- */
  const hero = document.querySelector('.hero-inner');
  if (hero && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    let rafId = null;
    window.addEventListener('mousemove', (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 8;
        const y = (e.clientY / window.innerHeight - 0.5) * 8;
        hero.style.transform = `translate(${x}px, ${y}px)`;
        rafId = null;
      });
    });
  }

  /* =========================================================
     MUSIC PLAYER — Floating toggle with localStorage
     ========================================================= */
  const musicBtn = document.getElementById('music-toggle');
  const bgm      = document.getElementById('bgm');
  const LS_KEY   = 'graduation-bgm-pref';

  if (musicBtn && bgm) {
    // Restore previous preference (autoplay rules forbid silent auto-play)
    const savedPref = localStorage.getItem(LS_KEY);

    const setPlayingUI = (playing) => {
      musicBtn.classList.toggle('playing', playing);
      musicBtn.setAttribute('aria-pressed', String(playing));
      musicBtn.setAttribute('aria-label',
        playing ? 'Tắt nhạc nền' : 'Bật nhạc nền');
    };

    // Try to autoplay silently if user previously chose to play
    // Modern browsers require user gesture first — we surface the toggle and
    // let the user opt in once.
    setPlayingUI(false);

    musicBtn.addEventListener('click', () => {
      if (bgm.paused) {
        // Fade in volume
        bgm.volume = 0;
        const playPromise = bgm.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Smooth fade-in to 0.5
            let v = 0;
            const fade = setInterval(() => {
              v = Math.min(0.5, v + 0.05);
              bgm.volume = v;
              if (v >= 0.5) clearInterval(fade);
            }, 80);
            setPlayingUI(true);
            localStorage.setItem(LS_KEY, 'playing');
          }).catch(() => {
            // Autoplay blocked — show a hint via the tooltip text
            const tip = musicBtn.querySelector('.music-tooltip');
            if (tip) tip.textContent = 'Trình duyệt chặn tự động phát';
          });
        }
      } else {
        // Fade out then pause
        let v = bgm.volume;
        const fade = setInterval(() => {
          v = Math.max(0, v - 0.05);
          bgm.volume = v;
          if (v <= 0) {
            clearInterval(fade);
            bgm.pause();
            setPlayingUI(false);
            localStorage.setItem(LS_KEY, 'paused');
          }
        }, 80);
      }
    });

    // Optional: resume if user already opted in (won't actually autoplay, but visible state)
    if (savedPref === 'playing') {
      const tip = musicBtn.querySelector('.music-tooltip');
      if (tip) tip.textContent = 'Bấm để phát nhạc';
    }
  }

  /* ---------- DOMContentLoaded ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(fireConfetti, 350);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (window.AOS) AOS.refresh();
      });
    }
  });

})();
