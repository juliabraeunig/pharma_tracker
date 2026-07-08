// ============================================================
// Pharmaceutical Development Tracker — App Logic
// Reads from DEVELOPMENTS / DISEASE_AREAS / OUTCOME_TYPES in data.js
// ============================================================

const state = {
  company: "all",
  diseaseArea: "all",
  outcome: "all"
};

function uniqueCompanies() {
  return [...new Set(DEVELOPMENTS.map(d => d.company))].sort();
}

function filteredDevelopments() {
  return DEVELOPMENTS.filter(d => {
    if (state.company !== "all" && d.company !== state.company) return false;
    if (state.diseaseArea !== "all" && d.diseaseArea !== state.diseaseArea) return false;
    if (state.outcome !== "all" && d.outcome !== state.outcome) return false;
    return true;
  });
}

function populateFilters() {
  const companySel = document.getElementById("companyFilter");
  uniqueCompanies().forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    companySel.appendChild(opt);
  });
  companySel.addEventListener("change", () => {
    state.company = companySel.value;
    renderAll();
  });

  const diseaseSel = document.getElementById("diseaseFilter");
  DISEASE_AREAS.forEach(a => {
    const opt = document.createElement("option");
    opt.value = a;
    opt.textContent = a;
    diseaseSel.appendChild(opt);
  });
  diseaseSel.addEventListener("change", () => {
    state.diseaseArea = diseaseSel.value;
    renderAll();
  });

  const outcomeSel = document.getElementById("outcomeFilter");
  Object.entries(OUTCOME_TYPES).forEach(([key, meta]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = meta.label;
    outcomeSel.appendChild(opt);
  });
  outcomeSel.addEventListener("change", () => {
    state.outcome = outcomeSel.value;
    renderAll();
  });
}

function renderLegend() {
  const legend = document.getElementById("outcomeLegend");
  legend.innerHTML = Object.entries(OUTCOME_TYPES).map(([key, meta]) =>
    `<span><span class="legend-dot" style="background:${meta.color}"></span>${meta.label}</span>`
  ).join("");
}

function renderStats() {
  const row = document.getElementById("statRow");
  const total = DEVELOPMENTS.length;
  const companies = uniqueCompanies().length;
  const setbacks = DEVELOPMENTS.filter(d => d.outcome === "SETBACK").length;
  const approvals = DEVELOPMENTS.filter(d => d.outcome === "APPROVAL").length;

  row.innerHTML = `
    <div class="stat-card">
      <div class="num">${total}</div>
      <div class="label">Total developments tracked</div>
    </div>
    <div class="stat-card" style="border-left-color: var(--approval);">
      <div class="num">${approvals}</div>
      <div class="label">Regulatory approvals</div>
    </div>
    <div class="stat-card" style="border-left-color: var(--setback);">
      <div class="num">${setbacks}</div>
      <div class="label">Setbacks / missed endpoints</div>
    </div>
    <div class="stat-card">
      <div class="num">${companies}</div>
      <div class="label">Companies covered</div>
    </div>
  `;
}

function renderMatrix() {
  const head = document.getElementById("matrixHead");
  const body = document.getElementById("matrixBody");
  const companies = uniqueCompanies();

  head.innerHTML = `<th>Company</th>` + DISEASE_AREAS.map(a => `<th>${a}</th>`).join("");

  body.innerHTML = companies.map(company => {
    const cells = DISEASE_AREAS.map(area => {
      const matches = DEVELOPMENTS.filter(d => d.company === company && d.diseaseArea === area);
      const count = matches.length;
      if (count === 0) {
        return `<td><span class="matrix-count empty">—</span></td>`;
      }
      return `<td><button class="matrix-count has-data" data-company="${company}" data-area="${area}" style="background:${count > 1 ? 'rgba(232,69,44,0.16)' : 'rgba(232,69,44,0.08)'}; color:var(--signal-dark);">${count}</button></td>`;
    }).join("");
    return `<tr><td class="company-cell">${company}</td>${cells}</tr>`;
  }).join("");

  body.querySelectorAll(".matrix-count.has-data").forEach(btn => {
    btn.addEventListener("click", () => {
      state.company = btn.dataset.company;
      state.diseaseArea = btn.dataset.area;
      document.getElementById("companyFilter").value = state.company;
      document.getElementById("diseaseFilter").value = state.diseaseArea;
      renderAll();
      document.getElementById("devGrid").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderCards() {
  const grid = document.getElementById("devGrid");
  const countLabel = document.getElementById("cardsCount");
  const sortValue = d => d.sortKey || d.date;
  const items = filteredDevelopments().sort((a, b) => sortValue(b).localeCompare(sortValue(a)));

  countLabel.textContent = `${items.length} of ${DEVELOPMENTS.length} shown`;

  if (items.length === 0) {
    grid.innerHTML = `<div class="empty-state">No developments match this combination of filters. Try broadening the company, disease area, or outcome type.</div>`;
    return;
  }

  grid.innerHTML = items.map(d => {
    const meta = OUTCOME_TYPES[d.outcome];
    return `
      <div class="dev-card" style="border-left-color:${meta.color};">
        <div class="dev-top">
          <span class="company">${d.company}</span>
          <span class="date">${d.date}</span>
        </div>
        <span class="outcome-tag" style="background:${meta.bg}; color:${meta.color};">${meta.label}</span>
        <div class="headline">${d.headline}</div>
        <div class="detail">${d.detail}</div>
        <div class="source">Source: ${d.source} · ${d.diseaseArea}</div>
      </div>
    `;
  }).join("");
}

function renderAll() {
  renderStats();
  renderMatrix();
  renderCards();
}

function init() {
  populateFilters();
  renderLegend();
  renderAll();
}

init();
