import { ArrowUpRight } from "@/components/icons";

function InvitationScreen({
  className,
  couple,
  date,
  styleName,
}: {
  className: string;
  couple: string;
  date: string;
  styleName: string;
}) {
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-mockup__notch" />
      <div className={`phone-mockup__screen ${styleName}`}>
        <span className="phone-mockup__asset-label">INVITATION ARTWORK SLOT</span>
        <div className="phone-mockup__ornament" aria-hidden="true">✳</div>
        <p className="phone-mockup__eyebrow">The Wedding of</p>
        <p className="phone-mockup__names">{couple}</p>
        <span className="phone-mockup__rule" />
        <p className="phone-mockup__date">{date}</p>
        <div className="phone-mockup__botanical" aria-hidden="true">✣</div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero" id="beranda">
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__arc" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">A little more personal, a little more you</p>
          <h1>
            Undangan digital
            <br />yang terasa lebih
            <br /><span className="serif-italic">personal.</span>
          </h1>
          <p className="hero__description">
            Pilih desain yang paling mewakili cerita kalian,
            <br className="desktop-break" /> dan wujudkan undangan impian bersama MULA.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href="#katalog">
              Jelajahi Template <ArrowUpRight />
            </a>
            <a className="button button--outline" href="#cara-kerja">Lihat Cara Kerja</a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Placeholder mockup desain undangan digital MULA">
          <div className="hero__visual-glow" aria-hidden="true" />
          <div className="hero__flower-slot" aria-hidden="true">
            <span>BOTANICAL ARTWORK SLOT</span>
            <i />
            <b />
          </div>
          <InvitationScreen className="phone-mockup--back-left" couple="Kevin & Rachel" date="21 . 09 . 2025" styleName="phone-screen--oat" />
          <InvitationScreen className="phone-mockup--front" couple="Daniel & Jessica" date="12 . 10 . 2025" styleName="phone-screen--cream" />
          <InvitationScreen className="phone-mockup--back-right" couple="William & Olivia" date="14 . 11 . 2025" styleName="phone-screen--mocha" />
          <p className="hero__asset-note">Ganti mockup ini dengan artwork undangan pilihan MULA.</p>
        </div>
      </div>
    </section>
  );
}
