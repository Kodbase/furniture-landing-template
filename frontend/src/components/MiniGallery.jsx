import React, { useState, useRef } from 'react';
import { content } from '../../../shared/constants';
const galleryContent = content.gallery
import galleryItems from '../data/miniGallery';

const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
  </svg>
);


const MiniGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') setLightboxIndex((i) => Math.min(i + 1, galleryItems.length - 1));
    if (e.key === 'ArrowLeft') setLightboxIndex((i) => Math.max(i - 1, 0));
  };

  const scrollToSlide = (index) => {
    const slides = sliderRef.current?.querySelectorAll('.gallery-slide');
    if (slides?.[index]) {
      slides[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
    setActiveSlide(index);
  };

  const handleSliderScroll = () => {
    if (!sliderRef.current) return;
    const idx = Math.round(
      sliderRef.current.scrollLeft / sliderRef.current.offsetWidth * (galleryItems.length / 1.2)
    );
    setActiveSlide(Math.min(idx, galleryItems.length - 1));
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-inner">

        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-header-left">
            <span className="gallery-tag">{galleryContent.eyebrow}</span>
            <h2 className="gallery-title">
              {galleryContent.title.line1} <em>{galleryContent.title.line2}</em>
            </h2>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              className="gallery-item"
              key={item.id}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <p className="gallery-overlay-label">{item.category}</p>
                  <p className="gallery-overlay-title">{item.title}</p>
                </div>
              </div>
              <div className="gallery-expand">
                <ExpandIcon />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="gallery-slider-wrap">
          <div
            className="gallery-slider-track"
            ref={sliderRef}
            onScroll={handleSliderScroll}
          >
            {galleryItems.map((item, index) => (
              <div
                className="gallery-slide"
                key={item.id}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <p className="gallery-overlay-label">{item.category}</p>
                    <p className="gallery-overlay-title">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="gallery-dots">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`gallery-dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => scrollToSlide(index)}
                aria-label={`Slayt ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox open"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].title}
              className="lightbox-img"
            />
            <div className="lightbox-footer">
              <div>
                <p className="lightbox-label">{galleryItems[lightboxIndex].category}</p>
                <p className="lightbox-title">{galleryItems[lightboxIndex].title}</p>
              </div>
              <div className="lightbox-nav">
                <button
                  onClick={() => setLightboxIndex((i) => Math.max(i - 1, 0))}
                  disabled={lightboxIndex === 0}
                  aria-label="Önceki"
                >
                  ←
                </button>
                <span>{lightboxIndex + 1} / {galleryItems.length}</span>
                <button
                  onClick={() => setLightboxIndex((i) => Math.min(i + 1, galleryItems.length - 1))}
                  disabled={lightboxIndex === galleryItems.length - 1}
                  aria-label="Sonraki"
                >
                  →
                </button>
              </div>
            </div>
          </div>
          <button className="lightbox-close" onClick={closeLightbox}>Kapat</button>
        </div>
      )}
    </section>
  );
};

export default MiniGallery;