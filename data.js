// ============================================================
// Pharmaceutical Development Tracker — Data
// Compiled via web research, last updated: July 2026
// This is a curated snapshot, not a live feed. Structured as an
// array of records so a future live data source (RSS/API) can
// replace this file without touching the UI layer.
// ============================================================

const DISEASE_AREAS = ["Infectious Disease", "Chronic Disease", "Autoimmune"];

const OUTCOME_TYPES = {
  APPROVAL: { label: "Regulatory Approval", color: "#1a7a4c", bg: "#e6f4ec" },
  POSITIVE: { label: "Positive Trial Result", color: "#b8331f", bg: "#fdeae6" },
  FILING: { label: "Regulatory Filing/Review", color: "#6b5ecd", bg: "#eeecfa" },
  SETBACK: { label: "Setback / Missed Endpoint", color: "#faf7f2", bg: "#201c18" },
  EARLY: { label: "Early-Stage Data", color: "#5c5648", bg: "#f1efe9" }
};

const DEVELOPMENTS = [
  // --- Pfizer ---
  {
    company: "Pfizer", diseaseArea: "Infectious Disease", outcome: "POSITIVE",
    headline: "Phase 3 data support updated LP.8.1 COVID-19 vaccine formula",
    detail: "Pfizer and BioNTech reported positive topline Phase 3 results showing a 4-fold increase in LP.8.1-neutralizing antibodies, reinforcing the FDA-approved 2025-2026 COMIRNATY formula.",
    date: "2025-09", source: "pfizer.com"
  },
  {
    company: "Pfizer", diseaseArea: "Chronic Disease", outcome: "POSITIVE",
    headline: "Acquired obesity drug PF'3944 meets endpoints in Phase IIb",
    detail: "The monthly GLP-1RA candidate acquired via the Metsera acquisition showed competitive efficacy and tolerability in the VESPER-3 trial, advancing toward Phase III.",
    date: "2026-02", source: "clinicaltrialsarena.com"
  },

  // --- Moderna ---
  {
    company: "Moderna", diseaseArea: "Infectious Disease", outcome: "APPROVAL",
    headline: "mCOMBRIAX flu+COVID combination vaccine approved in EU",
    detail: "The world's first approved flu plus COVID combination vaccine, alongside EU approval of mNEXSPIKE, marking two infectious disease regulatory milestones in a single quarter.",
    date: "2026-05", source: "sec.gov (Moderna 8-K)"
  },
  {
    company: "Moderna", diseaseArea: "Infectious Disease", outcome: "APPROVAL",
    headline: "mRESVIA RSV vaccine expanded to younger at-risk adults",
    detail: "FDA approved expanded use for adults 18-59 with underlying health conditions, building on the original 60+ authorization.",
    date: "2025-06", source: "sec.gov (Moderna 10-Q)"
  },

  // --- GSK ---
  {
    company: "GSK", diseaseArea: "Infectious Disease", outcome: "APPROVAL",
    headline: "Arexvy RSV vaccine approved for at-risk adults 18-49",
    detail: "FDA expanded the age indication based on a Phase IIIb trial showing non-inferior immune response versus the original 60+ population.",
    date: "2026-03", source: "gsk.com"
  },
  {
    company: "GSK", diseaseArea: "Chronic Disease", outcome: "POSITIVE",
    headline: "Bepirovirsen positive pivotal readout for chronic hepatitis B",
    detail: "Positive Phase 3 results position bepirovirsen as a potential first-in-class treatment; GSK expects a major approval decision to follow.",
    date: "2026-02", source: "gsk.com (FY2025 results)"
  },
  {
    company: "GSK", diseaseArea: "Infectious Disease", outcome: "POSITIVE",
    headline: "Bexsero meningitis B vaccine: positive Phase III readout in infants",
    detail: "Positive Phase III data reported for Bexsero in the infant population, part of GSK's broader vaccines pipeline update.",
    date: "2025-11", source: "gsk.com (pipeline appendix)"
  },

  // --- Gilead ---
  {
    company: "Gilead", diseaseArea: "Infectious Disease", outcome: "APPROVAL",
    headline: "Yeztugo (lenacapavir) approved as twice-yearly HIV prevention",
    detail: "FDA approved the first and only twice-yearly injectable HIV-1 capsid inhibitor for PrEP, based on Phase 3 PURPOSE 1 and PURPOSE 2 trials showing ≥99.9% of participants remained HIV negative. WHO subsequently issued new global implementation guidelines based on the trial data.",
    date: "2025-06", source: "gilead.com"
  },
  {
    company: "Gilead", diseaseArea: "Infectious Disease", outcome: "FILING",
    headline: "FDA accepts NDA for once-daily HIV treatment BIC/LEN",
    detail: "Priority review granted for a single-tablet bictegravir/lenacapavir regimen, supported by positive Phase 3 ARTISTRY-1 and ARTISTRY-2 data published in The Lancet.",
    date: "2026-04", source: "gilead.com"
  },

  // --- Novavax ---
  {
    company: "Novavax", diseaseArea: "Infectious Disease", outcome: "APPROVAL",
    headline: "Nuvaxovid 2025-2026 formula COVID-19 vaccine approved",
    detail: "FDA approved the updated non-mRNA, protein-based COVID-19 vaccine formula targeting the JN.1 strain lineage, commercialized in partnership with Sanofi.",
    date: "2025-08", source: "novavax.com / prnewswire.com"
  },

  // --- Novo Nordisk ---
  {
    company: "Novo Nordisk", diseaseArea: "Chronic Disease", outcome: "POSITIVE",
    headline: "CagriSema beats Wegovy head-to-head in diabetes trial",
    detail: "REIMAGINE 2 Phase 3 data showed CagriSema achieved superior HbA1c reduction and weight loss versus semaglutide alone, though CagriSema had previously fallen short of the company's own expectations in an earlier obesity trial.",
    date: "2026-02", source: "novonordisk.com / biopharmadive.com"
  },
  {
    company: "Novo Nordisk", diseaseArea: "Chronic Disease", outcome: "SETBACK",
    headline: "Semaglutide misses in closely watched Alzheimer's trials",
    detail: "Disappointing results dashed hopes that GLP-1 drugs could extend into neurodegenerative disease treatment, reported the same week as positive amycretin diabetes data.",
    date: "2025-11", source: "cnbc.com"
  },

  // --- Eli Lilly ---
  {
    company: "Eli Lilly", diseaseArea: "Chronic Disease", outcome: "APPROVAL",
    headline: "Foundayo (orforglipron) approved as first oral GLP-1 for obesity",
    detail: "FDA approval of the first oral small-molecule GLP-1 receptor agonist for obesity, following positive Phase 3 results across seven planned obesity and diabetes trials.",
    date: "2026-04", source: "sec.gov (Lilly 8-K) / eureka.patsnap.com"
  },
  {
    company: "Eli Lilly", diseaseArea: "Chronic Disease", outcome: "POSITIVE",
    headline: "Eloralintide shows up to 20% weight loss in Phase 2",
    detail: "The selective amylin receptor agonist met its primary endpoint with superior weight reduction versus placebo across all dose arms; Phase 3 enrollment began the following month.",
    date: "2025-11", source: "lilly.com"
  },

  // --- AstraZeneca ---
  {
    company: "AstraZeneca", diseaseArea: "Chronic Disease", outcome: "APPROVAL",
    headline: "Breztri approved in the US for asthma, first triple therapy",
    detail: "FDA approved Breztri as the first and only single-inhaler triple therapy for asthma in patients 12+, based on Phase III KALOS and LOGOS trials, extending its original COPD indication.",
    date: "2026-04", source: "sec.gov (AstraZeneca 6-K)"
  },
  {
    company: "AstraZeneca", diseaseArea: "Autoimmune", outcome: "POSITIVE",
    headline: "Saphnelo subcutaneous meets endpoints in lupus (TULIP-SC)",
    detail: "Phase III trial showed statistically significant reduction in SLE disease activity; subsequently approved in the EU, though the FDA issued a Complete Response Letter pending further information.",
    date: "2025-09", source: "sec.gov (AstraZeneca 6-K)"
  },
  {
    company: "AstraZeneca", diseaseArea: "Chronic Disease", outcome: "SETBACK",
    headline: "Fasenra misses primary endpoint in COPD trial (RESOLUTE)",
    detail: "The Phase III RESOLUTE trial showed numerical improvement but did not achieve statistical significance on its primary endpoint in chronic obstructive pulmonary disease.",
    date: "2025-09", source: "sec.gov (AstraZeneca 6-K)"
  },

  // --- AbbVie ---
  {
    company: "AbbVie", diseaseArea: "Autoimmune", outcome: "APPROVAL",
    headline: "Rinvoq approved for giant cell arteritis in US and EU",
    detail: "Both the FDA and European Commission granted approval in the same month for this autoimmune vasculitis indication.",
    date: "2025-04", source: "sec.gov (AbbVie 10-K)"
  },
  {
    company: "AbbVie", diseaseArea: "Autoimmune", outcome: "POSITIVE",
    headline: "Rinvoq hits co-primary endpoints in vitiligo (Phase 3 Viti-Up)",
    detail: "Two replicate Phase 3 studies showed 50% improvement in total-body repigmentation; if approved, Rinvoq would be the first systemic treatment for non-segmental vitiligo.",
    date: "2025-10", source: "abbvie.com (Q4 2025 results)"
  },
  {
    company: "AbbVie", diseaseArea: "Chronic Disease", outcome: "SETBACK",
    headline: "Venclexta misses survival endpoint in MDS trial (VERONA)",
    detail: "The global Phase 3 VERONA trial combining Venclexta with azacitidine did not meet its primary endpoint of overall survival in higher-risk myelodysplastic syndrome. No new safety signals were observed.",
    date: "2025-06", source: "sec.gov (AbbVie 10-Q)"
  },

  // --- Merck ---
  {
    company: "Merck", diseaseArea: "Autoimmune", outcome: "POSITIVE",
    headline: "Tulisokibart clears Phase 3 in ulcerative colitis",
    detail: "Positive Phase 3 data for the autoimmune GI candidate, part of Merck's push to build franchises in immunology beyond its oncology-dominated pipeline.",
    date: "2026-06", source: "finance.yahoo.com"
  },
  {
    company: "Merck", diseaseArea: "Chronic Disease", outcome: "SETBACK",
    headline: "FDA places partial clinical hold on I-DXd trial over safety signal",
    detail: "A higher-than-anticipated incidence of fatal interstitial lung disease led to a partial hold while Merck, partner Daiichi Sankyo, and an independent safety committee review the data.",
    date: "2025-09", source: "syneticx.com"
  },

  // --- Amgen ---
  {
    company: "Amgen", diseaseArea: "Autoimmune", outcome: "APPROVAL",
    headline: "Uplizna approved in EU for generalized myasthenia gravis",
    detail: "European Commission approval builds on Uplizna's prior EC approval for IgG4-related disease, entering a competitive autoimmune market alongside argenx, J&J, and UCB.",
    date: "2026-02", source: "amgen.com"
  },
  {
    company: "Amgen", diseaseArea: "Autoimmune", outcome: "SETBACK",
    headline: "FDA requests voluntary withdrawal of TAVNEOS from US market",
    detail: "The FDA raised concerns over how ChemoCentryx (acquired by Amgen) re-adjudicated primary endpoint results for a subset of patients in the pivotal vasculitis trial, alongside a known hepatotoxicity risk.",
    date: "2026-01", source: "sec.gov (Amgen 10-K)"
  },

  // --- UCB ---
  {
    company: "UCB", diseaseArea: "Autoimmune", outcome: "APPROVAL",
    headline: "Rystiggo approved for generalized myasthenia gravis (context: 2024)",
    detail: "Referenced as part of the competitive gMG landscape into which Amgen's Uplizna and J&J's Imaavy subsequently entered; UCB remains an established player in this autoimmune category.",
    date: "2024", sortKey: "2024-06", source: "european-biotechnology.com"
  },

  // --- Johnson & Johnson ---
  {
    company: "Johnson & Johnson", diseaseArea: "Autoimmune", outcome: "FILING",
    headline: "Icotrokinra FDA filing for plaque psoriasis",
    detail: "J&J is seeking first U.S. approval for icotrokinra, aiming to introduce a new treatment paradigm for adults and adolescents with plaque psoriasis.",
    date: "2025-Q3", sortKey: "2025-07", source: "sec.gov (J&J 8-K)"
  },
  {
    company: "Johnson & Johnson", diseaseArea: "Autoimmune", outcome: "APPROVAL",
    headline: "Imaavy approved for generalized myasthenia gravis (2025)",
    detail: "Referenced as part of the competitive FcRn-blocker landscape in gMG, alongside UCB's Rystiggo and Amgen's subsequently-approved Uplizna.",
    date: "2025", sortKey: "2025-06", source: "european-biotechnology.com"
  },

  // --- Teva ---
  {
    company: "Teva", diseaseArea: "Autoimmune", outcome: "APPROVAL",
    headline: "Selarsdi label expanded to Crohn's disease and ulcerative colitis",
    detail: "FDA approval of a 130mg/26ml single-dose vial expands this biosimilar's label into two chronic autoimmune GI conditions.",
    date: "2025-Q4", sortKey: "2025-10", source: "drugstorenews.com"
  },
  {
    company: "Teva", diseaseArea: "Autoimmune", outcome: "APPROVAL",
    headline: "Simlandi named first interchangeable high-concentration Humira biosimilar",
    detail: "Simlandi became the first citrate-free, high-concentration biosimilar designated interchangeable with Humira in the United States.",
    date: "2025-Q4", sortKey: "2025-10", source: "drugstorenews.com"
  },
  {
    company: "Teva", diseaseArea: "Autoimmune", outcome: "EARLY",
    headline: "Funding agreement to accelerate anti-IL-15 candidate for vitiligo",
    detail: "Teva announced a funding agreement with Royalty Pharma to accelerate development of TEV-'408, an anti-IL-15 therapy, for the autoimmune skin condition vitiligo.",
    date: "2026-01", source: "drugstorenews.com"
  },

  // --- Viatris ---
  {
    company: "Viatris", diseaseArea: "Chronic Disease", outcome: "APPROVAL",
    headline: "First approval for sotagliflozin (Inpefa) outside US/Europe",
    detail: "Viatris received first regulatory approval for sotagliflozin in the United Arab Emirates, an early step in its innovative-brands strategy for this chronic disease asset.",
    date: "2026-Q1", sortKey: "2026-01", source: "sec.gov (Viatris 10-K)"
  },
  {
    company: "Viatris", diseaseArea: "Chronic Disease", outcome: "EARLY",
    headline: "Selatogrel and cenerimod trial enrollment remains on track",
    detail: "Limited public detail on outcomes; enrollment for these chronic/autoimmune-adjacent candidates was confirmed on track as of the most recent annual filing.",
    date: "2025-2026", sortKey: "2025-09", source: "sec.gov (Viatris ARS)"
  },

  // --- Bristol Myers Squibb ---
  {
    company: "Bristol Myers Squibb", diseaseArea: "Autoimmune", outcome: "EARLY",
    headline: "CAR-T therapy shows early promise across three autoimmune diseases",
    detail: "Phase 1 Breakfree-1 data across systemic sclerosis, lupus, and inflammatory myopathies showed 94% of evaluable patients remained off chronic immunosuppressive therapy, an early but notable signal for cell therapy beyond oncology.",
    date: "2025-10", source: "news.bms.com"
  },
  {
    company: "Bristol Myers Squibb", diseaseArea: "Autoimmune", outcome: "POSITIVE",
    headline: "Deucravacitinib 52-week data reinforce autoimmune benefit",
    detail: "Long-term data from Phase 3 POETYK PsA-1 and Phase 2 PAISLEY-SLE studies showed sustained efficacy in psoriatic arthritis and systemic lupus erythematosus, with a PDUFA decision for PsA expected March 2026.",
    date: "2025-10", source: "dermatologytimes.com"
  },
  {
    company: "Bristol Myers Squibb", diseaseArea: "Chronic Disease", outcome: "SETBACK",
    headline: "Camzyos misses dual primary endpoints in heart failure trial",
    detail: "The Phase III ODYSSEY-HCM trial did not meet its dual primary endpoints in a form of hypertrophic cardiomyopathy, though a separate adolescent trial (SCOUT-HCM) later reported positive results.",
    date: "2025-04", source: "sec.gov (BMS 10-K)"
  }
];
