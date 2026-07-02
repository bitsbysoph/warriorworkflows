import type { Testimonial as TestimonialType } from "@/lib/content";

export default function Testimonial({ quote, name, role }: TestimonialType) {
  return (
    <figure className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
      <blockquote className="text-sm leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="text-sm">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="text-muted"> — {role}</span>
      </figcaption>
    </figure>
  );
}
