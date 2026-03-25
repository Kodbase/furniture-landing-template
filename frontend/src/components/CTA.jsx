import React from 'react';
import { content } from '../../../shared/constants';
const ctaContent = content.cta
const stats = content.cta.stats
import WhatsAppButton from './WhatsAppButton';

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);



const CTA = ({ phoneNumber = '905XXXXXXXXX' }) => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg" />
      <div className="cta-grid-lines" />

      <div className="cta-inner">

        {/* Sol: metin + istatistikler */}
        <div className="cta-left">
          <span className="cta-eyebrow">{ctaContent.eyebrow}</span>

          <h2 className="cta-title">
            {ctaContent.title.line1}<br />
            {ctaContent.title.line2} <em>{ctaContent.title.line3}</em>
          </h2>

          <p className="cta-desc">
            {ctaContent.subtitle}
          </p>

          <div className="cta-stats">
            {stats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="cta-stat">
                  <p className="cta-stat-number">{stat.number}</p>
                  <p className="cta-stat-label">{stat.label}</p>
                </div>
                {index < stats.length - 1 && <div className="cta-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Sağ: butonlar */}
        <div className="cta-right">
          <WhatsAppButton title={ctaContent.button} className="cta-btn-primary"/>

          <a href="#contact" className="cta-btn-secondary">
            <MailIcon />
            {ctaContent.form}
          </a>
        </div>

      </div>
    </section>
  );
};

export default CTA;