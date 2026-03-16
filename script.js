/* ==========================================
   LUMPKIN'S INSURANCE AGENCY
   script.js — Animations & Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll state ── */
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  /* ── Scroll reveal (IntersectionObserver) ── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
    .forEach(el => revealObserver.observe(el));


  /* ── Stats counter ── */
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-n').forEach(el => counterObserver.observe(el));

  function runCounter(el) {
    const target   = +el.dataset.target;
    const duration = 1800;
    const start    = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);   // ease-out cubic
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }


  /* ── About card 3-D tilt on mouse ── */
  const aboutVisual = document.getElementById('aboutVisual');
  const aboutCard   = document.getElementById('aboutCard');

  if (aboutVisual && aboutCard) {
    aboutVisual.addEventListener('mousemove', e => {
      const r = aboutVisual.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5);
      const y = ((e.clientY - r.top)  / r.height - 0.5);
      aboutCard.style.transform =
        `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 9}deg) translateZ(12px)`;
    });

    aboutVisual.addEventListener('mouseleave', () => {
      aboutCard.style.transform =
        'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    });
  }


  /* ── Service cards: subtle parallax depth on hover ── */
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      // Only apply when NOT flipped (desktop)
      if (window.innerWidth <= 500) return;
      const r  = card.getBoundingClientRect();
      const x  = (e.clientX - r.left) / r.width  - 0.5;
      const y  = (e.clientY - r.top)  / r.height - 0.5;
      // Keep the flip transform intact; add slight skew to perspective
      card.querySelector('.flip-inner').style.setProperty(
        '--tilt',
        `rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`
      );
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.flip-inner').style.removeProperty('--tilt');
    });
  });


  /* ── Hero parallax on scroll ── */
  const heroBg      = document.querySelector('.hero-bg');
  const heroContent = document.querySelector('.hero-content');
  const heroHeight  = () => document.querySelector('.hero').offsetHeight;

  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    const h = heroHeight();
    if (s > h) return;

    if (heroBg)      heroBg.style.transform      = `translateY(${s * 0.38}px)`;
    if (heroContent) {
      heroContent.style.transform = `translateY(${s * 0.18}px)`;
      heroContent.style.opacity   = String(Math.max(0, 1 - s / (h * 0.65)));
    }
  }, { passive: true });


  /* ── Active nav link tracking ── */
  const sections    = document.querySelectorAll('section[id]');
  const navAnchors  = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => sectionObserver.observe(s));


  /* ── Contact form ── */
  const form       = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const name = form.querySelector('#name').value.trim();
      if (!name) {
        showStatus('Please enter your name.', 'error');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled    = true;

      // Simulate submission (replace with real endpoint / Formspree / etc.)
      setTimeout(() => {
        showStatus("Message sent! We'll be in touch soon.", 'success');
        form.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled    = false;
      }, 1400);
    });
  }

  function showStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className   = `form-status ${type}`;
    setTimeout(() => { formStatus.className = 'form-status'; }, 5500);
  }


  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
