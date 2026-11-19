import Link from "next/link";
import Image from "next/image";

/**
 * A door: one word, one real photograph, one line, leading to a real page.
 *
 * Rebuilt from height/awwwards-kluster-collectif (overview.jpg and
 * overview_mobile.jpg), whose homepage is one screen of cards, each a single
 * word over a strong photograph, one per arm of the brand. Kluster uses pale
 * grey plates on mid grey; here the plate is the poster field with a gold
 * hairline, so the wall stays inside AFIA's own design system rather than
 * importing the capture's palette.
 *
 * `wide` lets the first door span two columns, which is what keeps a wall of
 * five doors free of the grid hole the three-pass rule bans.
 */
export default function Door({
  title, line, href, photo, alt, wide = false, external = false, priority = false,
}: {
  title: string; line: string; href: string; photo: string; alt: string;
  wide?: boolean; external?: boolean; priority?: boolean;
}) {
  const inner = (
    <>
      <div className="door__head">
        <h3 className="door__title">{title}</h3>
        <p className="door__line">{line}</p>
      </div>
      <div className="door__well">
        <Image
          src={photo}
          alt={alt}
          width={wide ? 1200 : 760}
          height={wide ? 760 : 760}
          priority={priority}
          sizes={wide
            ? "(max-width: 767px) 92vw, (max-width: 1023px) 92vw, 61vw"
            : "(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 30vw"}
          className="door__img"
        />
      </div>
      <span className="door__go" aria-hidden>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M0 5h19M15 1l4 4-4 4" /></svg>
      </span>
    </>
  );
  const cls = `door${wide ? " door--wide" : ""}`;
  return external
    ? <a href={href} target="_blank" rel="noreferrer" className={cls}>{inner}</a>
    : <Link href={href} className={cls}>{inner}</Link>;
}
