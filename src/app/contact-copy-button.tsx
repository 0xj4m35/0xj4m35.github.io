"use client";

import { useEffect, useState } from "react";

type Props = {
  label: string;
  value: string;
};

export function ContactCopyButton({ label, value }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
  }

  useEffect(() => {
    if (!copied) {
      return;
    }

    const t = window.setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => {
      window.clearTimeout(t);
    };
  }, [copied]);

  return (
    <button
      type="button"
      className={copied ? "copy-btn is-copied" : "copy-btn"}
      aria-label={copied ? "Copied" : label}
      title={copied ? "Copied" : label}
      onClick={copy}
    >
      <i
        className={copied ? "ri-check-line" : "ri-file-copy-line"}
        aria-hidden="true"
      />
    </button>
  );
}
