import Link from "next/link";

export default function CTASection({
  heading,
  subheading,
  buttonLabel,
  href,
}: {
  heading: string;
  subheading?: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <section className="bg-accent/10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{heading}</h2>
        {subheading ? <p className="text-muted">{subheading}</p> : null}
        <Link
          href={href}
          className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
