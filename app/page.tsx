import { Btn } from "@/components/ui";
import Form from "@/components/Form";
import Countdown from "@/components/Countdown";
import Door from "@/components/Door";
import Ribbon from "@/components/Ribbon";
import Ankara from "@/components/Ankara";
import TypedDate from "@/components/TypedDate";
import { AFIA } from "@/lib/event";

/**
 * The homepage is a doorway, not the site (Kevin, 29 Sep 2026), and from
 * 19 November it is only that: the poster line, then one wall of doors.
 *
 * Everything that used to sit here still exists on the page that owns it, which
 * is what gives the doors somewhere to lead. The wall's skeleton is rebuilt from
 * height/awwwards-kluster-collectif, whose homepage is one screen of cards, each
 * a single word over one real photograph.
 *
 * Every photograph below was opened before it was chosen. Three others in this
 * folder were refused: AFIA-Partners.png carries "Empower. Elevate. Collaborate."
 * printed inside it, and both nomination posters read "NOMINATIONS NOW OPEN",
 * which contradicts the site (R-0221).
 */
const DOORS = [
  {
    title: "The nominees",
    line: "Every name on this year's slate, award by award, from across the continent and the diaspora.",
    href: "/nominees",
    photo: "/img/nominee-wall.webp",
    alt: "A wall of this year's AFIA nominees",
    wide: true,
    priority: true,
  },
  {
    title: "The awards",
    line: "What each one honours, and the tracks they sit in.",
    href: "/award-categories",
    photo: "/img/AFIA.png",
    alt: "An AFIA trophy being handed to a winner on stage",
  },
  {
    title: "How winners are chosen",
    line: "The jury, what they score, and the rules that keep it independent.",
    href: "/governance",
    photo: "/img/About-AFIA-2026.png",
    alt: "A speaker at the AFIA lectern",
  },
  {
    title: "The ceremony",
    line: `${AFIA.dateLong}, online and free to watch.`,
    href: "/2026-awards",
    photo: "/img/About-AFIA.png",
    alt: "Guests arriving on the AFIA red carpet",
  },
  {
    title: "Last year's class",
    line: "The honourees of the inaugural edition, kept as a permanent record.",
    href: "/winners/2025-winners",
    photo: "/img/Chef-Hilda-Baci.jpg",
    alt: "Chef Hilda Baci, an AFIA 2025 winner",
  },
];

export default function Home() {
  return (
    <>
      {/* ── The poster line.
             Type as a window onto the drifting mosaic of every nominee, from
             height/video-paragon; the small connector lines above and below from
             height/awwwards-champions-for-good. Kevin set the words himself on
             19 November and kept the mosaic on "African food". ─────────────── */}
      <section className="dark hero relative flex min-h-[90svh] flex-col justify-center overflow-hidden pt-[104px] pb-12">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="hero__glow" aria-hidden />

        <div className="container relative z-[2]">
          <h1 className="wall-type">
            <span className="wall-type__small">Celebrating the</span>
            <span className="wall-type__big wall-type__big--wide">African food</span>
            <span className="wall-type__small wall-type__small--wide">Influencers this year</span>
          </h1>

          {/* one ruled row across the full width, so the first screen has no dead
              half the way the previous hero did (three-pass rule 7) */}
          <div className="hero-rule">
            <Ribbon>Nominees</Ribbon>
            <p className="display text-[15px] font-medium text-white md:text-[19px]">
              <TypedDate text={`${AFIA.dateLong} · ${AFIA.time}`} />
            </p>
            <span className="hero-rule__line" aria-hidden />
            <Countdown to={AFIA.startISO} passed="The winners are in." align="start" />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
            <Btn href="/nominees">Meet the nominees</Btn>
            <Btn href="/2026-awards" variant="outline">Watch it live</Btn>
            <p className="display text-[13px] tracking-[0.12em] text-white/60">
              Free on YouTube · no sign-in
            </p>
          </div>
        </div>

        <div className="wall-bleed" aria-hidden />
      </section>

      {/* ── The wall of doors ──────────────────────────────────────────────── */}
      <section className="dark section relative overflow-hidden">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <h2 className="sr-only">Where to go next</h2>
          <div className="door-wall">
            {DOORS.map((d) => <Door key={d.title} {...d} />)}
          </div>
        </div>
      </section>

      {/* ── One line, the only thing on this page that is not a door ───────── */}
      <section className="dark relative overflow-hidden pb-20 pt-4">
        <Ankara side="left" />
        <Ankara side="right" />
        <div className="container relative z-[2]">
          <div className="signup-line">
            <h2 className="signup-line__head">
              Get the ceremony link and the winners
            </h2>
            <div className="signup-line__field">
              <Form name="Stay connected (home)" submit="Keep me updated" thanks="You are on the list." row>
                <label className="sr-only" htmlFor="home-email">Email</label>
                <input id="home-email" className="input h-[52px]" name="email" type="email" placeholder="Your email" required />
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
