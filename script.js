'use strict';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (menu && nav) {
  menu.hidden = false;
  function closeMenu(returnFocus = false) {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    if (returnFocus) menu.focus();
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true); });
  window.matchMedia('(min-width:768px)').addEventListener('change', () => closeMenu());
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const servicesToggle = document.querySelector('.services-toggle');
const servicesList = document.querySelector('#services-list');
if (servicesToggle && servicesList) {
  servicesToggle.hidden = false;
  servicesToggle.addEventListener('click', () => {
    const expanded = servicesToggle.getAttribute('aria-expanded') !== 'true';
    servicesToggle.setAttribute('aria-expanded', String(expanded));
    servicesList.classList.toggle('show-all', expanded);
    servicesToggle.firstChild.textContent = expanded ? 'Show fewer services ' : 'View all services ';
  });
}

const leadForm = document.querySelector('#lead-form');
const formStatus = document.querySelector('#form-status');
if (leadForm && formStatus) {
  const submitButton = leadForm.querySelector('.form-submit');
  const defaultButtonLabel = submitButton.innerHTML;
  const search = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(key => {
    const value = search.get(key);
    if (!value) return;
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    leadForm.append(input);
  });

  leadForm.addEventListener('submit', async event => {
    if (!leadForm.checkValidity()) return;
    event.preventDefault();
    formStatus.className = 'form-status';
    formStatus.textContent = '';
    leadForm.setAttribute('aria-busy', 'true');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';

    const payload = Object.fromEntries(new FormData(leadForm).entries());
    payload.page_url = window.location.href;
    payload.submitted_at = new Date().toISOString();

    try {
      const response = await fetch(leadForm.dataset.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === 'false' || result.success === false) throw new Error('Submission failed');
      leadForm.reset();
      formStatus.classList.add('is-success');
      formStatus.textContent = 'Thank you — your project brief is in. Creative Collective will review it and reply by email.';
    } catch {
      formStatus.classList.add('is-error');
      formStatus.textContent = 'We couldn’t send your brief right now. Please check your connection and try again.';
    } finally {
      leadForm.removeAttribute('aria-busy');
      submitButton.disabled = false;
      submitButton.innerHTML = defaultButtonLabel;
    }
  });
}

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionQuery.matches) {
  document.documentElement.classList.add('motion-ready');
  const revealTargets = [
    ...document.querySelectorAll('.intro > *, .section-heading > *, .service, .project, .process-intro > *, .process-steps details, .testimonials > *, .contact-card > *'),
  ];
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealTargets.forEach(element => revealObserver.observe(element));
  } else {
    revealTargets.forEach(element => element.classList.add('in-view'));
  }

  const heroArt = document.querySelector('.hero-art');
  const heroImage = heroArt?.querySelector(':scope > img');
  if (heroArt && heroImage && window.matchMedia('(pointer:fine)').matches) {
    heroArt.addEventListener('pointermove', event => {
      const bounds = heroArt.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - .5) * 10;
      const y = ((event.clientY - bounds.top) / bounds.height - .5) * 10;
      heroImage.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.02)`;
    });
    heroArt.addEventListener('pointerleave', () => { heroImage.style.transform = ''; });
  }
}
