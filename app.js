/**
 * Omar Abdelwahaab — AI Engineer Portfolio
 * Interactive Functionality, Terminal Emulator, Hardware Simulator & Project Modals
 */

// Project Database with deep technical specifications
const PROJECTS = [
  {
    id: 'q-pipeline',
    title: 'Q — Autonomous Quran Video Repurposing Pipeline',
    subtitle: 'End-to-end fail-closed autonomous speech & video generation pipeline fanning out to social media',
    category: ['audio-video', 'agentic', 'backend'],
    featured: true,
    badge: 'Flagship Pipeline',
    badgeColor: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10',
    stars: 'Active Dev',
    tags: ['Whisper large-v3', 'CtcForcedAligner (wav2vec2/MMS)', 'FFmpeg + HarfBuzz ASS', 'Ayrshare API', 'n8n Orchestrator', 'PostgreSQL Advisory Locks'],
    githubUrl: 'https://github.com/OmarAbdelwahaab/Q',
    summary: 'An autonomous media pipeline that ingests raw prayer broadcasts from Telegram, executes Whisper large-v3 speech recognition against the canonical Tanzil Uthmani corpus, computes word-level forced alignment, enforces a fail-closed QA gate, renders 1080×1920 short-form video with RTL karaoke animation, and publishes across TikTok, Reels, Shorts, and X.',
    stats: [
      { label: 'QA Gate Pass Criteria', value: '≥90% text / ≥95% align' },
      { label: 'Video Output Spec', value: '1080×1920 (9:16) H.264' },
      { label: 'Publishing Fanout', value: '4 Platforms via Ayrshare' },
      { label: 'Idempotency', value: 'pg_advisory_xact_lock' }
    ],
    architecture: `Telegram Channel ──► Telethon Listener ──► Storage Raw MP4
                          │
                          ▼
             FFmpeg Audio Extraction (16kHz Mono WAV)
                          │
                          ▼
            Whisper Large-v3 ASR ──► Tanzil Uthmani Corpus
                          │
                          ▼
       QuranMatcher (Levenshtein Fuzzy Overlap)
                          │
                          ▼
     CTC Forced Aligner (wav2vec2 / MMS Arabic)
                          │
                          ▼
    ┌───────────────────────────────────────────────┐
    │  QA Verification Gate (Fail-Closed Decoupling) │
    └───────┬───────────────────────────────┬───────┘
            │ Pass (≥0.90 / ≥0.95)          │ Fail / Low Confidence
            ▼                               ▼
     PostingWindowScheduler         Hold for Review (Telegram Queue)
            │ (Within hours)
            ▼
   HarfBuzz + ASS Karaoke Generator
            │
            ▼
   FFmpeg Complex Filtergraph Rendering (1080x1920)
            │
            ▼
   Ayrshare API Fanout ──► [ TikTok, Reels, Shorts, X ]`,
    details: [
      {
        heading: '1. Fail-Closed Theological Accuracy Gate',
        content: 'When repurposing sacred scriptures, a transcription error is catastrophic. Omar engineered an automated QA gate with strict dual thresholds: verse recognition confidence must exceed 0.90 and alignment coverage must exceed 0.95. Any item failing these gates immediately halts execution with exit code 2, isolates the payload to a review queue, and dispatches a rich Telegram alert with diff highlights to human supervisors.'
      },
      {
        heading: '2. Word-Level Forced Alignment & Dynamic RTL Typography',
        content: 'Implemented wav2vec2/MMS Arabic acoustic modeling (`ctc-forced-aligner`) to map spoken syllable envelopes to exact millisecond boundaries. Converted these timestamps into custom Advanced SubStation Alpha (`.ass`) karaoke events with HarfBuzz Arabic shaping, producing word-by-word active reveal animations in native Right-to-Left orientation over stylized architectural canvas loops.'
      },
      {
        heading: '3. Deterministic Concurrency & Dual-Tier State Strategy',
        content: 'Engineered per Architecture Decision Record (ADR 001) a dual-tier state architecture: lightweight zero-daemon SQLite for local developer CLI runs and testing; robust PostgreSQL with transaction advisory locks (`pg_advisory_xact_lock`) for containerized multi-worker production. Multiple webhook triggers for the same video are strictly serialized and idempotent.'
      }
    ],
    snippet: `# Python extract: Verification QA Gate logic in Q pipeline
def evaluate_qa_thresholds(match_confidence: float, alignment_coverage: float) -> QADecision:
    MIN_MATCH_CONF = 0.90
    MIN_ALIGN_COV = 0.95

    passed = (match_confidence >= MIN_MATCH_CONF and alignment_coverage >= MIN_ALIGN_COV)
    if not passed:
        logger.warning(
            f"QA Gate FAILED [Match: {match_confidence:.3f} | Align: {alignment_coverage:.3f}]. "
            "Halting pipeline execution and routing to human review queue."
        )
        return QADecision(approved=False, exit_code=2, route="review_queue")

    return QADecision(approved=True, exit_code=0, route="render_pipeline")`
  },
  {
    id: 'freelance-ai',
    title: 'AI-Powered Freelance Opportunity Intelligence',
    subtitle: 'Real-time multi-platform freelance monitor with LLM proposal generation & Telegram HITL',
    category: ['agentic', 'backend'],
    featured: true,
    badge: 'Production on Azure',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
    stars: 'Live',
    tags: ['Google Gemini Flash', 'n8n (Self-Hosted on Azure)', 'Supabase PostgreSQL', 'Telegram Bot API', 'REST API Ingestion', 'Universal Schema'],
    githubUrl: 'https://github.com/OmarAbdelwahaab/AI-powered-freelance-opportunity-intelligence-system',
    summary: 'A production-deployed backend automation system on an Azure Linux VM polling Freelancer and Truelancer APIs every 2 minutes. Normalizes heterogeneous payloads into a universal schema, applies multi-stage filters, crafts personalized proposals via Google Gemini Flash, and delivers alerts with Telegram interactive callback buttons for human-in-the-loop approvals.',
    stats: [
      { label: 'Polling Frequency', value: 'Every 2 Minutes' },
      { label: 'Workflow Nodes', value: '17 Orchestrated Nodes' },
      { label: 'LLM Engine', value: 'Google Gemini Flash' },
      { label: 'Deployment Host', value: 'Azure Linux VM' }
    ],
    architecture: `┌────────────────────────────────────────────────────────┐
│        Azure Linux VM (Self-Hosted n8n Orchestrator)   │
│                                                        │
│  Cron Trigger (2m) ──► Parallel Ingestion Branches     │
│                         ├─ Freelancer.com REST API     │
│                         └─ Truelancer.com REST API     │
│                                    │                   │
│                         Universal Schema Normalizer    │
│                                    │                   │
│                         Multi-Stage Filter Engine      │
│                         ├─ Skill Tag Exclusion         │
│                         ├─ Keyword Anti-pattern        │
│                         └─ 2-Minute Recency Gate       │
│                                    │                   │
│                         Google Gemini Flash LLM        │
│                         (Proposal Generation Engine)   │
│                                    │                   │
│          ┌─────────────────────────┴────────────────┐  │
│          ▼                                          ▼  │
│   Supabase Postgres                         Telegram Bot│
│   (Audit Trail)                             Inline Actions:
│                                             [Approve] [Skip]
└────────────────────────────────────────────────────────┘`,
    details: [
      {
        heading: '1. Universal Schema Normalization Layer',
        content: 'Freelance platform APIs return drastically different schemas, date formats, and nested structures. Omar built isolated `Edit Fields` adapters that project heterogeneous payloads into a unified contract: `Universal_Title`, `Universal_Description`, `Universal_Budget`, `Universal_URL`, and ISO 8601 timestamps, allowing all downstream logic to remain platform-agnostic.'
      },
      {
        heading: '2. High-Precision Recency & Keyword Gates',
        content: 'First-mover advantage dictates freelance bidding success. The pipeline enforces a strict 2-minute recency gate to prevent stale bids, combined with deterministic keyword exclusion filters that discard out-of-scope tasks (e.g. UGC, manual data entry, low-tier lead gen).'
      },
      {
        heading: '3. Interactive Human-in-the-Loop Feedback Loop',
        content: 'Rather than firing unsupervised bids, the system crafts tailored technical proposals using Google Gemini Flash and delivers them directly into a private Telegram chat with interactive inline buttons (`Approve` / `Skip`). This pairs machine speed with human discretion.'
      }
    ],
    snippet: `// Universal Schema Normalization in n8n JavaScript Node
return {
  Universal_Title: $json.title || $json.project_name,
  Universal_Description: ($json.description || $json.details).slice(0, 500),
  Universal_Budget: $json.budget ? \`\${$json.budget.minimum}-\${$json.budget.maximum} \${$json.currency.code}\` : \`\${$json.bid_stats?.bid_avg || 'Negotiable'}\`,
  Universal_URL: $json.seo_url || \`https://www.freelancer.com/projects/\${$json.id}\`,
  Source_Platform: $json.submitdate ? 'Freelancer' : 'Truelancer',
  created_at: new Date(($json.submitdate || $json.created_on) * 1000).toISOString()
};`
  },
  {
    id: 'asus-rgb-sync',
    title: 'ASUS TUF AI RGB Sync Daemon',
    subtitle: 'Kernel-level ACPI Windows background daemon providing ambient physical LED status for AI agents',
    category: ['hardware', 'agentic', 'backend'],
    featured: true,
    badge: 'Hardware & AI',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
    stars: 'Systems',
    tags: ['Python 3.10+', 'Windows ACPI Kernel Driver', 'DeviceIoControl', 'Antigravity Agent Parser', 'Claude Desktop Hook', 'Win32 System Tray'],
    githubUrl: 'https://github.com/OmarAbdelwahaab/asus-tuf-ai-rgb-sync',
    summary: 'An ultra-lightweight Windows background daemon that interfaces directly with motherboard ACPI registers via DeviceIoControl to map real-time reasoning and approval states of autonomous AI coding agents (Antigravity & Claude Desktop) to physical RGB keyboard backlights.',
    stats: [
      { label: 'Hardware Interface', value: 'Direct Kernel ACPI' },
      { label: 'CPU Overhead', value: '<0.1% Background' },
      { label: 'GUI Framework', value: 'Zero-dep Win32 Tray' },
      { label: 'Priority Hierarchy', value: 'Waiting > Working > Idle' }
    ],
    architecture: `               ┌──────────────────────────────────────┐
               │  Smart System Tray Win32 Daemon     │
               └──────────────────┬───────────────────┘
                                  │
         ┌────────────────────────┴────────────────────────┐
         ▼                                                 ▼
┌──────────────────────────────┐          ┌──────────────────────────────┐
│     Antigravity Monitor      │          │    Claude Desktop Monitor    │
│ - Real-time JSONL parser     │          │ - Process CPU delta analysis │
│ - Tool approval state hook   │          │ - LevelDB delta tracking     │
└──────────────┬───────────────┘          └──────────────┬───────────────┘
               │                                         │
               └──────────────────┬──────────────────────┘
                                  ▼
               ┌──────────────────────────────────────┐
               │    State Priority Resolver (Formal)  │
               │    Yellow (Wait) > Red (Work) > Cyan  │
               └──────────────────┬───────────────────┘
                                  ▼
               ┌──────────────────────────────────────┐
               │    Direct Kernel ACPI Controller     │
               │    DeviceIoControl(\\\\.\\ATKACPI)       │
               │    Device Code: 0x00100056 (TUF_KB)   │
               └──────────────────┬───────────────────┘
                                  ▼
               ┌──────────────────────────────────────┐
               │    💻 ASUS Laptop RGB Backlight      │
               └──────────────────────────────────────┘`,
    details: [
      {
        heading: '1. Direct Kernel ACPI Communication without Vendor Bloat',
        content: 'Bypasses proprietary, resource-heavy OEM gaming software suites by establishing a direct raw device handle with the Windows kernel ACPI interface (`\\\\.\\ATKACPI`, IoControlCode `0x0022240C`, Device IDs `0x00100056` and `0x0010005a`). Achieves sub-millisecond hardware color switching with virtually undetectable CPU footprint.'
      },
      {
        heading: '2. Non-Invasive AI Agent State Monitoring',
        content: 'Tracks agent activity asynchronously without modifying agent source code. For Antigravity, it watches the active conversation `transcript.jsonl` log for planner response generation and tool question modals; for Claude Desktop, it calculates process CPU deltas and tracks LevelDB write commits.'
      },
      {
        heading: '3. Ambient Computing for Autonomous Workflows',
        content: 'Solves the "alt-tab fatigue" of working alongside autonomous coding agents. An engineer across the room knows at a glance whether the agent is deep in reasoning (pulsing red breathing), ready for user confirmation (steady bright yellow), or finished (calm cyan).'
      }
    ],
    snippet: `# Python extract: Direct Kernel ACPI communication via ctypes
def set_keyboard_backlight_rgb(red: int, green: int, blue: int, mode: int = 0):
    ATKACPI_HANDLE = r"\\\\.\\ATKACPI"
    IOCTL_ASUS_WMI = 0x0022240C
    TUF_KB_DEVICE_ID = 0x00100056  # ASUS ACPI TUF Backlight

    # Construct packed binary control buffer for embedded controller
    payload = struct.pack("<IIIBBB", TUF_KB_DEVICE_ID, 0, mode, red, green, blue)
    with open(ATKACPI_HANDLE, "wb", buffering=0) as acpi_dev:
        windll.kernel32.DeviceIoControl(
            acpi_dev.fileno(), IOCTL_ASUS_WMI, payload, len(payload), None, 0, None, None
        )`
  },
  {
    id: 'flyrank-platform',
    title: 'Flyrank Embeddable Widget & Lead Platform',
    subtitle: 'Hardened multi-tenant backend platform with dynamic snippet delivery and geo-fallback',
    category: ['backend'],
    featured: false,
    badge: 'Multi-Tenant API',
    badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
    stars: 'Architecture',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker Compose', 'Pytest', 'Multi-Layer Rate Limiting', 'Geo Enrichment'],
    githubUrl: 'https://github.com/OmarAbdelwahaab/flyrank-capstone-widget-platform',
    summary: 'A multi-tenant backend platform enabling businesses to configure embeddable lead-capture widgets delivered via a single `<script>` snippet. Engineered with strict CORS boundaries, payload size limits, multi-tier IP/widget rate limiting, honeypot spam protection, and a resilient geo-enrichment fallback chain.',
    stats: [
      { label: 'Architecture', value: 'Multi-Tenant Isolated' },
      { label: 'Security', value: 'Honeypot + IP Throttling' },
      { label: 'Geo Enrichment', value: 'ip-api -> ipapi.co Fallback' },
      { label: 'Side Effects', value: 'Non-blocking Async Dispatch' }
    ],
    architecture: `[ Widget Owner ] ──► (Authenticated Admin API) ──► [ PostgreSQL DB ]
                                                            ▲
[ External Site ] ──► <script src="..."> ───────► [ Delivery API ]
                                                            │
[ Site Visitor ] ──► POST /api/v1/submissions ──► [ Public API ]
                                                            │
                           ├── 1. Rate Limiting & Spam Check│
                           ├── 2. Geo Fallback (ip-api/co)  │
                           ├── 3. Tenant DB Persistence ────┘
                           └── 4. Non-Blocking Side Effects (Email)`,
    details: [
      {
        heading: 'Resilient Geo-Enrichment Chain with Graceful Degradation',
        content: 'Engineered an automated multi-provider fallback strategy for visitor geolocation (`ip-api.com` -> `ipapi.co` -> local fallback) ensuring transient third-party API outages never abort or delay the primary lead-capture transaction.'
      },
      {
        heading: 'Hardened Submission Boundary & Asynchronous Side Effects',
        content: 'Constructed multi-tiered rate limiting per IP and per widget ID to thwart automated submission flooding. Decoupled notification dispatch into non-blocking background tasks to guarantee sub-50ms API response times.'
      }
    ],
    snippet: `@app.post("/api/v1/submissions", status_code=status.HTTP_201_CREATED)
async def submit_lead(
    payload: SubmissionSchema,
    request: Request,
    bg_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    enforce_rate_limit(request.client.host, payload.widget_id)
    if payload.is_honeypot_triggered():
        return {"status": "accepted"} # Silent drop for bots

    geo_data = await resolve_geo_with_fallback(request.client.host)
    record = persist_lead_submission(db, payload, geo_data)
    bg_tasks.add_task(dispatch_lead_notification, record.id)
    return {"status": "success", "id": record.id}`
  },
  {
    id: 'breast-cancer-model',
    title: 'SEER Breast Cancer Survival Prediction Pipeline',
    subtitle: 'End-to-end reproducible machine learning pipeline for clinical survival prognosis',
    category: ['ml-data'],
    featured: false,
    badge: 'Machine Learning',
    badgeColor: 'border-pink-500/40 text-pink-300 bg-pink-500/10',
    stars: 'Clinical ML',
    tags: ['Python', 'Scikit-Learn', 'Random Forest Classifier', 'Pandas & NumPy', 'SEER Dataset', 'Reproducible Pipeline'],
    githubUrl: 'https://github.com/OmarAbdelwahaab/Breast-Cancer-Model',
    summary: 'A reproducible, modular machine learning pipeline analyzing clinical patient attributes from the SEER Breast Cancer dataset. Features systematic data cleaning, categorical encoding, feature scaling, model training, cross-validation, and clinical survival inference.',
    stats: [
      { label: 'Algorithm', value: 'Random Forest Ensemble' },
      { label: 'Dataset', value: 'SEER Breast Cancer' },
      { label: 'Architecture', value: 'Modular /src Pipeline' },
      { label: 'Focus', value: 'Survival Classification' }
    ],
    architecture: `SEER Dataset CSV ──► Data Ingestion Module (src/data_loader.py)
                              │
                              ▼
        Preprocessing & Feature Engineering (src/preprocess.py)
        ├─ Handling Missingness & Imbalance
        ├─ One-Hot & Ordinal Categorical Encoding
        └─ StandardScaler Transformation
                              │
                              ▼
          Model Training & Validation (src/train.py)
          ├─ Stratified K-Fold Cross Validation
          └─ Hyperparameter Grid Search (Random Forest)
                              │
                              ▼
          Evaluation & Inference Engine (src/predict.py)
          └─ ROC-AUC, Precision-Recall & Survival Prognosis`,
    details: [
      {
        heading: 'Clinical Data Wrangling & Feature Engineering',
        content: 'Implemented rigorous categorical encoding for clinical staging (AJCC stage, tumor size, histological grade) and addressed class imbalance to ensure high prognostic sensitivity.'
      },
      {
        heading: 'Modular Pipeline Architecture',
        content: 'Structured the ML lifecycle into decoupled Python modules (`data_loader`, `preprocess`, `train`, `evaluate`), allowing effortless experimentation, logging, and reproducible artifact serialization.'
      }
    ],
    snippet: `# Pipeline extract: Feature engineering & Random Forest training
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

preprocessor = ColumnTransformer(transformers=[
    ('num', StandardScaler(), numeric_features),
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
])

rf_pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier(n_estimators=150, max_depth=12, random_state=42))
])`
  },
  {
    id: 'testspace-task-api',
    title: 'Containerized Task & State REST API Stack',
    subtitle: 'Production-ready FastAPI microservice with containerized PostgreSQL & Supabase',
    category: ['backend'],
    featured: false,
    badge: 'DevOps & Backend',
    badgeColor: 'border-slate-500/40 text-slate-300 bg-slate-500/10',
    stars: 'FastAPI',
    tags: ['FastAPI', 'PostgreSQL', 'Docker Compose', 'Supabase Integration', 'OpenAPI / Swagger'],
    githubUrl: 'https://github.com/OmarAbdelwahaab/TestSpace',
    summary: 'A containerized REST API microservice demonstrating clean backend service architecture, volume-persisted PostgreSQL database in Docker, environment management, and OpenAPI interactive documentation.',
    stats: [
      { label: 'Framework', value: 'FastAPI + Uvicorn' },
      { label: 'Database', value: 'PostgreSQL 15 Container' },
      { label: 'Deployment', value: 'Docker Compose (1-Command)' },
      { label: 'Documentation', value: 'Automated OpenAPI 3.0' }
    ],
    architecture: `Docker Compose Environment
┌──────────────────────────────────────────────────────────┐
│  ┌─────────────────────────┐   ┌──────────────────────┐  │
│  │    FastAPI Application  │   │    PostgreSQL DB     │  │
│  │   - Pydantic Validation ├──►│   - Volume Mounted   │  │
│  │   - Interactive OpenAPI │   │   - tasks Table      │  │
│  └─────────────────────────┘   └──────────────────────┘  │
└──────────────────────────────────────────────────────────┘`,
    details: [
      {
        heading: 'Rapid 1-Command Developer Ergonomics',
        content: 'Packaged complete stack orchestration within Docker Compose, enabling deterministic dev-prod parity with automated database migrations and health-check boundaries.'
      }
    ],
    snippet: `version: '3.8'
services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://postgres:dev@db:5432/tasks
    depends_on:
      - db
  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data`
  }
];

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initProjectCards();
  initProjectFilters();
  initKeyboardSimulator();
  initArchitectureVisualizer();
  initTerminalEmulator();
  initLiveGithubStats();
  initSmoothScroll();
  initCopyButtons();
});

