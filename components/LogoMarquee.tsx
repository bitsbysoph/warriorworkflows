import ClientLogo from "@/components/ClientLogo";
import type { Logo } from "@/lib/content";

// Ensure a single "copy" of the track is wide enough that the loop never
// shows a visible gap, even on ultra-wide viewports.
const MIN_COPY_ITEMS = 16;

export default function LogoMarquee({
  logos,
  direction = "left",
  durationSeconds = 30,
}: {
  logos: Logo[];
  direction?: "left" | "right";
  durationSeconds?: number;
}) {
  const repeats = Math.max(1, Math.ceil(MIN_COPY_ITEMS / logos.length));
  const copy = Array.from({ length: repeats }, () => logos).flat();
  const track = [...copy, ...copy];

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max items-center gap-x-10 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {track.map((logo, i) => (
          <ClientLogo key={`${logo.name}-${i}`} {...logo} />
        ))}
      </div>
    </div>
  );
}
