import Image from "next/image";

/**
 * A nominee or juror portrait.
 *
 * When no photograph exists yet it renders a MARKED placeholder: initials on a gold-brown
 * plate with a dotted edge, so nobody mistakes it for a finished page (John hard rule 6).
 * Drop a file into /public/img/nominees and set `photo` to swap it in.
 */
export default function Portrait({
  name, photo, brand, size = 64,
}: { name: string; photo?: string; brand?: boolean; size?: number }) {
  const initials = name
    .replace(/^(Chef|Dr\.?|Prof\.?|Mr|Mrs|Ms)\s+/i, "")
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (photo) {
    return (
      <Image
        src={`/img/nominees/${photo}`}
        alt={name}
        width={size * 2}
        height={size * 2}
        className={`shrink-0 object-cover ${brand ? "rounded-md bg-white object-contain p-1" : "rounded-full object-top"}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={`${name}. Photograph to follow.`}
      title="Photograph to follow"
      className={`portrait-placeholder flex shrink-0 items-center justify-center ${brand ? "rounded-md" : "rounded-full"}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.3) }}
    >
      <span aria-hidden>{initials}</span>
    </span>
  );
}
