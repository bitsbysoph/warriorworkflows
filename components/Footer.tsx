export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Warrior Workflows. All rights reserved.</p>
        <p>Making work life happier, not harder 💛</p>
      </div>
    </footer>
  );
}
