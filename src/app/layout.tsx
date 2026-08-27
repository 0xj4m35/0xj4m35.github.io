import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

const themeScript = `
(() => {
  const key = "theme-mode";
  const root = document.documentElement;
  const saved = window.localStorage.getItem(key);
  const mode = saved === "light" || saved === "dark" ? saved : "system";
  const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = mode === "system" ? (dark ? "dark" : "light") : mode;

  root.dataset.theme = theme;
  root.dataset.themeMode = mode;
  root.style.colorScheme = theme;
})();
`;

export const metadata: Metadata = {
  title: "Nguyễn Thái Bảo | Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer CV for Nguyễn Thái Bảo, focused on scalable web applications, DeFi products, Web3, infrastructure, and AI-assisted engineering.",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nguyễn Thái Bảo | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer with 7+ years of experience building scalable web applications, DeFi products, and modern engineering workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
