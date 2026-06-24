"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { parseApiErrorDetail } from "@/lib/api";
import styles from "./TerminalChat.module.css";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

const BOOT_LINES = [
  "MATRIX MENTAL COACH v1.0 — SECURE UPLINK ESTABLISHED",
  "KERNEL: claude-sonnet-4-6 // MODE: supportive mental coach",
  "TYPE YOUR MESSAGE BELOW. PRESS ENTER TO TRANSMIT.",
  "────────────────────────────────────────────────────",
];

/**
 * Terminal-style chat UI that streams conversation to the FastAPI /api/chat endpoint.
 */
export default function TerminalChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bootComplete, setBootComplete] = useState(false);
  const [visibleBootLines, setVisibleBootLines] = useState(0);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Simulated boot sequence on first load.
  useEffect(() => {
    if (visibleBootLines >= BOOT_LINES.length) {
      const timer = setTimeout(() => setBootComplete(true), 400);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleBootLines((count) => count + 1);
    }, 280);

    return () => clearTimeout(timer);
  }, [visibleBootLines]);

  useEffect(() => {
    if (bootComplete) {
      inputRef.current?.focus();
    }
  }, [bootComplete]);

  // Auto-scroll as new messages arrive.
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [messages, isLoading, visibleBootLines, error]);

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = (await response.json()) as {
        reply?: string;
        detail?: string | Array<{ msg?: string }>;
      };

      if (!response.ok) {
        throw new Error(
          parseApiErrorDetail(data.detail, `Request failed (${response.status})`)
        );
      }

      const reply = data.reply;
      if (!reply) {
        throw new Error("No reply received from the uplink.");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unknown transmission error.";
      setError(message);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className={styles.terminal}>
      <header className={styles.header}>
        <div className={styles.windowControls} aria-hidden="true">
          <span className={styles.dotRed} />
          <span className={styles.dotAmber} />
          <span className={styles.dotGreen} />
        </div>
        <p className={styles.title}>
          <span className={styles.titleGlow}>MATRIX</span>
          <span className={styles.titleDivider}>//</span>
          MENTAL_COACH_TERMINAL
        </p>
        <p className={styles.status}>
          {isLoading ? (
            <span className={styles.statusBusy}>TRANSMITTING...</span>
          ) : (
            <span className={styles.statusReady}>UPLINK READY</span>
          )}
        </p>
      </header>

      <div
        ref={outputRef}
        className={styles.output}
        role="log"
        aria-live="polite"
        aria-label="Chat transcript"
      >
        {BOOT_LINES.slice(0, visibleBootLines).map((line, index) => (
          <p key={`boot-${index}`} className={styles.bootLine}>
            <span className={styles.prompt}>{">"}</span> {line}
          </p>
        ))}

        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.role === "user"
                ? styles.messageUser
                : styles.messageAssistant
            }
          >
            <span className={styles.prompt}>
              {message.role === "user" ? "YOU>" : "COACH>"}
            </span>
            <p className={styles.messageText}>{message.content}</p>
          </div>
        ))}

        {isLoading && (
          <p className={styles.loadingLine}>
            <span className={styles.prompt}>COACH&gt;</span>
            <span className={styles.loadingDots}>
              DECODING RESPONSE
              <span className={styles.dotAnim}>...</span>
            </span>
          </p>
        )}

        {error && (
          <p className={styles.errorLine} role="alert">
            <span className={styles.prompt}>ERR&gt;</span> {error}
          </p>
        )}
      </div>

      <form className={styles.inputRow} onSubmit={sendMessage}>
        <label htmlFor="terminal-input" className={styles.inputLabel}>
          INPUT
        </label>
        <span className={styles.prompt} aria-hidden="true">
          {">"}
        </span>
        <input
          id="terminal-input"
          ref={inputRef}
          type="text"
          className={styles.input}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={
            bootComplete ? "Enter transmission..." : "Initializing uplink..."
          }
          disabled={!bootComplete || isLoading}
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          className={styles.sendButton}
          disabled={!bootComplete || isLoading || !input.trim()}
        >
          TX
        </button>
      </form>
    </div>
  );
}
