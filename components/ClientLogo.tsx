import Image from "next/image";
import type { Logo } from "@/lib/content";

export default function ClientLogo({ name, src }: Logo) {
  return (
    <div className="relative h-14 w-36 shrink-0">
      <Image
        src={src}
        alt={name}
        fill
        sizes="150px"
        className="object-contain"
      />
    </div>
  );
}
