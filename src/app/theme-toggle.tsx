"use client";

import { useEffect, useState } from "react";

enum ThemeMode {
  Dark = "dark",
  Light = "light",
  System = "system",
}

const key = "theme-mode";

function getMode() {
  const v = window.localStorage.getItem(key);

  if (v === ThemeMode.Light || v === ThemeMode.Dark) {
    return v;
  }

  return ThemeMode.System;
}

function getTheme(m: ThemeMode) {
  const q = window.matchMedia("(prefers-color-scheme: dark)");

  if (m === ThemeMode.System) {
    return q.matches ? ThemeMode.Dark : ThemeMode.Light;
  }

  return m;
}

function setDocTheme(m: ThemeMode) {
  const t = getTheme(m);

  document.documentElement.dataset.theme = t;
  document.documentElement.dataset.themeMode = m;
  document.documentElement.style.colorScheme = t;

  return t;
}

export function ThemeToggle() {
  const [s, setS] = useState({
    m: ThemeMode.System,
    t: ThemeMode.Light,
  });

  useEffect(() => {
    const q = window.matchMedia("(prefers-color-scheme: dark)");
    const t = window.setTimeout(() => {
      const next = getMode();
      const theme = setDocTheme(next);

      setS({
        m: next,
        t: theme,
      });
    }, 0);

    function sync() {
      if (getMode() !== ThemeMode.System) {
        return;
      }

      const theme = setDocTheme(ThemeMode.System);

      setS({
        m: ThemeMode.System,
        t: theme,
      });
    }

    q.addEventListener("change", sync);

    return () => {
      window.clearTimeout(t);
      q.removeEventListener("change", sync);
    };
  }, []);

  function toggle() {
    const next = s.t === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark;
    const t = setDocTheme(next);

    window.localStorage.setItem(key, next);
    setS({
      m: next,
      t,
    });
  }

  const dark = s.t === ThemeMode.Dark;
  const label = dark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      aria-pressed={s.m !== ThemeMode.System}
      title={label}
      onClick={toggle}
    >
      <i className={dark ? "ri-moon-line" : "ri-sun-line"} aria-hidden="true" />
    </button>
  );
}
