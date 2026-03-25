import React from 'react';
import navLinks from '../data/footer';
import { content } from '../../../shared/constants';
const footerContent = content.footer
import { siteConfig } from '../../../shared/config';
const contact = siteConfig.contact
const social = siteConfig.social

const socials = [
  {
    id: 'instagram', label: 'Instagram', href: social.instagram,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>,
  },
  {
    id: 'facebook', label: 'Facebook', href: social.facebook,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    id: 'linkedin', label: 'LinkedIn', href: social.linkedin,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    id: 'whatsapp', label: 'WhatsApp', href: contact.whatssAppPhone,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
];

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">

      {/* ── Ana Grid ── */}
      <div className="footer-main">

        {/* Marka */}
        <div className="footer-brand">
          <a href="#hero" className="footer-brand-logo">
            {footerContent.companyName.slice(0, -2)}<em>{footerContent.companyName.slice(-2)}</em>
          </a>
          <p className="footer-brand-desc">
            {footerContent.brandDesc}
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.id} className="footer-social" href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Sayfalar */}
        <div>
          <p className="footer-col-title">Sayfalar</p>
          <ul className="footer-nav">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <p className="footer-col-title">İletişim</p>

          <div className="footer-contact-item">
            <div className="footer-contact-icon ci-wa">
              <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <p className="footer-contact-text">
              <a href={`https://wa.me/${contact.phone}`} target="_blank" rel="noopener noreferrer">
                {contact.phone.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')}
              </a>
            </p>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon ci-mail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <p className="footer-contact-text">
              <a target='_blank' href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>

          <div className="footer-contact-item">
            <div className="footer-contact-icon ci-loc">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <p className="footer-contact-text">{contact.address}</p>
          </div>
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="footer-divider" />

      {/* ── Alt bar ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {footerContent.year} <a href="#hero">{footerContent.companyName}</a>. Tüm hakları saklıdır.
        </p>

        <button className="footer-scroll-top" onClick={scrollToTop} title="Yukarı çık" aria-label="Sayfanın başına git">
          <ArrowUpIcon />
        </button>
      </div>

    </footer>
  );
};

export default Footer;