/* ----------------------------------------------------
   1. Projects Rendering & Filter Logic
   ---------------------------------------------------- */
function initProjectCards() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = PROJECTS.map(project => `
    <div class="project-card glass-panel rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 relative overflow-hidden" data-category="${project.category.join(' ')}">
      
      <!-- Ambient Top Glow -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>

      <div>
        <!-- Card Header Badges -->
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full border ${project.badgeColor}">
            ${project.badge}
          </span>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors p-1" title="View Source on GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
        </div>

        <!-- Title & Subtitle -->
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          ${project.title}
        </h3>
        <p class="text-slate-400 text-sm mb-4 leading-relaxed">
          ${project.subtitle}
        </p>

        <!-- Stats Chips -->
        <div class="grid grid-cols-2 gap-2 mb-5">
          ${project.stats.slice(0, 2).map(stat => `
            <div class="bg-slate-900/60 border border-white/5 rounded-lg p-2 text-center">
              <span class="block text-[11px] text-slate-400 uppercase tracking-wider">${stat.label}</span>
              <span class="block text-xs font-semibold text-indigo-200 mt-0.5 truncate">${stat.value}</span>
            </div>
          `).join('')}
        </div>

        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${project.tags.map(tag => `
            <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Action Footer -->
      <div class="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <button onclick="openProjectModal('${project.id}')" class="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors">
          <span>Explore Architecture & Deep Dive</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 font-mono transition-colors">
          <span>GitHub</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
        </a>
      </div>
    </div>
  `).join('');
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-500');
        b.classList.add('bg-slate-900/50', 'text-slate-400', 'border-white/10');
      });
      btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-500');
      btn.classList.remove('bg-slate-900/50', 'text-slate-400', 'border-white/10');

      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('.project-card');

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ----------------------------------------------------
   2. Project Modal Deep-Dive
   ---------------------------------------------------- */
function openProjectModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('project-modal-body');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Header -->
    <div class="border-b border-white/10 pb-5 mb-6">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full border ${project.badgeColor}">
          ${project.badge}
        </span>
        <span class="text-xs font-mono text-slate-400">ID: ${project.id}</span>
      </div>
      <h2 class="text-2xl lg:text-3xl font-extrabold text-white mb-2">
        ${project.title}
      </h2>
      <p class="text-slate-300 text-sm leading-relaxed">
        ${project.summary}
      </p>
    </div>

    <!-- Metrics Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      ${project.stats.map(s => `
        <div class="bg-slate-900/80 border border-white/5 rounded-xl p-3.5 text-center">
          <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400">${s.label}</div>
          <div class="text-sm font-bold text-indigo-300 mt-1">${s.value}</div>
        </div>
      `).join('')}
    </div>

    <!-- Architecture Visual Box -->
    <div class="mb-8">
      <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2">
        <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
        <span>End-to-End System Architecture</span>
      </h3>
      <div class="bg-slate-950/90 border border-white/10 rounded-xl p-4 overflow-x-auto font-mono text-xs text-indigo-300 leading-relaxed shadow-inner">
        <pre>${project.architecture}</pre>
      </div>
    </div>

    <!-- Deep-Dive Breakdown -->
    <div class="space-y-6 mb-8">
      <h3 class="text-base font-bold text-white flex items-center gap-2">
        <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        <span>Engineering Highlights & Core Solutions</span>
      </h3>
      ${project.details.map(d => `
        <div class="bg-slate-900/50 border border-white/5 rounded-xl p-4">
          <h4 class="text-sm font-semibold text-indigo-200 mb-1.5">${d.heading}</h4>
          <p class="text-xs text-slate-300 leading-relaxed">${d.content}</p>
        </div>
      `).join('')}
    </div>

    <!-- Code Snippet -->
    ${project.snippet ? `
    <div class="mb-6">
      <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2">
        <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        <span>Production Implementation Extract</span>
      </h3>
      <div class="bg-slate-950/90 border border-white/10 rounded-xl p-4 overflow-x-auto font-mono text-xs text-emerald-300 leading-relaxed shadow-inner">
        <pre>${project.snippet}</pre>
      </div>
    </div>
    ` : ''}

    <!-- Modal Action Link -->
    <div class="pt-4 border-t border-white/10 flex justify-end gap-3">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30">
        <span>View Full Repository on GitHub</span>
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// Window event for ESC key to close modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});

/* ----------------------------------------------------
   3. ASUS TUF AI RGB Backlight Simulator
   ---------------------------------------------------- */
function initKeyboardSimulator() {
  const keyboard = document.getElementById('rgb-keyboard-container');
  const statusDisplay = document.getElementById('rgb-status-indicator');
  const stateDesc = document.getElementById('rgb-state-desc');
  const buttons = document.querySelectorAll('.rgb-mode-btn');

  if (!keyboard || !statusDisplay) return;

  const states = {
    working: {
      class: 'keyboard-backlight-working',
      badge: '🔴 AGENT WORKING',
      badgeColor: 'text-red-400 border-red-500/40 bg-red-500/10',
      desc: 'Red Breathing Pulse: Agent is actively generating tokens, executing shell commands, or traversing tool chains via direct ACPI DeviceIoControl call.'
    },
    waiting: {
      class: 'keyboard-backlight-waiting',
      badge: '🟡 WAITING FOR APPROVAL',
      badgeColor: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
      desc: 'Solid Pure Yellow: Agent is blocked waiting for human approval (plan confirmation, shell question modal, or bash execution confirmation).'
    },
    idle: {
      class: 'keyboard-backlight-idle',
      badge: '🔵 NORMAL / IDLE',
      badgeColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10',
      desc: 'Calm Cyan Solid: Agents are standing by in idle mode. Kernel driver holds steady default profile with near 0% CPU consumption.'
    }
  };

  function applyState(modeKey) {
    const s = states[modeKey];
    if (!s) return;

    // Reset keyboard classes
    keyboard.classList.remove('keyboard-backlight-working', 'keyboard-backlight-waiting', 'keyboard-backlight-idle');
    keyboard.classList.add(s.class);

    // Update status badge
    statusDisplay.innerHTML = `<span class="px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${s.badgeColor}">${s.badge}</span>`;
    if (stateDesc) stateDesc.innerText = s.desc;

    // Update button states
    buttons.forEach(btn => {
      if (btn.dataset.mode === modeKey) {
        btn.classList.add('ring-2', 'ring-white', 'scale-105');
      } else {
        btn.classList.remove('ring-2', 'ring-white', 'scale-105');
      }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      applyState(btn.dataset.mode);
    });
  });

  // Default to Working mode initially
  applyState('working');
}

/* ----------------------------------------------------
   4. Interactive Pipeline Architecture Simulation
   ---------------------------------------------------- */
const PIPELINE_STEPS_Q = [
  { step: '1. Ingestion', desc: 'Telethon MTProto listener detects new Telegram post and downloads raw MP4.', time: '1.2s' },
  { step: '2. Audio Extraction', desc: 'FFmpeg converts raw video to standardized 16kHz Mono PCM WAV.', time: '0.4s' },
  { step: '3. ASR Transcription', desc: 'Whisper Large-v3 transcribes spoken Arabic audio into draft tokens.', time: '2.8s' },
  { step: '4. Canonical Matching', desc: 'Fuzzy n-gram Levenshtein matcher anchors against Tanzil Uthmani corpus.', time: '0.3s' },
  { step: '5. CTC Forced Alignment', desc: 'Wav2Vec2 / MMS Arabic aligns audio frames to exact word timestamps (ms).', time: '1.1s' },
  { step: '6. QA Gate Check', desc: 'Automated verification (Match: 0.94 ≥ 0.90, Align: 0.98 ≥ 0.95). Gate PASSES.', time: '0.05s' },
  { step: '7. Subtitle & Compositing', desc: 'HarfBuzz ASS karaoke subtitles overlaid onto 1080x1920 video with FFmpeg.', time: '3.5s' },
  { step: '8. Multi-Platform Syndication', desc: 'Ayrshare API publishes post to TikTok, Instagram Reels, YouTube Shorts & X.', time: '0.9s' }
];

function initArchitectureVisualizer() {
  const container = document.getElementById('pipeline-simulation-container');
  const runBtn = document.getElementById('run-pipeline-sim-btn');
  const statusOutput = document.getElementById('pipeline-sim-status');
  if (!container || !runBtn) return;

  function renderNodes(activeIdx = -1) {
    container.innerHTML = PIPELINE_STEPS_Q.map((item, idx) => `
      <div class="arch-node ${idx === activeIdx ? 'active-step border-cyan-400 bg-cyan-950/40 text-cyan-200' : (idx < activeIdx ? 'border-emerald-500/40 text-emerald-300' : 'text-slate-400')}">
        <div class="flex items-center justify-between text-xs mb-1">
          <span class="font-bold">${item.step}</span>
          <span class="font-mono text-[10px] text-slate-500">${item.time}</span>
        </div>
        <p class="text-[11px] leading-tight opacity-90">${item.desc}</p>
      </div>
    `).join('');
  }

  renderNodes();

  let isRunning = false;
  runBtn.addEventListener('click', async () => {
    if (isRunning) return;
    isRunning = true;
    runBtn.disabled = true;
    runBtn.innerText = 'Pipeline Running...';

    for (let i = 0; i < PIPELINE_STEPS_Q.length; i++) {
      renderNodes(i);
      if (statusOutput) {
        statusOutput.innerHTML = `<span class="text-cyan-400 font-mono text-xs">Executing ${PIPELINE_STEPS_Q[i].step}... [${PIPELINE_STEPS_Q[i].time}]</span>`;
      }
      await new Promise(r => setTimeout(r, 650));
    }

    renderNodes(PIPELINE_STEPS_Q.length);
    if (statusOutput) {
      statusOutput.innerHTML = `<span class="text-emerald-400 font-mono text-xs">Pipeline Execution Complete — Video Successfully Syndicated Across 4 Social Networks!</span>`;
    }
    runBtn.disabled = false;
    runBtn.innerText = 'Re-Run Simulation';
    isRunning = false;
  });
}

/* ----------------------------------------------------
   5. Interactive Terminal / CLI Playground
   ---------------------------------------------------- */
function initTerminalEmulator() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');
  const chips = document.querySelectorAll('.term-chip');
  if (!input || !output) return;

  const COMMANDS = {
    help: `Available commands:
  • <span class="text-indigo-400 font-bold">skills</span>      : Display technical skills across AI, Systems & MLOps
  • <span class="text-indigo-400 font-bold">projects</span>    : List production projects and system architectures
  • <span class="text-indigo-400 font-bold">q</span>           : Inspect Q (Speech-to-Video Pipeline) technical spec
  • <span class="text-indigo-400 font-bold">freelance</span>   : Inspect AI Freelance Intelligence Azure system
  • <span class="text-indigo-400 font-bold">rgb</span>         : Inspect ASUS TUF Kernel ACPI daemon specs
  • <span class="text-indigo-400 font-bold">contact</span>     : Get direct contact & communication links
  • <span class="text-indigo-400 font-bold">clear</span>       : Clear the terminal console screen`,

    skills: `<span class="text-indigo-300 font-bold">Technical Core Competencies:</span>
• <span class="text-white">Agentic AI & LLMs:</span> Multi-Agent Orchestration, Tool-Use Chains, Google Gemini Flash, Claude Desktop, Antigravity, Human-in-the-Loop design
• <span class="text-white">Speech & Audio AI:</span> Whisper Large-v3 ASR, Wav2Vec2 / MMS Arabic, CTC Forced Alignment, Levenshtein Fuzzy Alignment, HarfBuzz RTL
• <span class="text-white">Backend & Automation:</span> FastAPI, Python 3.10+, n8n (Self-Hosted), Celery, Docker Compose, PostgreSQL Advisory Locks (pg_advisory_xact_lock), Supabase
• <span class="text-white">Systems & Low-Level:</span> Direct Windows Kernel ACPI (DeviceIoControl), Win32 API, Ambient Hardware AI Feedback`,

    projects: `<span class="text-indigo-300 font-bold">Active & Production Projects:</span>
1. <span class="text-white font-semibold">Q Pipeline:</span> Speech-to-video repurposing & publishing pipeline (Whisper + CTC + ASS + Ayrshare)
2. <span class="text-white font-semibold">AI Freelance Intelligence:</span> 17-node n8n system on Azure VM with Gemini Flash proposals
3. <span class="text-white font-semibold">ASUS TUF AI RGB Sync:</span> Kernel ACPI hardware ambient indicator daemon for AI agents
4. <span class="text-white font-semibold">Flyrank Widget Platform:</span> Multi-tenant FastAPI platform with geo-enrichment fallback
5. <span class="text-white font-semibold">Breast Cancer ML:</span> Reproducible survival prognosis pipeline on SEER clinical dataset
Type <span class="text-indigo-400 font-bold">'q'</span> or <span class="text-indigo-400 font-bold">'rgb'</span> for specific project details.`,

    q: `<span class="text-indigo-300 font-bold">Q Quran Video Repurposing Pipeline:</span>
• Repository: https://github.com/OmarAbdelwahaab/Q
• Core Goal: Automated prayer recording transformation into vertical 9:16 short-form video
• QA Gate: Mandatory correctness check (Confidence ≥ 0.90, Alignment ≥ 0.95)
• Stack: Whisper Large-v3, Tanzil Uthmani Corpus, MMS Arabic, FFmpeg, Ayrshare, n8n, Postgres`,

    freelance: `<span class="text-indigo-300 font-bold">AI Freelance Opportunity Intelligence:</span>
• Repository: https://github.com/OmarAbdelwahaab/AI-powered-freelance-opportunity-intelligence-system
• Deployment: Live on Azure Linux Virtual Machine
• Pipeline: 17-node n8n workflow polling every 2 minutes
• Intelligence: Google Gemini Flash personalized proposals with Telegram Approve/Skip callbacks`,

    rgb: `<span class="text-indigo-300 font-bold">ASUS TUF AI Keyboard RGB Sync Daemon:</span>
• Repository: https://github.com/OmarAbdelwahaab/asus-tuf-ai-rgb-sync
• Low-Level API: Windows Kernel DeviceIoControl(\\\\.\\ATKACPI, 0x00100056)
• Agent Monitors: Antigravity transcript parser & Claude Desktop CPU/LevelDB delta trackers
• Memory footprint: ~15MB, <0.1% CPU consumption`,

    contact: `<span class="text-indigo-300 font-bold">Get In Touch:</span>
• GitHub: <a href="https://github.com/OmarAbdelwahaab" target="_blank" class="text-indigo-400 underline">https://github.com/OmarAbdelwahaab</a>
• Focus: AI Engineering, Agentic Workflows, Audio/Speech AI & Intelligent Automation Systems
• Ready for immediate collaborations & technical roles.`
  };

  function executeCommand(cmdStr) {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    if (raw === 'clear') {
      output.innerHTML = '';
      return;
    }

    const res = COMMANDS[raw] || `<span class="text-red-400">Command not recognized: "${raw}". Type <span class="text-indigo-400 font-bold">'help'</span> for available commands.</span>`;

    const entry = document.createElement('div');
    entry.className = 'mb-3';
    entry.innerHTML = `
      <div class="flex items-center gap-2 text-slate-400 text-xs font-mono">
        <span class="text-emerald-400 font-bold">omar@ai-workstation:~$</span>
        <span class="text-white">${cmdStr}</span>
      </div>
      <div class="mt-1 text-xs text-slate-300 leading-relaxed font-mono pl-4 border-l border-indigo-500/30">
        ${res}
      </div>
    `;
    output.appendChild(entry);
    output.scrollTop = output.scrollHeight;
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.value);
      input.value = '';
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      if (cmd) executeCommand(cmd);
    });
  });
}

/* ----------------------------------------------------
   6. Live GitHub Stats Fetcher (with graceful fallback)
   ---------------------------------------------------- */
async function initLiveGithubStats() {
  const reposCountEl = document.getElementById('github-repos-count');
  const profileNameEl = document.getElementById('github-profile-name');

  try {
    const res = await fetch('https://api.github.com/users/OmarAbdelwahaab');
    if (res.ok) {
      const data = await res.json();
      if (reposCountEl && data.public_repos) {
        reposCountEl.innerText = `${data.public_repos}+`;
      }
      if (profileNameEl && data.name) {
        profileNameEl.innerText = data.name;
      }
    }
  } catch (err) {
    console.log('Using static stats fallback for GitHub API:', err);
  }
}

/* ----------------------------------------------------
   7. Smooth Scrolling & Copy to Clipboard
   ---------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-trigger');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.dataset.copy;
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span class="text-emerald-400 font-bold text-xs">Copied! ✓</span>`;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      });
    });
  });
}
