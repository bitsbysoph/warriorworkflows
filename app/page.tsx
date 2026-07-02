import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import LogoMarquee from "@/components/LogoMarquee";
import {
  services,
  testimonials,
  previousClients,
  formerEmployers,
  site,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
          {site.tagline} 💛
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Operational consulting for teams who want work to feel lighter.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          {site.heroIntro}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Book a Free Chat
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-dark"
          >
            See My Services
          </Link>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
          How I Can Help
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            About Me
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {site.about}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
          What Clients Say
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.name + testimonial.role}
              {...testimonial}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-surface">
        <div className="mx-auto max-w-3xl px-6 pb-8 pt-16 text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Could something work better?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {site.founderBlurb}
          </p>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="rounded-2xl border border-border bg-background p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Free 30-Minute Consultation
            </h3>
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

            <div className="mt-6 text-center">
              <a
                href="https://calendly.com/warriorworkflows/discovery-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Book Your Session Here
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-12">
          <h3 className="text-center text-2xl font-semibold text-foreground">
            Previous Clients
          </h3>
          <div className="mt-6">
            <LogoMarquee logos={previousClients} direction="left" />
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-16">
          <h3 className="text-center text-2xl font-semibold text-foreground">
            Former Employers
          </h3>
          <div className="mt-6">
            <LogoMarquee logos={formerEmployers} direction="right" />
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready for work to feel a little lighter?"
        subheading="Let's talk about where you are and where you want to be."
        buttonLabel="Book Your Free Consultation"
        href="#contact"
      />
    </>
  );
}
