import Image from "next/image";

/**
 * How every nominee and juror is shown, taken from AFN's own category posts: a white card,
 * slightly rotated, a strip of tape across the top.
 *
 * Portraits fill the card. Logos are letterboxed on white and never cropped, because a
 * cropped logo is a broken logo. Where no photograph has arrived the card shows the marked
 * placeholder instead, so the page is never pretending.
 */
export default function TapedCard({
  name, photo, brand, caption, i = 0, priority = false, dir = "nominees",
}: { name: string; photo?: string; brand?: boolean; caption?: string; i?: number; priority?: boolean;
     /** which folder under /img the photograph lives in */ dir?: "nominees" | "jury" }) {
  const tilt = i % 2 === 0 ? "-1.4deg" : "1.1deg";
  const initials = name
    .replace(/^(Chef|Dr\.?|Prof\.?)\s+/i, "")
    .split(/[\s-]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <figure className="taped-card" style={{ ["--tilt" as string]: tilt }}>
      <span className="taped-card__tape" aria-hidden />
      <div className="taped-card__well">
        {photo ? (
          <Image
            src={`/img/${dir}/${photo}`}
            alt={name}
            width={480}
            height={480}
            // a 4-nominee category renders two-up, so a card can be ~470px, not 300.
            // the old sizes made Next serve a 320w file into a 470px box (0.67x).
            sizes="(max-width: 640px) 46vw, (max-width: 1024px) 40vw, 360px"
            priority={priority}
            className={brand ? "taped-card__logo" : "taped-card__face"}
          />
        ) : (
          <span
            role="img"
            aria-label={`${name}. Photograph to follow.`}
            title="Photograph to follow"
            className="taped-card__placeholder"
          >
            <span aria-hidden>{initials}</span>
            <span className="taped-card__pending" aria-hidden>photo to follow</span>
          </span>
        )}
      </div>
      <figcaption className="taped-card__cap">
        <span className="taped-card__name">{name}</span>
        {caption && <span className="taped-card__meta">{caption}</span>}
      </figcaption>
    </figure>
  );
}
