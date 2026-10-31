/* BRINGAS homepage interaction + editable article catalog.
   Replace article.path with the deployed URL of each summary article.
   Cards represent EDITORIAL ARTICLES ABOUT BOOKS, not physical book listings. */
const topics = [
  {
    id: "self-growth",
    name: "Self Growth",
    image: "assets/topics/self-growth.svg",
    desc: "Kebiasaan, disiplin, dan pengembangan diri.",
  },
  {
    id: "marketing",
    name: "Marketing",
    image: "assets/topics/marketing.svg",
    desc: "Memahami pasar, brand, dan perilaku konsumen.",
  },
  {
    id: "psychology",
    name: "Psychology",
    image: "assets/topics/psychology.svg",
    desc: "Pola pikir, emosi, dan cara manusia mengambil keputusan.",
  },
  {
    id: "economics",
    name: "Economics",
    image: "assets/topics/economics.svg",
    desc: "Sistem, insentif, dan cara dunia bekerja.",
  },
  {
    id: "politics",
    name: "Politics",
    image: "assets/topics/politics.svg",
    desc: "Kekuasaan, kebijakan, dan kehidupan publik.",
  },
  {
    id: "philosophy",
    name: "Philosophy",
    image: "assets/topics/philosophy.svg",
    desc: "Pertanyaan mendasar tentang hidup dan nilai.",
  },
  {
    id: "social",
    name: "Social",
    image: "assets/topics/social.svg",
    desc: "Relasi, komunikasi, dan dinamika masyarakat.",
  },
  {
    id: "negotiation",
    name: "Negotiation",
    image: "assets/topics/negotiation.svg",
    desc: "Menyampaikan kepentingan dan mencari kesepakatan.",
  },
  {
    id: "money-investing",
    name: "Money & Investing",
    image: "assets/topics/money-investing.svg",
    desc: "Uang, risiko, dan keputusan finansial.",
  },
  {
    id: "business-career",
    name: "Business & Career",
    image: "assets/topics/business-career.svg",
    desc: "Membangun usaha dan bertumbuh dalam karier.",
  },
];
const articles = [
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    book: "Atomic Habits",
    author: "James Clear",
    topic: "self-growth",
    label: "Kebiasaan & sistem",
    desc: "Mengapa perubahan kecil yang konsisten bisa membentuk hasil besar—dan bagaimana merancang sistem yang mendukung kebiasaan baik.",
    read: 8,
    featured: true,
    tag: "MOST READ",
    bg: "#dff8f3",
    ink: "#102a43",
    art: "SMALL<br>STEPS.",
    image: "assets/images/atomic-habits.png",
    path: "articles/atomic-habits/index.html",
  },
  {
    id: "the-5-am-club",
    title: "The 5 AM Club",
    book: "The 5 AM Club",
    author: "Robin Sharma",
    topic: "self-growth",
    label: "Fokus & rutinitas",
    desc: "Gagasan tentang melindungi waktu pagi untuk merawat fokus, energi, dan ruang berpikir sebelum hari menjadi ramai.",
    read: 9,
    featured: true,
    tag: "EDITOR'S PICK",
    glyph: "05",
    bg: "#dce9d5",
    ink: "#173b35",
    art: "OWN<br>YOUR<br>MORNING.",
    path: "articles/the-5-am-club/",
  },
  {
    id: "zero-to-one",
    title: "Zero to One",
    book: "Zero to One",
    author: "Peter Thiel bersama Blake Masters",
    topic: "business-career",
    label: "Startup & inovasi",
    desc: "Cara berpikir tentang menciptakan sesuatu yang baru, menemukan peluang, dan membangun bisnis yang berbeda.",
    read: 10,
    featured: true,
    tag: "STARTUP MINDSET",
    glyph: "↗",
    bg: "#dce9f5",
    ink: "#15385a",
    art: "CREATE<br>THE NEW.",
    path: "articles/zero-to-one/",
  },
  {
    id: "how-to-win-friends",
    title: "How to Win Friends and Influence People",
    book: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    topic: "social",
    label: "Relasi & komunikasi",
    desc: "Prinsip komunikasi yang membantu kita memahami orang lain, membangun kepercayaan, dan bekerja sama dengan lebih baik.",
    read: 9,
    featured: false,
    tag: "HUMAN CONNECTION",
    glyph: "◎",
    bg: "#f5e7ce",
    ink: "#674629",
    art: "PEOPLE<br>MATTER.",
    path: "articles/how-to-win-friends/",
  },
  {
    id: "never-split-the-difference",
    title: "Never Split the Difference",
    book: "Never Split the Difference",
    author: "Chris Voss bersama Tahl Raz",
    topic: "negotiation",
    label: "Negosiasi",
    desc: "Pelajaran dari negosiasi berisiko tinggi tentang mendengarkan secara aktif, membaca emosi, dan mengajukan pertanyaan yang tepat.",
    read: 10,
    featured: false,
    tag: "BETTER CONVERSATIONS",
    glyph: "⇄",
    bg: "#f3dfdc",
    ink: "#6c2f37",
    art: "LISTEN<br>TO LEAD.",
    path: "articles/never-split-the-difference/",
  },
  {
    id: "the-lean-startup",
    title: "The Lean Startup",
    book: "The Lean Startup",
    author: "Eric Ries",
    topic: "business-career",
    label: "Eksperimen bisnis",
    desc: "Menguji asumsi bisnis melalui eksperimen, umpan balik pelanggan, dan proses belajar yang terukur sebelum membuang banyak sumber daya.",
    read: 9,
    featured: false,
    tag: "BUILD & LEARN",
    glyph: "↗",
    bg: "#d9f0e8",
    ink: "#164b44",
    art: "TEST.<br>LEARN.<br>ADAPT.",
    path: "articles/the-lean-startup/",
  },
  {
    id: "cant-hurt-me",
    title: "Can't Hurt Me",
    book: "Can't Hurt Me",
    author: "David Goggins",
    topic: "self-growth",
    label: "Ketangguhan mental",
    desc: "Refleksi tentang disiplin, menghadapi batas diri, dan membangun ketangguhan melalui tindakan yang konsisten.",
    read: 8,
    featured: false,
    tag: "MENTAL TOUGHNESS",
    glyph: "✳",
    bg: "#e7e3dd",
    ink: "#393e42",
    art: "STAY<br>IN IT.",
    path: "articles/cant-hurt-me/",
  },
  {
    id: "greenlights",
    title: "Greenlights",
    book: "Greenlights",
    author: "Matthew McConaughey",
    topic: "philosophy",
    label: "Refleksi hidup",
    desc: "Memoar reflektif tentang membaca pengalaman hidup, menemukan peluang, dan berdamai dengan jalan yang tidak selalu lurus.",
    read: 8,
    featured: false,
    tag: "LIFE NOTES",
    glyph: "↗",
    bg: "#e2efd8",
    ink: "#2c5539",
    art: "FIND<br>YOUR<br>GREENLIGHT.",
    path: "articles/greenlights/",
  },
  {
    id: "the-subtle-art",
    title: "The Subtle Art of Not Giving a F*ck",
    book: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    topic: "self-growth",
    label: "Prioritas & nilai",
    desc: "Mengapa hidup yang lebih bermakna bukan soal merasa positif setiap saat, melainkan memilih hal yang layak diperjuangkan.",
    read: 8,
    featured: false,
    tag: "CHOOSE WHAT MATTERS",
    glyph: "◇",
    bg: "#f1dfd1",
    ink: "#6c4033",
    art: "CARE<br>WISELY.",
    path: "articles/the-subtle-art/",
  },
  {
    id: "the-let-them-theory",
    title: "The Let Them Theory",
    book: "The Let Them Theory",
    author: "Mel Robbins",
    topic: "psychology",
    label: "Batas diri & kendali",
    desc: "Kerangka sederhana untuk membedakan apa yang bisa kita kendalikan dari pilihan dan reaksi orang lain.",
    read: 7,
    featured: false,
    tag: "EMOTIONAL CLARITY",
    glyph: "○",
    bg: "#e9e2f4",
    ink: "#493d68",
    art: "LET GO.<br>MOVE ON.",
    path: "articles/the-let-them-theory/",
  },
  {
    id: "the-little-prince",
    title: "The Little Prince",
    book: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    topic: "philosophy",
    label: "Makna & perspektif",
    desc: "Membaca kembali cara kita memandang persahabatan, tanggung jawab, dan hal-hal penting yang mudah terlewat saat dewasa.",
    read: 7,
    featured: false,
    tag: "A CLASSIC, REVISITED",
    glyph: "✳",
    bg: "#f4e8bc",
    ink: "#655226",
    art: "SEE<br>WITH<br>THE HEART.",
    path: "articles/the-little-prince/",
  },
  {
    id: "the-alchemist",
    title: "The Alchemist",
    book: "The Alchemist",
    author: "Paulo Coelho",
    topic: "philosophy",
    label: "Tujuan & perjalanan",
    desc: "Renungan tentang mengikuti panggilan hidup, membaca pengalaman sebagai pelajaran, dan memahami arti perjalanan pribadi.",
    read: 7,
    featured: false,
    tag: "PURPOSE & JOURNEY",
    glyph: "☼",
    bg: "#f1dfb8",
    ink: "#72502a",
    art: "FOLLOW<br>THE CALL.",
    path: "articles/the-alchemist/",
  },
  {
    id: "to-kill-a-mockingbird",
    title: "To Kill a Mockingbird",
    book: "To Kill a Mockingbird",
    author: "Harper Lee",
    topic: "social",
    label: "Empati & keadilan",
    desc: "Menelusuri tema empati, prasangka, keberanian moral, dan bagaimana masyarakat membentuk cara kita menilai orang lain.",
    read: 9,
    featured: false,
    tag: "LITERATURE & SOCIETY",
    glyph: "◉",
    bg: "#e2e8e2",
    ink: "#304d42",
    art: "LOOK<br>AGAIN.",
    path: "articles/to-kill-a-mockingbird/",
  },
  {
    id: "body-keeps-score",
    title: "The Body Keeps the Score",
    book: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    topic: "psychology",
    label: "Tubuh & pengalaman",
    desc: "Pengenalan terhadap hubungan antara pengalaman traumatis, tubuh, ingatan, dan proses pemulihan—dengan konteks yang hati-hati.",
    read: 11,
    featured: false,
    tag: "MIND & BODY",
    glyph: "◌",
    bg: "#e7e0e9",
    ink: "#4f405a",
    art: "MIND<br>AND BODY.",
    path: "articles/body-keeps-score/",
  },
  {
    id: "money-psychology",
    title: "The Psychology of Money",
    book: "The Psychology of Money",
    author: "Morgan Housel",
    topic: "money-investing",
    label: "Perilaku finansial",
    desc: "Mengapa keputusan uang sering lebih berkaitan dengan perilaku, pengalaman, dan cara pandang daripada hitung-hitungan semata.",
    read: 9,
    featured: false,
    tag: "MONEY & BEHAVIOR",
    glyph: "◒",
    bg: "#d7eee8",
    ink: "#164c48",
    art: "MONEY<br>IS A<br>BEHAVIOR.",
    path: "articles/the-psychology-of-money/",
  },
  {
    id: "marketing",
    title: "This Is Marketing",
    book: "This Is Marketing",
    author: "Seth Godin",
    topic: "marketing",
    label: "Pasar & positioning",
    desc: "Melihat pemasaran sebagai cara membantu orang yang tepat, memahami perubahan yang mereka cari, dan membangun kepercayaan.",
    read: 8,
    featured: false,
    tag: "MARKETING THINKING",
    glyph: "↗",
    bg: "#f5e0d3",
    ink: "#6b4231",
    art: "MAKE<br>CHANGE<br>MATTER.",
    path: "articles/this-is-marketing/",
  },
  {
    id: "economics",
    title: "The Undercover Economist",
    book: "The Undercover Economist",
    author: "Tim Harford",
    topic: "economics",
    label: "Ekonomi sehari-hari",
    desc: "Menggunakan lensa ekonomi untuk memahami harga, insentif, kelangkaan, dan keputusan sehari-hari.",
    read: 8,
    featured: false,
    tag: "ECONOMICS EXPLAINED",
    glyph: "⌁",
    bg: "#dce8f1",
    ink: "#27465f",
    art: "LOOK FOR<br>INCENTIVES.",
    path: "articles/the-undercover-economist/",
  },
  {
    id: "politics",
    title: "The Dictator's Handbook",
    book: "The Dictator's Handbook",
    author: "Bruce Bueno de Mesquita & Alastair Smith",
    topic: "politics",
    label: "Kekuasaan & insentif",
    desc: "Kerangka untuk memahami bagaimana insentif, koalisi pendukung, dan kepentingan memengaruhi perilaku pemimpin.",
    read: 10,
    featured: false,
    tag: "POWER & SYSTEMS",
    glyph: "⚑",
    bg: "#e7dfe1",
    ink: "#5c3540",
    art: "FOLLOW<br>THE<br>INCENTIVES.",
    path: "articles/the-dictators-handbook/",
  },
];
const topicMap = Object.fromEntries(topics.map((t) => [t.id, t]));
const $ = (s) => document.querySelector(s);
const topicGrid = $("#topicGrid"),
  featuredGrid = $("#featuredGrid"),
  articleGrid = $("#articleGrid");
