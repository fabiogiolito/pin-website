import type { Alpine } from "alpinejs"
import collapse from "@alpinejs/collapse"
import intersect from "@alpinejs/intersect"

const PRIVACY_PREFERENCE_STORAGE_KEY = "privacy_preference"
const CF_VISITOR_REGION_COOKIE = "cf-visitor-region"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __geoReady?: Promise<void>
  }
}

function updateConsentGranted(): void {
  if ((window as any).__consent_granted) return
  ;(window as any).__consent_granted = true
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  })
  window.dataLayer?.push({ event: "consent_granted" })
}

function updateConsentDenied(): void {
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  })
}

const EU_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
])

function getVisitorRegion(): string {
  const debugRegion = new URLSearchParams(window.location.search).get("debug-region")
  if (debugRegion) {
    return debugRegion
  }

  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CF_VISITOR_REGION_COOKIE}=`))
    ?.split("=")[1] ?? ""
}

function requiresConsentBeforeTracking(): boolean {
  const visitorRegion = getVisitorRegion()
  const countryCode = visitorRegion.split("-")[0]

  if (visitorRegion === "US-CA") return true
  if (EU_COUNTRIES.has(countryCode)) return true

  return false
}

export default (Alpine: Alpine) => {
  Alpine.plugin(collapse);
  Alpine.plugin(intersect);

  Alpine.data("cookieBanner", () => ({
    isVisible: false as boolean,

    async initialize(): Promise<void> {
      const storedPreference = localStorage.getItem(PRIVACY_PREFERENCE_STORAGE_KEY)
      if (storedPreference !== null) {
        if (storedPreference === "accepted") {
          updateConsentGranted()
        } else {
          updateConsentDenied()
        }
        return
      }

      // Wait for the inline GTM bootstrap (Layout.astro head) to finish setting
      // gtag's default consent state — which on first visit involves an async
      // fetch to /__geo. Without this, we'd race and could grant consent for an
      // EU/CA visitor before the inline script flips the default to "denied".
      // Bound the wait at 3s so a stalled fetch (no rejection, just hangs)
      // can't keep the consent banner hidden forever — at worst we fall back
      // to whatever consent default the inline script already set.
      await Promise.race([
        window.__geoReady ?? Promise.resolve(),
        new Promise<void>((resolve) => setTimeout(resolve, 3000)),
      ])

      if (!requiresConsentBeforeTracking()) {
        updateConsentGranted()
      }

      this.isVisible = true
    },

    accept(): void {
      localStorage.setItem(PRIVACY_PREFERENCE_STORAGE_KEY, "accepted")
      this.isVisible = false
      updateConsentGranted()
      window.dataLayer?.push({ event: "privacy_consent_accepted" })
    },

    optOut(): void {
      localStorage.setItem(PRIVACY_PREFERENCE_STORAGE_KEY, "opted_out")
      this.isVisible = false
      updateConsentDenied()
      window.dataLayer?.push({ event: "privacy_consent_opted_out" })
    },
  }))

  Alpine.store("search", {
    jobDescription: "",
    placeholder: "",
    showPlaceholder: true,
    animationStopped: false,
    cursorBlinking: false,
    submit() {
      const val = (this as any).jobDescription.trim();
      if (!val) return;
      window.dataLayer?.push({ event: "job_description_submitted", job_description_length: val.length })
      const bodyData = (Alpine as any).$data(document.body)
      if (!bodyData) return
      bodyData.pendingJobDescription = val
      bodyData.pendingJobDescriptionSource = "www"
      bodyData.isLoginModalOpen = true
    },
  });

  // Placeholder typing animation — homepage decoration only. Gated behind:
  //   1. The search bar actually being on the page (other pages don't have it)
  //   2. prefers-reduced-motion: skip entirely
  //   3. The bar entering the viewport — defers ~50ms of timer work until
  //      it's actually visible, off the LCP critical path
  const searchBar = document.getElementById("unified-search-bar");
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (searchBar && !reducedMotion) {
    const scrollThreshold = window.innerHeight * 1.5;
    window.addEventListener("scroll", () => {
      const store = Alpine.store("search") as any;
      if (!store.animationStopped && window.scrollY >= scrollThreshold) {
        store.animationStopped = true;
      }
    }, { passive: true });

    const examples = [
      "Software Engineer with 5+ years of experience. Worked in SaaS. With CS degree. Focus on Next.js.",
      "Senior Product Designer in New York, experienced in design systems and Figma",
      "Marketing Manager with B2B SaaS background, strong in demand generation",
      "Data Scientist with ML expertise, Python, and experience in healthcare",
      "VP of Sales, enterprise SaaS, 10+ years leadership experience",
      "DevOps Engineer, AWS certified, experienced with Kubernetes and CI/CD pipelines",
    ];

    let idx = 0;
    let charIdx = 0;
    let phase: "typing" | "pausing" | "erasing" = "typing";

    function tick() {
      const store = Alpine.store("search") as any;

      if (store.jobDescription || !store.showPlaceholder) {
        if (store.animationStopped) return;
        setTimeout(tick, 500);
        return;
      }

      const current = examples[idx % examples.length];

      if (phase === "typing") {
        store.cursorBlinking = false;
        charIdx++;
        store.placeholder = current.slice(0, charIdx);
        if (charIdx >= current.length) {
          if (store.animationStopped) return;
          store.cursorBlinking = true;
          phase = "pausing";
          setTimeout(tick, 2000);
          return;
        }
        setTimeout(tick, 30);
      } else if (phase === "pausing") {
        if (store.animationStopped) return;
        store.cursorBlinking = false;
        phase = "erasing";
        setTimeout(tick, 20);
      } else if (phase === "erasing") {
        if (store.animationStopped) {
          store.placeholder = current;
          return;
        }
        charIdx--;
        store.placeholder = current.slice(0, charIdx);
        if (charIdx <= 0) {
          phase = "typing";
          idx++;
          setTimeout(tick, 300);
          return;
        }
        setTimeout(tick, 15);
      }
    }

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)) {
          io.disconnect();
          tick();
        }
      });
      io.observe(searchBar);
    } else {
      tick();
    }
  }
};
