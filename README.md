# SZ Games

A Simple Way To Game In School And Doesnt Have Thousands Of Ads Unlike Other Sites

Static, client-side "unblocked" games portal — an aggregated catalog of HTML5, WebGL, and Flash games (Flash emulated via Ruffle) with a searchable, grid-based interface. Repo name: `adfree-sz-games/adfree-sz-games.github.io`; published via GitHub Pages at <https://adfree-sz-games.github.io/>.


## Stack

- **Frontend**: plain HTML5, CSS3, vanilla JavaScript. No framework app; Alpine.js (via unpkg CDN) powers the reactive search/filter grid in `index.html`.
- **Game catalog**: `games.json` — a JSON array of `{ "name", "url", "image" }` entries (351 entries; 339 local paths, 1 external at time of audit).
- **Game wrappers**:
  - `games/game.html` — generic iframe wrapper for HTML5 games.
  - `games/Flash.html` — Flash (`.swf`) wrapper using Ruffle (`@ruffle-rs/ruffle` from unpkg; `package.json` pins a nightly reference version, license MIT OR Apache-2.0).
  - `games/unity.html` — Unity/WebGL wrapper.
  - `index.html` — main entry; fetches `games.json` and renders the grid, plus hardcoded boxes for the first ~21 games (incl. external "CPS Test" and "Dinosaur Game" links).
- **Hosting**: GitHub Pages (Jekyll `_config.yml` only sets `cache-control: max-age=31536000`).
- **Extras**: tab cloak / panic-key feature (`GobalSettings.js`), open-in-new-tab helper (`nohist.js`), and `links-td/` — a separate "jplist" proxy-link-list subproject with its own README and credits.

## Prerequisites

- Git.
- Any static file server (Python, Node, etc.). No build tools, package install, or runtime dependencies are required — `package.json` is a Ruffle dependency artifact, not a project manifest (no scripts).

## Setup

No build step. Clone and serve the repo root:

```sh
git clone git@github.com:adfree-sz-games/adfree-sz-games.github.io.git
cd adfree-sz-games.github.io
python3 -m http.server 8000   # or: npx serve .
# open http://localhost:8000
```

## Environment / config

This is a fully static site — **there are no environment variables**. All configuration lives in tracked files (names only, values live in the repo):

- `ads.txt`, `gpt.js`, `gpt-sz-games.js`, `divs.js`, `divs-sz-games.js`, `roll.js` — ad network / publisher identifiers.
- `AppWriteConfig.js` — AppWrite endpoint/project.
- `Chat.html` — Firebase and reCAPTCHA keys.
- `OneSignalSDKWorker.js` — OneSignal worker import.
- `index.html` — analytics domain, verification tokens, AdSense client tag.
- `CNAME` — custom domain

Do not commit credentials, API keys, or tokens for third-party services.

## Dev / build / test

- **Build**: none (static files served as-is).
- **Local dev**: serve the root directory (see Setup) and open `index.html`.
- **Test / validation**:
  - Validate catalog: `python3 -m json.tool games.json` (must stay valid JSON — `index.html` fetches and parses it client-side).
  - Smoke check after changes: `curl -sS -o /dev/null -w "%{http_code}\n" https://adfree-sz-games.github.io/` and `/games.json`.
  - No automated test suite exists (verified: no `.github/workflows`, no test runner config).

## Architecture

```
index.html ── fetch games.json ── Alpine.js grid (search/filter)
   │
   ├── games/game.html?game=…   (iframe HTML5 wrapper)
   ├── games/Flash.html?game=…  (Ruffle SWF wrapper)
   └── games/unity.html?game=…  (Unity/WebGL wrapper)
```

- The grid renders the first ~21 games from hardcoded boxes in `index.html` (incl. external "CPS Test" hero and "Dinosaur Game") and everything else from `games.json` via `games.slice(21)`.
- Search filtering uses exact / partial / Levenshtein-distance (≤1) matching against game titles.
- **Observed quirk**: `games.json` entry 20 ("riddle school 3") falls between the hardcoded boxes (which end at entry 19, "Riddle School 2") and `slice(21)` ("riddle school 4"), so it is not rendered by the current `index.html`. Intent unknown — likely a typo in the slice offset.
- **Dead/broken code**: `dev/main.js` fetches `/dev/.txt`, which does not exist in the repo (only `dev/adslst.txt` and `dev/ad2.txt`, ad-blocking host lists, are present), so its element-removal logic never runs.

## Deployment

- GitHub Pages from the `master` branch (no CI workflows in the repo). Deploy = push to `origin/master`.
- Public URL: <https://adfree-sz-games.github.io/> (CNAME currently empty; verify Pages settings before re-adding a custom domain).
- Note: `_config.yml` sets `cache-control: max-age=31536000` (1 year) for all paths — expect aggressive CDN caching after deploy.

## Maintenance

- **Add a game**: place the thumbnail in `cover/`, add an entry to `games.json` (`name`, `url`, `image`), then validate JSON. Use `/games/game.html?game=…` for HTML5, `/games/Flash.html?game=…` for SWF, `/games/unity.html?game=…` for Unity. If the game belongs in the first ~21 slots, also add/edit the hardcoded box in `index.html` (or fix the `slice(21)` offset so the catalog is fully data-driven).
- `links-td/` has its own README ("jplist") with separate contribution instructions.
- Verify with the smoke checks under Dev / build / test after each push.

## Credits / license

- **Repo license**: none specified at the repo root (no `LICENSE` file). See individual vendored assets.
- **Ruffle** (`package.json`): MIT OR Apache-2.0 — <https://ruffle.rs>.
- **three.js** (in `testing/`): license at `testing/three-LICENSE`.
- **links-td subproject credits** (from `links-td/README.md`): [Jonnycat](https://github.com/JonnycatMeow) (website creator), [GhostedZoomer77](https://github.com/Ishan877) (proxy helper).
- Vendored game bundles (e.g. `flappy-bird/js/`, `games/chess/`, `games/dino/`) include their own third-party notices (jQuery, PixiJS, etc.).