const searchInput = $("#searchInput"),
  topicFilter = $("#topicFilter"),
  sortFilter = $("#sortFilter");
function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function topicName(id) {
  return topicMap[id]?.name || id;
}

function artMarkup(a) {
  return `
    <div class="card-art ${a.image ? "has-image" : ""}"
         style="--art-bg:${a.bg};--art-ink:${a.ink}">

      ${
        a.image
          ? `
        <img
          class="card-art-image"
          src="${escapeHtml(a.image)}"
          alt="${escapeHtml(a.book || a.title)}"
          loading="lazy"
        >
      `
          : `
        <div class="art-glyph" aria-hidden="true">
          ${escapeHtml(a.glyph)}
        </div>
        <div class="art-title">${a.art || ""}</div>
      `
      }

      <div class="art-overlay"></div>

      <div class="art-top">
        <span class="art-tag">${escapeHtml(a.tag || "")}</span>
        <span class="art-index">${escapeHtml(a.glyph || "")}</span>
      </div>

      <div class="art-bottom">
        <span>BRINGAS / BOOK NOTES</span>
        <span>IDE → AKSI</span>
      </div>

    </div>
  `;
}

function cardMarkup(a, featured = false) {
  const t = topicMap[a.topic];
  return `<article class="article-card ${featured ? "featured-card" : ""}">${artMarkup(a)}<div class="card-content"><div class="card-meta"><span>${escapeHtml(t?.name || "Bacaan")}</span><i class="meta-dot"></i><span>${escapeHtml(a.label)}</span></div><h3>${escapeHtml(a.title)}: Ringkasan Buku</h3><p class="card-desc">${escapeHtml(a.desc)}</p><div class="card-footer"><span class="read-time">${a.read} menit baca <span class="meta-dot" style="display:inline-block;margin:0 6px"></span> Tanpa spoiler</span><a class="read-link" href="${escapeHtml(a.path)}" aria-label="Baca ringkasan ${escapeHtml(a.title)}">Baca ringkasan <span>↗</span></a></div></div></article>`;
}
function renderTopics() {
  topicGrid.innerHTML = topics
    .map(
      (t) =>
        `<button class="topic-card" type="button" data-topic="${t.id}" aria-label="Jelajahi topik ${t.name}"><span class="topic-top"><img class="topic-image" src="${t.image}" alt="" loading="lazy" width="58" height="58"><span class="topic-count">${String(articles.filter((a) => a.topic === t.id).length).padStart(2, "0")} IDE</span></span><b>${t.name}</b><span class="topic-arrow" aria-hidden="true"><svg class="arrow-icon" viewBox="0 0 24 24" fill="none"><path d="M5 12h13M12 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>`,
    )
    .join("");
  topicFilter.innerHTML =
    '<option value="all">Semua topik</option>' +
    topics.map((t) => `<option value="${t.id}">${t.name}</option>`).join("");
}
function renderFeatured() {
  featuredGrid.innerHTML = articles
    .filter((a) => a.featured)
    .slice(0, 3)
    .map((a, i) => cardMarkup(a, i === 0))
    .join("");
}
function getFiltered() {
  const q = searchInput.value.trim().toLowerCase(),
    topic = topicFilter.value,
    sort = sortFilter.value;
  let out = articles.filter((a) => {
    const text = [
      a.title,
      a.author,
      a.desc,
      a.label,
      topicName(a.topic),
      a.book,
    ]
      .join(" ")
      .toLowerCase();
    return (!q || text.includes(q)) && (topic === "all" || a.topic === topic);
  });
  if (sort === "az") out.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === "short")
    out.sort((a, b) => a.read - b.read || a.title.localeCompare(b.title));
  else
    out.sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        a.title.localeCompare(b.title),
    );
  return out;
}
/* =====================================
   BRINGAS — LIBRARY DISPLAY CONTROL
===================================== */

