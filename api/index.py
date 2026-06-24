from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import requests
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS so the frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

CLAUDE_API_URL = os.getenv(
    "CLAUDE_API_URL",
    "https://lgts1tetamapi01.azure-api.net/claude/anthropic/v1/messages",
)
CLAUDE_MODEL = os.getenv("CLAUDE_MODEL", "claude-sonnet-4-6")
SYSTEM_PROMPT = "You are a supportive mental coach. Try to be brief and concrete when answering questions."


def get_api_key() -> str:
    """Return the Azure API subscription key from the environment."""
    api_key = os.getenv("API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="API_KEY not configured")
    return api_key


def extract_reply(data: dict) -> str:
    """Pull assistant text from an Anthropic-style messages response."""
    content = data.get("content", [])
    if not isinstance(content, list):
        raise HTTPException(
            status_code=500,
            detail="Unexpected response format from Claude API",
        )

    text_parts = [
        block.get("text", "")
        for block in content
        if isinstance(block, dict) and block.get("type") == "text"
    ]
    reply = "".join(text_parts).strip()
    if not reply:
        raise HTTPException(
            status_code=500,
            detail="No text reply received from Claude API",
        )
    return reply


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    return {"status": "ok"}


@app.post("/api/chat")
def chat(request: ChatRequest):
    api_key = get_api_key()

    try:
        response = requests.post(
            CLAUDE_API_URL,
            params={"subscription-key": api_key},
            json={
                "model": CLAUDE_MODEL,
                "max_tokens": 1024,
                "system": SYSTEM_PROMPT,
                "messages": [{"role": "user", "content": request.message}],
            },
            timeout=30,
        )
        response.raise_for_status()
        return {"reply": extract_reply(response.json())}
    except requests.HTTPError as exc:
        error_detail = str(exc)
        if exc.response is not None:
            try:
                error_detail = exc.response.json()
            except ValueError:
                error_detail = exc.response.text or error_detail
        raise HTTPException(
            status_code=500,
            detail=f"Error calling Claude API: {error_detail}",
        ) from exc
    except requests.RequestException as exc:
        raise HTTPException(
            status_code=500,
            detail=f"Error calling Claude API: {str(exc)}",
        ) from exc
