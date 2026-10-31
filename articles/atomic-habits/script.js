// BRINGAS — Atomic Habits
const progress = document.getElementById("readingProgress");
function updateReadingProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}
window.addEventListener("scroll", updateReadingProgress, { passive: true });
updateReadingProgress();

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap",
  );
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }),
);

// Ganti dengan tautan affiliate Atomic Habits yang valid sebelum dipublikasikan.
const AFFILIATE_URL = "https://example.com/ganti-dengan-link-affiliate";
const affiliateButton = document.getElementById("affiliateButton");
if (affiliateButton && AFFILIATE_URL) {
  affiliateButton.href = AFFILIATE_URL;
  affiliateButton.addEventListener("click", (event) => {
    if (AFFILIATE_URL.includes("example.com")) {
      event.preventDefault();
      alert("Tautan affiliate masih placeholder. Ganti AFFILIATE_URL di script.js dengan tautan produk affiliate yang valid.");
    }
  });
}

const checkboxes = [
  ...document.querySelectorAll('#practiceList input[type="checkbox"]'),
];
const checkCount = document.getElementById("checkCount");
const checkPercent = document.getElementById("checkPercent");
const checkBar = document.getElementById("checkBar");
function updateChecklist() {
  const checked = checkboxes.filter((item) => item.checked).length;
  const pct = Math.round((checked / checkboxes.length) * 100);
  checkCount.textContent = `${checked} dari ${checkboxes.length} selesai`;
  checkPercent.textContent = `${pct}%`;
  checkBar.style.width = `${pct}%`;
}
checkboxes.forEach((item) => item.addEventListener("change", updateChecklist));
document.getElementById("resetChecks").addEventListener("click", () => {
  checkboxes.forEach((item) => (item.checked = false));
  updateChecklist();
});

const copyQuestion = document.getElementById("copyQuestion");
const copyStatus = document.getElementById("copyStatus");
copyQuestion.addEventListener("click", async () => {
  const phrase = "Hal kecil apa yang bisa aku lakukan hari ini supaya selangkah lebih dekat dengan versi diriku yang aku mau?";
  try {
    await navigator.clipboard.writeText(phrase);
    copyStatus.textContent = "Pertanyaan berhasil disalin.";
  } catch (error) {
    copyStatus.textContent = phrase;
  }
});
document.getElementById("year").textContent = new Date().getFullYear();

const topicLinks = [...document.querySelectorAll(".topic-link")];
const sections = topicLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          topicLinks.forEach((link) =>
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            ),
          );
        }
      });
    },
    { rootMargin: "-25% 0px -60% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}

/* BuRing — animasi muncul saat scroll */
const revealSelectors = [
  ".section-heading",
  ".intro-grid",
  ".mindset-card",
  ".concept-card",
  ".case-card",
  ".quote-grid blockquote",
  ".check-item",
  ".question-card",
  ".audience-grid article",
  ".balanced-take",
  ".buy-copy",
  ".product-visual",
  ".related-card",
];

const revealElements = document.querySelectorAll(revealSelectors.join(","));

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  revealElements.forEach((element, index) => {
    element.classList.add("reveal");

    // Kartu dalam satu halaman muncul bergantian
    const delay = index % 4;
    element.style.setProperty("--delay", `${delay * 90}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}