// Jumlah artikel yang tampil di homepage
const LIBRARY_PREVIEW_COUNT = 6;

// Status tampilan
let showAllArticles = false;

// =====================================
// RENDER ARTICLES
// =====================================

function renderArticles() {
  const out = getFiltered();

  // Batasi artikel menjadi 6
  const visible = showAllArticles ? out : out.slice(0, LIBRARY_PREVIEW_COUNT);

  // Tampilkan kartu artikel
  articleGrid.innerHTML = visible.map((a) => cardMarkup(a)).join("");

  // Periksa apakah filter sedang digunakan
  const hasActiveFilter =
    searchInput.value.trim() !== "" || topicFilter.value !== "all";

  const totalLabel = hasActiveFilter
    ? `${out.length} hasil pencarian`
    : `${articles.length} ringkasan`;

  // Informasi jumlah artikel
  $("#resultCount").textContent =
    `Menampilkan ${visible.length} dari ${totalLabel}`;

  // Empty state
  $("#emptyState").hidden = out.length !== 0;
  articleGrid.hidden = out.length === 0;

  // Elemen tombol
  const moreWrap = $("#libraryMoreWrap");
  const moreBtn = $("#libraryMoreBtn");
  const moreNote = $("#libraryMoreNote");

  // Apakah masih ada artikel lainnya?
  const hasMore = out.length > LIBRARY_PREVIEW_COUNT;

  moreWrap.hidden = out.length === 0 || !hasMore;

  // Status tombol
  moreBtn.setAttribute("aria-expanded", String(showAllArticles));

  // Teks tombol
const arrow = '<span class="arrow-wrap" aria-hidden="true"></span>';

moreBtn.innerHTML = showAllArticles
  ? `Tampilkan lebih sedikit ${arrow}`
  : hasActiveFilter
    ? `Lihat semua ${out.length} hasil ${arrow}`
    : `Jelajahi semua ringkasan ${arrow}`;
  // Deskripsi tombol
  moreNote.textContent = showAllArticles
    ? "Kamu sedang melihat seluruh koleksi yang sesuai."
    : "Ini baru sebagian pilihan. Masih ada bacaan menarik lainnya di BRINGAS.";
}

