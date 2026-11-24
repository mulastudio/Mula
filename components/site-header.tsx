"use client";

import Image from "next/image";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

const navigation = [
  { label: "Katalog", href: "#katalog" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand-mark" href="#beranda" aria-label="MULA — kembali ke beranda" onClick={closeMenu}>
          <Image src={siteConfig.logotypeSrc} alt="MULA" width={66} height={38} priority />
        </a>

        <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Navigasi utama">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="mobile-contact-link" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Hubungi Kami
          </a>
        </nav>

        <a className="button button--dark site-header__contact" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
          <span className="contact-dot" aria-hidden="true">◔</span>
          Hubungi Kami
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
