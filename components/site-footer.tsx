import Image from "next/image";
import { InstagramIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { CopyrightYear } from "@/components/copyright-year";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="kontak">
      <div className="container">
        <div className="site-footer__top">
          <a className="brand-mark brand-mark--footer" href="#beranda" aria-label="MULA — kembali ke atas">
            <Image src={siteConfig.logogramSrc} alt="MULA" width={66} height={38} />
          </a>
          <nav className="footer-nav" aria-label="Navigasi footer">
            <a href="#katalog">Katalog</a>
            <a href="#cara-kerja">Cara Kerja</a>
            <a href="#tentang">Tentang</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-socials" aria-label="Media sosial">
            <a href={siteConfig.instagramUrl} aria-label="Instagram MULA"><InstagramIcon /></a>
            <a href={siteConfig.tiktokUrl} aria-label="TikTok MULA" className="footer-socials__text">♪</a>
            <a href={siteConfig.youtubeUrl} aria-label="YouTube MULA" className="footer-socials__text">▶</a>
          </div>
          <p className="site-footer__tagline serif-italic">{siteConfig.tagline}</p>
        </div>
        <div className="site-footer__bottom">
          <span>© <CopyrightYear /> MULA. All rights reserved.</span>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">Let&apos;s create something meaningful <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </footer>
  );
}