// =====================================
// COLLAPSE LIBRARY
// =====================================

function collapseLibrary() {
  showAllArticles = false;
  renderArticles();
}

// =====================================
// TOPIC FILTER
// =====================================

function setTopic(id) {
  showAllArticles = false;

  topicFilter.value = id;

  document.querySelectorAll(".topic-card").forEach((el) => {
    el.classList.toggle("active", el.dataset.topic === id);
  });

  renderArticles();

  $("#semua-artikel").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// =====================================
// INITIAL RENDER
// =====================================

renderTopics();
renderFeatured();
renderArticles();

$("#year").textContent = new Date().getFullYear();

// =====================================
// TOPIC CARD CLICK
// =====================================

topicGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".topic-card[data-topic]");
  if (!card) return;

  // Kartu jalur membuka halaman panduan tematik, bukan memfilter artikel buku.
  window.location.href = `jalur/${encodeURIComponent(card.dataset.topic)}.html`;
});

// =====================================
// FILTER EVENTS
// =====================================

topicFilter.addEventListener("change", () => {
  showAllArticles = false;

  document.querySelectorAll(".topic-card").forEach((el) => {
    el.classList.toggle("active", el.dataset.topic === topicFilter.value);
  });

  renderArticles();
});

// SEARCH
searchInput.addEventListener("input", () => {
  showAllArticles = false;

  renderArticles();
});

