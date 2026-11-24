import { Heart, Sparkle, Zap } from "@/components/icons";

const benefits = [
  { label: "Desain Premium & Elegan", Icon: Sparkle },
  { label: "Kustomisasi Mudah", Icon: Zap },
  { label: "Dukungan Tim Kami", Icon: Heart },
];

export function BenefitsBar() {
  return (
    <section className="benefits-bar" id="tentang" aria-label="Keunggulan MULA">
      <div className="container benefits-bar__inner">
        {benefits.map(({ label, Icon }) => (
          <div className="benefit-item" key={label}>
            <Icon className="benefit-item__icon" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
