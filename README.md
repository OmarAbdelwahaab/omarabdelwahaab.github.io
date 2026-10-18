# Omar Abdelwahaab — AI Engineer Portfolio

A modern, high-performance, dark-mode portfolio built specifically for **Omar Abdelwahaab Ibrahim** (`@OmarAbdelwahaab`), reflecting real-world engineering accomplishments in autonomous AI pipelines, speech recognition & forced alignment, agentic workflows, and low-level kernel hardware integration.

---

## 🌟 Key Portfolio Features

1. **Cyberpunk & Obsidian Glassmorphic Design:**
   - Sleek deep-slate palette (`#07090e`), subtle borders, neon accents, and responsive typography using Google Fonts *Plus Jakarta Sans* and *JetBrains Mono*.
   - Zero heavyweight frameworks needed — fast loading, zero build steps, and clean separation of concerns.

2. **Flagship Systems & Projects Showcase:**
   - **`Q` — Autonomous Quran Video Repurposing & Multi-Platform Pipeline:**
     - End-to-end fail-closed pipeline: Telegram ingest $\to$ 16kHz audio extraction $\to$ Whisper large-v3 ASR $\to$ Tanzil Uthmani fuzzy corpus matching $\to$ Wav2Vec2/MMS CTC forced alignment $\to$ strict QA Gate ($\ge0.90$ / $\ge0.95$) $\to$ HarfBuzz ASS RTL karaoke subtitles $\to$ FFmpeg 1080×1920 video render $\to$ Ayrshare multi-platform syndication (TikTok, Reels, Shorts, X).
   - **`AI-Powered Freelance Opportunity Intelligence System`:**
     - Live on Azure Linux VM: 17-node n8n workflow polling Freelancer and Truelancer APIs every 2 minutes, Universal JSON Schema normalization, multi-stage filtering, Google Gemini Flash LLM proposals, and Telegram Human-in-the-Loop interactive callback buttons.
   - **`ASUS TUF AI RGB Sync Daemon`:**
     - Windows kernel ACPI background daemon (`\\.\ATKACPI`, `DeviceIoControl`) reading Antigravity transcript logs and Claude Desktop CPU/LevelDB deltas to trigger physical ambient keyboard illumination (Red Breathing for working, Pure Yellow for user confirmation modals, Calm Cyan for idle).
   - **`Flyrank Capstone Embeddable Widget Platform`:**
     - Multi-tenant FastAPI microservice with single-script delivery, honeypot spam defense, and resilient geo-fallback enrichment.
   - **`SEER Breast Cancer Survival Prediction Pipeline`:**
     - Reproducible clinical ML pipeline with Random Forest classification.
   - **`TestSpace Task API`:**
     - Containerized FastAPI & PostgreSQL stack with Supabase integration and OpenAPI.

3. **Interactive Features Built-In:**
   - **Interactive Q Pipeline Architecture Simulator:** Walk through the 8 stages of the speech-to-video workflow with live stage transitions.
   - **Interactive ASUS TUF RGB Backlight Simulator:** Switch between *Agent Working*, *Waiting for Action*, and *Idle* to see the simulated keyboard light breathe red, glow yellow, or calm cyan.
   - **Interactive Project Deep-Dive Modals:** Click any project to inspect full ASCII architecture diagrams, metrics, technical problem-solving narratives, and production code snippets.
   - **Interactive Terminal / CLI Playground:** Built-in terminal allowing visitors to type `help`, `skills`, `projects`, `q`, `freelance`, `rgb`, or `contact`.
   - **Live GitHub API Integration:** Fetches live repository and profile data from `https://api.github.com/users/OmarAbdelwahaab` with graceful fallbacks.

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply double-click `index.html` in Windows Explorer or open it with your browser (Chrome, Edge, Firefox, Brave).

### Option 2: Local HTTP Server (Python)
Run the following in PowerShell inside this directory:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## 🌐 How to Deploy to GitHub Pages (Free Hosting)

To host this portfolio live under your free GitHub URL (`https://omarabdelwahaab.github.io`):

1. **Create a repository** named:
   `omarabdelwahaab.github.io` (or push to a repository branch named `gh-pages` or `main`).

2. **Push the portfolio files**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial AI Engineer portfolio release"
   git branch -M main
   git remote add origin https://github.com/OmarAbdelwahaab/omarabdelwahaab.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository **Settings** $\to$ **Pages**.
   - Under **Build and deployment**, set Source to **Deploy from a branch**.
   - Select `main` branch / `root` and click **Save**.
   - Within 1–2 minutes, your portfolio will be live at `https://omarabdelwahaab.github.io`!

---

## 🛠️ File Structure

```text
├── index.html           # Main portfolio single-page application
├── styles.css           # Custom CSS, glassmorphism, RGB keyframes, animations
├── app.js               # Interactive simulators, terminal emulator, modal logic, GitHub API
├── README.md            # Documentation and deployment guide
```
