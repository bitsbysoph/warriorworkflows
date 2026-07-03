"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://linkedin.com/company/warriorworkflows"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-muted transition-colors hover:text-accent"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V21h-4V9Z" />
        </svg>
      </a>
      <a
        href="https://instagram.com/warriorworkflows"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-muted transition-colors hover:text-accent"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.14 1.39A5.9 5.9 0 0 0 .61 4.16c-.3.76-.5 1.63-.56 2.91C.01 8.35 0 8.76 0 12s.01 3.65.07 4.93c.06 1.28.26 2.15.56 2.91.3.79.71 1.46 1.38 2.14.67.67 1.35 1.08 2.14 1.38.76.3 1.63.5 2.91.56C8.35 23.99 8.76 24 12 24s3.65-.01 4.93-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.14-1.38 5.9 5.9 0 0 0 1.38-2.14c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.93s-.01-3.65-.07-4.93c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.14A5.9 5.9 0 0 0 19.84.63c-.76-.3-1.63-.5-2.91-.56C15.65.01 15.24 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
        </svg>
      </a>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      {/* Desktop */}
      <div className="mx-auto hidden max-w-5xl items-center justify-between px-6 py-4 md:flex">
        <Link href="/" className="shrink-0">
          <Image
            src="/warrior-logo.png"
            alt="Warrior Workflows"
            width={252}
            height={39}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SocialLinks />
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between px-6 py-3 md:hidden">
        <div className="h-9 w-9" aria-hidden="true" />

        <Link href="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/warrior-logo.png"
            alt="Warrior Workflows"
            width={252}
            height={39}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center text-foreground"
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div className="absolute inset-x-0 top-full border-t border-border bg-surface px-6 py-4 shadow-md md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialLinks className="mt-4 border-t border-border pt-4" />
        </div>
      ) : null}
    </header>
  );
}
