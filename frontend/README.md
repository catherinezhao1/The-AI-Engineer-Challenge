# Matrix Mental Coach Terminal

A **Matrix-style terminal frontend** for the AI Engineer Challenge. Chat with your supportive mental coach through a glowing green CRT interface — complete with digital rain, scanlines, and a boot sequence.

Built with **Next.js** (App Router) and wired to the FastAPI backend at `/api/chat`.

## Prerequisites

- **Node.js 18+** and **npm**
- **Python 3.12** via [`uv`](https://github.com/astral-sh/uv) (for the backend)
- An **API key** set as `API_KEY` in a `.env` file at the project root (Azure Claude subscription key)

## Run locally

You need **two terminals** — one for the backend, one for the frontend.

### 1. Start the backend (from project root)

Create a `.env` file in the project root:

```bash
API_KEY=your-azure-subscription-key
```

Then start the backend from the project root:

```bash
uv sync
uv run uvicorn api.index:app --reload
```

The API runs at `http://localhost:8000`.

### 2. Start the frontend (from `frontend/`)

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

The Next.js dev server proxies `/api/*` requests to `localhost:8000`, so the chat works without extra configuration.

## What you'll see

- Cascading **Matrix digital rain** in the background
- A **terminal window** with boot sequence, user/coach prompts, and status indicators
- **CRT scanlines** and subtle screen flicker for that retro hacker vibe
- Green-on-black text with strong contrast (no white-on-white issues)

## Deploy on Vercel

From the **project root**:

```bash
npm install -g vercel
vercel
```

Set `API_KEY` in your Vercel project environment variables. The root `vercel.json` routes `/api/*` to the Python backend and everything else to the Next.js frontend.

## API integration

The terminal sends `POST /api/chat` with:

```json
{ "message": "your message here" }
```

and displays the `reply` field from the response.
