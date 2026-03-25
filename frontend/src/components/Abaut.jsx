import React from 'react';
import aboutImg from '../assets/images/hero-abaut.jpg';
import { content } from '../../../shared/constants';
const abautContent = content.about
const values = content.about.values


const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        {/* ── Sol: Görsel blok ── */}
        <div className="about-visual">

          {/* Sol üst kart */}
          <div className="about-badge-top">
            <div className="about-badge-top-icon">
              <ShieldIcon />
            </div>
            <div className="about-badge-top-text">
              <strong>{abautContent.topLeft.title}</strong>
              <span>{abautContent.topLeft.subtitle}</span>
            </div>
          </div>

          {/* Ana görsel */}
          <div className="about-img-main">
            <img src={aboutImg} alt="Hakkımızda" loading="lazy" />
          </div>

          {/* Sağ alt sayaç kartı */}
          <div className="about-badge">
            <p className="about-badge-number">{abautContent.botRight.title}</p>
            <p className="about-badge-label">{abautContent.botRight.subtitle}</p>
          </div>

        </div>

        {/* ── Sağ: İçerik ── */}
        <div className="about-content">
          <span className="about-tag">{abautContent.eyebrow}</span>

          <h2 className="about-title">
            {abautContent.title.line1} <em>{abautContent.title.line2}</em><br />
            {abautContent.title.line3}
          </h2>

          <p className="about-body">
            {abautContent.subtitle.line1}
          </p>
          <p className="about-body">
            {abautContent.subtitle.line2}
          </p>

          {/* Değerler listesi */}
          <ul className="about-values">
            {values.map((val, i) => (
              <li key={i} className="about-value-item">
                <span className="about-value-dot" />
                <p className="about-value-text">{val}</p>
              </li>
            ))}
          </ul>

          {/* İmza */}
          <div className="about-signature">
            <div className="about-avatar">{abautContent.signature.avater}</div>
            <div>
              <p className="about-sig-name">{abautContent.signature.name}</p>
              <p className="about-sig-title">{abautContent.signature.title}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;