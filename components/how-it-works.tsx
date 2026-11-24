import { MousePointer, Send, Sliders } from "@/components/icons";

const steps = [
  { number: "01", title: "Pilih desain", description: "Temukan desain favorit dari katalog kami.", Icon: MousePointer },
  { number: "02", title: "Personalisasi undangan", description: "Sesuaikan detail undangan dengan cerita kalian.", Icon: Sliders },
  { number: "03", title: "Bagikan ke tamu", description: "Kirim undangan digital dengan mudah.", Icon: Send },
];

export function HowItWorks() {
  return (
    <section className="how-section" id="cara-kerja">
      <div className="container">
        <div className="how-panel">
          <div className="how-panel__intro">
            <p className="eyebrow">Simple, thoughtful, personal</p>
            <h2>Hanya dalam <span className="serif-italic">beberapa langkah.</span></h2>
          </div>
          <div className="how-panel__steps">
            {steps.map(({ number, title, description, Icon }) => (
              <article className="how-step" key={number}>
                <div className="how-step__topline">
                  <span className="how-step__number">{number}</span>
                  <Icon className="how-step__icon" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="how-panel__botanical" aria-hidden="true">
            <span>DECORATIVE BOTANICAL ASSET SLOT</span>
            <i />
            <b />
          </div>
        </div>
      </div>
    </section>
  );
}
