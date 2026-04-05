  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    // Stagger siblings
    const parent = el.parentElement;
    const siblings = [...parent.querySelectorAll(':scope > .reveal')];
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${idx * 55}ms`;
    io.observe(el);
  });
