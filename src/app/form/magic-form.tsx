"use client";

import md5 from "md5";
import { useCallback, useEffect, useRef, useState } from "react";

enum FormView {
  Fill = "fill",
  Result = "result",
}

type FieldProps = {
  label: string;
  value: string;
  placeholder: string;
  type?: "password" | "text";
  reveal?: boolean;
  readOnly?: boolean;
  onChange?: (v: string) => void;
};

function clean(v: string, d: string) {
  return v.replace(/[\s]+/gi, "").toLowerCase() || d;
}

function hash(raw: string, p: { salt: string; rounds: number }) {
  const rounds = p.rounds >= 1 ? Math.trunc(p.rounds) : 10;
  let v = md5(raw + p.salt);

  for (let i = 0; i <= rounds; i += 1) {
    v = md5(v);
  }

  return v;
}

function makeResult(p: { name: string; app: string; salt: string }) {
  const name = clean(p.name, "james.nguyen");
  const app = clean(p.app, "application");
  const salt = clean(p.salt, "james.ng");
  const marks = ".!@#$%^&*=";
  let v = hash(`${name}&${app}`, {
    salt,
    rounds: 10,
  });

  v = v.substring(v.length - 8);

  return `${String.fromCharCode(97 + (name.length % 26))}${String.fromCharCode(
    65 + (app.length % 26),
  )}${salt.length % 10}${marks[salt.length % 10]}${v}`;
}

function MagicField(p: FieldProps) {
  const [show, setShow] = useState(false);
  const reveal = p.reveal ?? p.type === "password";
  const type = show ? "text" : (p.type ?? "password");

  return (
    <label className="magic-field">
      <span>{p.label}</span>
      <span className="magic-input-wrap">
        <input
          type={type}
          value={p.value}
          placeholder={p.placeholder}
          readOnly={p.readOnly}
          onChange={(e) => {
            p.onChange?.(e.target.value);
          }}
        />
        {reveal && !p.readOnly ? (
          <button
            type="button"
            className="magic-ghost-btn"
            tabIndex={-1}
            aria-label={show ? "Hide value" : "Show value"}
            title={show ? "Hide value" : "Show value"}
            onClick={() => {
              setShow((v) => !v);
            }}
          >
            <i
              className={show ? "ri-eye-off-line" : "ri-eye-line"}
              aria-hidden="true"
            />
          </button>
        ) : null}
      </span>
    </label>
  );
}

export function MagicForm() {
  const [name, setName] = useState("");
  const [app, setApp] = useState("");
  const [salt, setSalt] = useState("");
  const [result, setResult] = useState("");
  const [view, setView] = useState(FormView.Fill);
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  const run = useCallback(() => {
    setResult(
      makeResult({
        name,
        app,
        salt,
      }),
    );
    setCopied(false);
    setView(FormView.Result);
  }, [name, app, salt]);

  const reset = useCallback(() => {
    setView(FormView.Fill);
    setResult("");
    setApp("");
    setName("");
    setSalt("");
    setCopied(false);
  }, []);

  async function copy() {
    await navigator.clipboard.writeText(result);
    setCopied(true);

    if (timer.current) {
      window.clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      setCopied(false);
      timer.current = null;
    }, 700);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (view === FormView.Fill && e.key === "Enter") {
        run();
      }

      if (view === FormView.Result && e.key === "Escape") {
        reset();
      }
    }

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [view, run, reset]);

  return (
    <section className="magic-shell" aria-labelledby="magic-title">
      <div className="magic-card">
        <div>
          <p className="eyebrow">Private Tool</p>
          <h1 id="magic-title" className="magic-title">
            Magic Form
          </h1>
        </div>

        {view === FormView.Fill ? (
          <div className="magic-stack">
            <MagicField
              label="Identity"
              type="password"
              value={name}
              onChange={setName}
              placeholder="James Nguyen"
            />
            <MagicField
              label="Target"
              type="text"
              reveal={false}
              value={app}
              onChange={setApp}
              placeholder="Facebook"
            />
            <MagicField
              label="Salt"
              type="password"
              value={salt}
              onChange={setSalt}
              placeholder="s4lty sTr!n9"
            />
            <button type="button" className="btn primary" onClick={run}>
              <i className="ri-sparkling-line" aria-hidden="true" />
              Attack
            </button>
          </div>
        ) : (
          <div className="magic-stack">
            <MagicField
              label="Result"
              type={copied ? "text" : "password"}
              reveal={false}
              value={result}
              placeholder="Nothing"
              readOnly
            />
            <div className="magic-actions">
              <button type="button" className="btn primary" onClick={copy}>
                <i
                  className={copied ? "ri-check-line" : "ri-file-copy-line"}
                  aria-hidden="true"
                />
                {copied ? "Copied" : "Copy"}
              </button>
              <button type="button" className="btn" onClick={reset}>
                <i className="ri-arrow-left-line" aria-hidden="true" />
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
