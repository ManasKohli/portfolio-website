(async () => {
  const out = [];
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const navLinks = [...document.querySelectorAll('nav .lg\\:flex a')].filter(a => document.querySelector(a.getAttribute('href')));
  const active = () => navLinks.find(a => a.classList.contains('text-ink'))?.textContent;
  let fails = 0, n = 0;
  for (const order of [navLinks, [...navLinks].reverse(), [navLinks[4], navLinks[1], navLinks[3], navLinks[0], navLinks[2]]]) {
    for (const a of order) {
      a.click(); await sleep(1500); n++;
      if (active() !== a.textContent) { fails++; out.push(`FAIL clicked ${a.textContent} -> ${active()}`); }
    }
  }
  // manual scrolling: wheel-style scroll to each section top, then to bottom
  for (const a of navLinks) {
    const el = document.querySelector(a.getAttribute('href'));
    window.scrollTo({ top: el.offsetTop - 96, behavior: 'instant' }); await sleep(300);
    out.push(`scroll to ${a.textContent} -> ${active()}`);
  }
  window.scrollTo({ top: 0, behavior: 'instant' }); await sleep(300);
  out.push(`scroll to top -> ${active()}`);
  return `${innerWidth}x${innerHeight}: ${n - fails}/${n} clicks ok\n` + out.join('\n');
})()
