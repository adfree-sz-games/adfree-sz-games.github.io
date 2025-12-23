# SZ Games - Project Context

## Project Overview
**SZ Games** is a static web-based game portal designed to host and play various "unblocked" games, targeting school environments. It aggregates HTML5, WebGL, and Flash games (emulated via Ruffle) into a searchable, grid-based interface.

The project is hosted on GitHub Pages and relies on client-side rendering for the game catalog.

## Key Technologies
*   **Frontend**: HTML5, CSS3, JavaScript.
*   **Frameworks/Libraries**:
    *   **Alpine.js**: Used in `index.html` for reactive state management (searching and filtering games).
    *   **Ruffle**: Flash player emulator (inferred from `package.json` and `Flash.html` usage).
*   **Data**: `games.json` acts as the central database for game entries.
*   **Hosting**: GitHub Pages (implied by `_config.yml`).

## Project Structure
*   **`index.html`**: The main entry point. It fetches `games.json` and renders the game grid using Alpine.js. Contains logic for search filtering and layout.
*   **`games.json`**: A JSON array containing metadata for all games. Each entry typically includes:
    *   `name`: Display name of the game.
    *   `url`: Link to the game (local wrapper or external).
    *   `image`: Path to the thumbnail image (usually in `cover/`).
*   **`cover/`**: Stores game thumbnail images.
*   **`games/`**: Contains game wrappers and potentially game assets.
    *   `game.html`: A generic iframe wrapper for HTML5 games.
    *   `Flash.html`: A wrapper for playing Flash (`.swf`) games.
    *   `unity.html`: A wrapper for Unity/WebGL games.
*   **`Global.js`**: Contains performance monitoring logic (LCP metrics).
*   **`_config.yml`**: Jekyll configuration file (sets cache headers).
*   **`package.json`**: Currently appears to be a copy of the Ruffle `package.json`, possibly indicating how the Flash emulator was integrated.

## Game Management
To add a new game:
1.  **Add Thumbnail**: Place the game's cover image in the `cover/` directory.
2.  **Update Database**: Add a new JSON object to `games.json`:
    ```json
    {
      "name": "Game Name",
      "url": "/games/game.html?game=/path/to/game",
      "image": "/cover/thumbnail.png"
    }
    ```
    *   Use `/games/Flash.html?game=...` for Flash games.
    *   Use `/games/unity.html?game=...` for Unity games.

## Development & Usage
Since this is a static site, no complex build process is required.

**To Run Locally:**
Serve the root directory using any static file server:
*   Python: `python3 -m http.server`
*   Node: `npx serve .`

**Note on `package.json`**: The current `package.json` file describes `@ruffle-rs/ruffle` and does not contain standard scripts for this specific website project. It should be treated as an artifact of the Ruffle integration unless updated.