// SORT
sortFilter.addEventListener("change", () => {
  showAllArticles = false;

  renderArticles();
});

// =====================================
// SHOW ALL / SHOW LESS BUTTON
// =====================================

$("#libraryMoreBtn").addEventListener("click", () => {
  showAllArticles = !showAllArticles;

  renderArticles();

  if (!showAllArticles) {
    $("#semua-artikel").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

// =====================================
// RESET FILTER
// =====================================

function resetFilters() {
  showAllArticles = false;

  searchInput.value = "";
  topicFilter.value = "all";
  sortFilter.value = "featured";

  document.querySelectorAll(".topic-card").forEach((el) => {
    el.classList.remove("active");
  });

  renderArticles();
}

$("#clearFilters").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);
function setTopic(id) {
  topicFilter.value = id;
  document
    .querySelectorAll(".topic-card")
    .forEach((el) => el.classList.toggle("active", el.dataset.topic === id));
  renderArticles();
  $("#semua-artikel").scrollIntoView({ behavior: "smooth", block: "start" });
}
renderTopics();
renderFeatured();
renderArticles();
$("#year").textContent = new Date().getFullYear();
topicGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".topic-card[data-topic]");
  if (!card) return;

  // Kartu jalur membuka halaman panduan tematik, bukan memfilter artikel buku.
  window.location.href = `jalur/${encodeURIComponent(card.dataset.topic)}.html`;
});
topicFilter.addEventListener("change", () => {
  document
    .querySelectorAll(".topic-card")
    .forEach((el) =>
      el.classList.toggle("active", el.dataset.topic === topicFilter.value),
    );
  renderArticles();
});
searchInput.addEventListener("input", renderArticles);
sortFilter.addEventListener("change", renderArticles);
function resetFilters() {
  searchInput.value = "";
  topicFilter.value = "all";
  sortFilter.value = "featured";
  document
    .querySelectorAll(".topic-card")
    .forEach((el) => el.classList.remove("active"));
  renderArticles();
}
$("#clearFilters").addEventListener("click", resetFilters);
$("#emptyReset").addEventListener("click", resetFilters);
function updateThemeButton() {
  const button = $("#themeToggle");
  if (!button) return;
  const dark = document.body.classList.contains("dark");
  button.innerHTML = dark
    ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"></path></svg>';
  button.setAttribute(
    "aria-label",
    dark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
  );
  button.setAttribute(
    "title",
    dark ? "Aktifkan mode terang" : "Aktifkan mode gelap",
  );
}
$("#themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  updateThemeButton();
  try {
    localStorage.setItem("bringas-theme", dark ? "dark" : "light");
  } catch (e) {}
});
try {
  if (localStorage.getItem("bringas-theme") === "dark") {
    document.body.classList.add("dark");
  }
} catch (e) {}
updateThemeButton();
const menuToggle = $("#menuToggle"),
  nav = $(".desktop-nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    }),
  );
}
const searchDialog = $("#searchDialog");
const searchOpen = $("#searchOpen");
const dialogSearchInput = $("#dialogSearchInput");

