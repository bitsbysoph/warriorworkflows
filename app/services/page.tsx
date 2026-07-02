import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import { services, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | Warrior Workflows",
  description:
    "Core services from Warrior Workflows: AI workflow consulting, soft skills training, and project management & event operations.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-8 pt-20 text-center">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">Services</h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          Below are a few of the core services that I provide. This isn&apos;t an exhaustive
          list — please feel free to reach out for a detailed discussion.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} detailed />
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold text-foreground sm:text-3xl">
            What Clients Say
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name + testimonial.role} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to make things better?"
        buttonLabel="Get in Touch"
        href="/contact"
      />
    </>
  );
}
