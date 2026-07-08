import Image from "next/image";
import type { Testimonial as TestimonialType } from "@/lib/content";

export default function Testimonial({ quote, name, role, image }: TestimonialType) {
  return (
    <figure className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
      <blockquote className="text-sm leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 text-sm">
        {image ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
        ) : null}
        <span>
          <span className="font-semibold text-foreground">{name}</span>
          <span className="text-muted"> — {role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