searchOpen?.addEventListener("click", () => {
  if (searchDialog && typeof searchDialog.showModal === "function") {
    if (!searchDialog.open) searchDialog.showModal();
    window.requestAnimationFrame(() => {
      dialogSearchInput?.focus();
      renderDialogSearchResults(dialogSearchInput?.value || "");
    });
  } else {
    searchInput?.focus();
    $("#semua-artikel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
const dialogSearchResults = $("#dialogSearchResults");

function renderDialogSearchResults(query) {
  if (!dialogSearchResults) return;
  const q = query.trim().toLowerCase();
  dialogSearchResults.replaceChildren();
  if (!q) return;

  const matches = articles.filter((a) => {
    const searchable = [a.title, a.author, a.desc, a.label, topicName(a.topic), a.book]
      .filter(Boolean).join(" ").toLowerCase();
    return searchable.includes(q);
  }).slice(0, 7);

  if (!matches.length) {
    dialogSearchResults.innerHTML = '<p class="dialog-search-empty">Belum ada artikel yang cocok. Coba kata kunci lain.</p>';
    return;
  }

  dialogSearchResults.innerHTML = matches.map((a) => `
    <a class="dialog-search-result" href="${escapeHtml(a.path || "#semua-artikel")}">
      <span class="dialog-result-copy">
        <strong>${escapeHtml(a.title)}</strong>
        <small>${escapeHtml(a.author || topicName(a.topic) || "Ringkasan buku")}</small>
      </span>
      <span class="dialog-result-arrow" aria-hidden="true">↗</span>
    </a>
  `).join("");
}

dialogSearchInput?.addEventListener("input", (e) => {
  if (searchInput) searchInput.value = e.target.value;
  renderArticles();
  renderDialogSearchResults(e.target.value);
});
searchDialog?.querySelector("form")?.addEventListener("submit", () => {
  if (searchInput && dialogSearchInput)
    searchInput.value = dialogSearchInput.value;
  renderArticles();
});
dialogSearchInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (searchInput) searchInput.value = e.target.value;
    renderArticles();
    if (searchDialog?.open) searchDialog.close();
    $("#semua-artikel")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
const carousel = document.querySelector("#bookCarousel");

document.querySelector("#bookNext")?.addEventListener("click", () => {
  carousel.scrollBy({ left: 350, behavior: "smooth" });
});

document.querySelector("#bookPrev")?.addEventListener("click", () => {
  carousel.scrollBy({ left: -350, behavior: "smooth" });
});

/* =====================================
   BRINGAS — HOMEPAGE MOTION SYSTEM
===================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Cek preferensi aksesibilitas
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const revealSelectors = [
    ".hero",
    ".hero-content",
    ".hero-title",
    ".hero-description",
    ".section-heading",
    ".book-carousel-heading",
    ".topic-card",
    ".article-card",
    ".library-more-wrap",
    ".about-section",
    "footer",
  ];

  const elements = document.querySelectorAll(revealSelectors.join(","));

  // Jika pengguna memilih mengurangi animasi
  if (reduceMotion) {
    elements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  // Tambahkan kelas reveal
  elements.forEach((element) => {
    element.classList.add("reveal");
  });

  // Animasi bertahap untuk kartu
  const cardGroups = [".article-card", ".topic-card"];

  cardGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((card, index) => {
      card.style.transitionDelay = `${(index % 3) * 100}ms`;
    });
  });

  // Observer untuk animasi saat scroll
  const observer = new IntersectionObserver(
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
      rootMargin: "0px 0px -35px 0px",
    },
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  // Animasi entrance untuk hero
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.classList.add("hero-loaded");
  }

  // Efek klik tombol
  document.querySelectorAll("button, .btn").forEach((button) => {
    button.addEventListener("pointerdown", () => {
      button.classList.add("is-pressed");
    });

    ["pointerup", "pointerleave", "pointercancel"].forEach((event) => {
      button.addEventListener(event, () => {
        button.classList.remove("is-pressed");
      });
    });
  });

  console.log("BRINGAS Motion System activated.");
});


/* Accessible mobile navigation drawer */
(() => {
  const openButton = document.getElementById("mobileMenuOpen");
  const closeButton = document.getElementById("mobileMenuClose");
  const panel = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("mobileMenuBackdrop");
  if (!openButton || !closeButton || !panel || !backdrop) return;

  const openMenu = () => {
    backdrop.hidden = false;
    requestAnimationFrame(() => {
      panel.classList.add("is-open");
      backdrop.classList.add("is-visible");
    });
    panel.setAttribute("aria-hidden", "false");
    openButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("mobile-menu-open");
    closeButton.focus();
  };
  const closeMenu = () => {
    panel.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    panel.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-menu-open");
    window.setTimeout(() => { backdrop.hidden = true; }, 260);
    openButton.focus();
  };

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
  panel.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    panel.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    panel.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("mobile-menu-open");
    window.setTimeout(() => { backdrop.hidden = true; }, 260);
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && panel.classList.contains("is-open")) closeMenu();
  });
})();
