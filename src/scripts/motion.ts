// Shared motion: reveal-on-enter, one-shot count-ups, header border.
export const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Calls `cb` once when `el` enters the viewport.
export function onEnter(el: Element, cb: () => void, threshold = 0.25) {
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        cb();
      }
    },
    { threshold }
  );
  io.observe(el);
}

// Calls `cb(visible)` whenever visibility changes (for pausing loops off-screen).
export function onVisibility(el: Element, cb: (visible: boolean) => void) {
  new IntersectionObserver((entries) => cb(entries[0].isIntersecting)).observe(el);
}

document.querySelectorAll("[data-reveal]").forEach((el) => onEnter(el, () => el.classList.add("is-in"), 0.15));

document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix ?? "";
  const format = (n: number) => Math.round(n).toLocaleString("en-US") + suffix;
  if (reducedMotion) {
    el.textContent = format(target);
    return;
  }
  el.textContent = format(0);
  onEnter(el, () => {
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = format(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
});

const header = document.getElementById("site-header");
const setScrolled = () => header?.setAttribute("data-scrolled", String(window.scrollY > 4));
window.addEventListener("scroll", setScrolled, { passive: true });
setScrolled();
