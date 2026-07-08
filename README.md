[README.md](https://github.com/user-attachments/files/29808732/README.md)
# Pharmaceutical Development Tracker

A cross-referenced snapshot of pharmaceutical trial results, regulatory approvals, filings, and setbacks across 16 companies and three disease areas: infectious disease, chronic disease, and autoimmune.

**[View live demo →](#)** *(replace with your GitHub Pages URL after deploying)*

![Tracker preview](preview.png)
*(optional: add a screenshot here once deployed)*

## What this does

- Presents 35 pharmaceutical developments from the past ~12 months, compiled via web research across company SEC filings (10-K, 10-Q, 8-K, 6-K), investor relations press releases, and trade press
- Cross-references every entry by company, disease area, and outcome type (approval, positive trial result, regulatory filing, setback, or early-stage data) through an interactive matrix and filterable card grid
- Shows setbacks and missed endpoints alongside wins — a tracker that only shows successes isn't a credible one

## What this is not

This is **not a live dashboard**. Unlike a public API like WHO's Global Health Observatory, there is no clean structured data source for "did a clinical trial succeed" — that's a judgment call a journalist or analyst makes after reading a press release, not a queryable database field. This project is a curated, point-in-time snapshot, refreshed by re-running the research process on request, not automatically.

The data layer (`data.js`) is structured as a plain array of records specifically so a future live data source — an RSS aggregator, a news API — could replace it without touching the UI. That structural choice doesn't make the current version live; it just avoids a rewrite if it ever becomes one.

## Why I built it this way

Deciding what counts as a "development" and what disease area or outcome bucket it belongs in required real editorial judgment, not scraping. A few choices worth calling out:

1. **Setbacks are shown as prominently as wins.** Amgen's forced FDA withdrawal of TAVNEOS and AbbVie's missed survival endpoint in the VERONA trial appear with the same visual weight as approvals. Outcome classifications here are my own editorial judgment made while compiling the snapshot, not a standardized industry taxonomy, and the README and in-page disclosure both say so.
2. **Gaps are shown honestly, not padded.** Several companies in this roster (Viatris, UCB, Merck) have limited public developments specifically within these three disease areas — that's shown as an empty matrix cell, not filled in with a marginal or unrelated story just to avoid a blank space.
3. **Imprecise source dates stay imprecise.** A few entries only had a quarter or year in the original source rather than an exact month. Rather than fabricating false precision, those entries keep their original date string for display and carry a separate `sortKey` field so the list still sorts correctly.

## Tech stack

- Vanilla JavaScript (no framework, no build step)
- Data and UI are separate files (`data.js` / `app.js`) so the dataset can be updated or swapped independently
- No dependencies to install — open `index.html` and it runs

## Running locally

Clone the repo and open `index.html` in a browser. All three files (`index.html`, `data.js`, `app.js`) need to stay in the same folder.

## Known limitations

- **Not exhaustive.** 16 companies and 3 disease areas is a deliberately bounded first pass, not comprehensive industry coverage.
- **No automatic refresh.** Updating this requires re-running the research and editing `data.js` directly.
- **Outcome classification is subjective.** "Positive trial result" vs. "setback" reflects a reasonable reading of the source material, not an official regulatory or scientific determination.

## License

MIT
