import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import LogoMarquee from "@/components/LogoMarquee";
import { site, previousClients, formerEmployers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Warrior Workflows",
  description:
    "Book a free 30-minute consultation with Warrior Workflows to talk through your team's processes, opportunities, and next steps.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-20 text-center">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Could something work better?
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          {site.founderBlurb}
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-xl font-semibold text-foreground">
            Free 30-Minute Consultation
          </h2>
          <p className="mt-2 text-sm text-muted">
            A friendly and honest chat about where you are and where you want to
            be. We&apos;ll cover:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {site.consultationTopics.map((topic) => (
              <li key={topic} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <CalendlyEmbed />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-center text-2xl font-semibold text-foreground">
          Previous Clients
        </h2>
        <div className="mt-6">
          <LogoMarquee logos={previousClients} direction="left" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-center text-2xl font-semibold text-foreground">
          Former Employers
        </h2>
        <div className="mt-6">
          <LogoMarquee logos={formerEmployers} direction="right" />
        </div>
      </section>
    </>
  );
}
