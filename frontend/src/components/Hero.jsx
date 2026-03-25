import React from 'react';
import heroImg from '../assets/images/hero.jpg';
import { content } from '../../../shared/constants';
import WhatsAppButton from './WhatsAppButton';
const heroContent = content.hero  

const Hero = () => {
  const handleScrollDown = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Overlay */}
      <div className="hero-overlay" />
      {/* Grain texture */}
      <div className="hero-grain" />
      {/* Decorative line */}
      <div className="hero-deco-line" />

      {/* Content */}
      <div className="hero-content">
        <span className="hero-tag">{heroContent.eyebrow}</span>

        <h1 className="hero-title">
          {heroContent.title.line1}<br />
          <span className="hero-title--accent">{heroContent.title.line2}</span> {heroContent.title.line3}
        </h1>
        <p className="hero-subtitle">{heroContent.title.highlight}</p>

        <p className="hero-desc">
          {heroContent.subtitle}
        </p>

        <div className="hero-buttons">
          <WhatsAppButton title={heroContent.cta} className="btn-whatsapp"/>

          <button className="btn-secondary" onClick={handleScrollDown}>
            Daha Fazla Keşfet
          </button>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button className="scroll-indicator" onClick={handleScrollDown} aria-label="Aşağı kaydır">
        <span className="scroll-text">Kaydır</span>
        <div className="scroll-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </button>
    </section>
  );
};

export default Hero;