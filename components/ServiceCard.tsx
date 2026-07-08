import type { Service } from "@/lib/content";

const icons: Record<Service["icon"], React.ReactNode> = {
  workflow: (
    <path d="M4 6h9m-9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-9 12h9m-9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM8 6v12" />
  ),
  people: (
    <path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1m18 0v-1a4 4 0 0 0-3-3.87M14 3.13a4 4 0 0 1 0 7.75M9.5 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
  ),
  calendar: (
    <path d="M8 2v4m8-4v4M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
  ),
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
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
          {icons[service.icon]}
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
      <p className="text-sm italic text-accent-dark">{service.tagline}</p>
      <p className="text-sm leading-relaxed font-medium text-muted">
        {service.shortDescription}
      </p>
      <p className="text-sm leading-relaxed text-muted">{service.detail}</p>
    </div>
  );
}
