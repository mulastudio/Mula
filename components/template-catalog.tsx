"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CloseIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

type TemplateCategory = "Minimalis" | "Floral" | "Elegan" | "Tradisional" | "Game & Interaktif";
type Template = {
  id: string;
  name: string;
  category: TemplateCategory;
  couple: string;
  date: string;
  tone: "light" | "oat" | "dark" | "rose" | "sage" | "sand";
  description: string;
};

const categories = ["Semua", "Minimalis", "Floral", "Elegan", "Tradisional", "Game & Interaktif"] as const;
type FilterCategory = (typeof categories)[number];

const templates: Template[] = [
  {
    id: "botanique",
    name: "The Botanique",
    category: "Floral",
    couple: "Daniel & Jessica",
    date: "12 . 10 . 2025",
    tone: "light",
    description: "Sentuhan bunga yang lembut untuk kisah yang tumbuh dengan indah.",
  },
  {
    id: "sunday-vows",
    name: "Sunday Vows",
    category: "Minimalis",
    couple: "Kevin & Rachel",
    date: "21 . 09 . 2025",
    tone: "oat",
    description: "Tampilan sederhana yang mengutamakan cerita dan kehangatan.",
  },
  {
    id: "amora",
    name: "Amora",
    category: "Elegan",
    couple: "William & Olivia",
    date: "14 . 11 . 2025",
    tone: "dark",
    description: "Nuansa klasik dan dramatis untuk perayaan yang berkesan.",
  },
  {
    id: "adore",
    name: "Adore",
    category: "Tradisional",
    couple: "Arga & Naya",
    date: "18 . 01 . 2026",
    tone: "rose",
    description: "Elemen tradisi yang dikemas dengan sentuhan visual modern.",
  },
  {
    id: "little-world",
    name: "Little World",
    category: "Game & Interaktif",
    couple: "Raka & Alin",
    date: "07 . 02 . 2026",
    tone: "sage",
    description: "Undangan interaktif dengan pengalaman menjelajah cerita kalian.",
  },
  {
    id: "pure-promise",
    name: "Pure Promise",
    category: "Minimalis",
    couple: "Evan & Clara",
    date: "22 . 03 . 2026",
    tone: "sand",
    description: "Komposisi bersih dan tenang untuk momen yang tak terlupakan.",
  },
];

function TemplateArtwork({ template }: { template: Template }) {
  return (
    <div className={`template-art template-art--${template.tone}`}>
      <span className="template-art__asset-label">TEMPLATE IMAGE — {template.id.toUpperCase()}</span>
      <div className="template-art__cover">
        <span className="template-art__ornament" aria-hidden="true">✳</span>
        <p className="template-art__eyebrow">The Wedding of</p>
        <p className="template-art__couple">{template.couple}</p>
        <span className="template-art__divider" />
        <p className="template-art__date">{template.date}</p>
      </div>
      <span className="template-art__replace">Replace with artwork</span>
    </div>
  );
}

export function TemplateCatalog() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("Semua");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const visibleTemplates = useMemo(() => {
    if (activeCategory === "Semua") return templates.slice(0, 3);
    return templates.filter((template) => template.category === activeCategory);
  }, [activeCategory]);

  const contactText = selectedTemplate
    ? `Halo MULA, saya tertarik dengan template ${selectedTemplate.name}. Bisa minta informasi lebih lanjut?`
    : "Halo MULA, saya ingin bertanya tentang undangan digital.";
  const contactHref = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(contactText)}`;

  return (
    <section className="catalog section-space" id="katalog">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Find the one that feels like you</p>
          <h2>Temukan desain yang <span className="serif-italic">paling kalian suka</span></h2>
          <p className="section-heading__description">Setiap cerita punya caranya sendiri untuk dirayakan.</p>
        </div>

        <div className="catalog-filters" aria-label="Filter kategori template">
          {categories.map((category) => (
            <button
              className={`filter-chip${activeCategory === category ? " filter-chip--active" : ""}`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {visibleTemplates.length > 0 ? (
          <div className="template-grid" aria-live="polite">
            {visibleTemplates.map((template) => (
              <article className="template-card" key={template.id}>
                <TemplateArtwork template={template} />
                <div className="template-card__content">
                  <div>
                    <p className="template-card__category">{template.category}</p>
                    <h3>{template.name}</h3>
                  </div>
                  <button className="text-link" type="button" onClick={() => setSelectedTemplate(template)}>
                    Lihat Preview <ArrowUpRight />
                  </button>
                  <a
                    className="button button--dark button--small"
                    href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(`Halo MULA, saya tertarik memilih template ${template.name}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pilih Template
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="catalog-empty" role="status">
            Template kategori ini sedang disiapkan. Silakan cek kategori lainnya.
          </div>
        )}

        <p className="catalog-note">Nama dan visual template di atas merupakan contoh sementara yang bisa diganti dengan katalog final MULA.</p>
      </div>

      {selectedTemplate && (
        <div className="preview-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedTemplate(null);
        }}>
          <section className="preview-dialog" role="dialog" aria-modal="true" aria-labelledby="preview-title">
            <button className="preview-dialog__close" type="button" aria-label="Tutup preview" onClick={() => setSelectedTemplate(null)}>
              <CloseIcon />
            </button>
            <div className="preview-dialog__art">
              <TemplateArtwork template={selectedTemplate} />
            </div>
            <div className="preview-dialog__content">
              <p className="eyebrow">Template preview</p>
              <h2 id="preview-title">{selectedTemplate.name}</h2>
              <p className="preview-dialog__category">{selectedTemplate.category}</p>
              <p>{selectedTemplate.description}</p>
              <p className="preview-dialog__hint">Area ini nantinya dapat dihubungkan ke halaman preview undangan yang sebenarnya.</p>
              <a className="button button--dark" href={contactHref} target="_blank" rel="noreferrer">Tanyakan Template Ini <ArrowUpRight /></a>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
