import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import { services, homeTestimonials, site } from "@/lib/content";

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
        <p className="mt-6 text-base leading-relaxed text-muted">{site.heroIntro}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Book a Free Chat
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-dark"
          >
            See My Services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
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
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">About</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">{site.about}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
          What Clients Say
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {homeTestimonials.map((testimonial) => (
            <Testimonial key={testimonial.name + testimonial.role} {...testimonial} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Ready for work to feel a little lighter?"
        subheading="Let's talk about where you are and where you want to be."
        buttonLabel="Book Your Free Consultation"
        href="/contact"
      />
    </>
  );
}
