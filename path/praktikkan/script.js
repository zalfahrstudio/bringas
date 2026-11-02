(() => {
  const progressBar = document.getElementById("progressBar");
  const form = document.getElementById("reflectionForm");
  const savedPlan = document.getElementById("savedPlan");

  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const step = document.getElementById("smallStep").value.trim();
    const when = document.getElementById("whenStep").value.trim();
    const boundary = document.getElementById("boundary").value.trim();

    savedPlan.replaceChildren();

    const heading = document.createElement("h3");
    heading.textContent = "Rencana kecilmu";
    savedPlan.appendChild(heading);

    [
      ["Langkah", step],
      ["Waktu", when],
      ["Batasan", boundary]
    ].forEach(([label, value]) => {
      const line = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = `${label}: `;
      line.append(strong, document.createTextNode(value));
      savedPlan.appendChild(line);
    });

    savedPlan.hidden = false;
    savedPlan.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
})();