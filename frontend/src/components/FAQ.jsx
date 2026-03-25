import React, { useState, useRef, useEffect } from 'react';
import FAQData from '../data/FAQ';
import { content } from '../../../shared/constants';
const faqContent = content.faq
import WhatsAppButton from './WhatsAppButton';


const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);


const FAQItem = ({ item, isOpen, onToggle }) => {
  const answerRef = useRef(null);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-q-text">{item.question}</span>
        <span className="faq-icon">
          <PlusIcon />
        </span>
      </button>
      <div
        className="faq-answer-wrap"
        style={{ maxHeight: isOpen ? answerRef.current?.scrollHeight + 'px' : '0' }}
      >
        <p className="faq-answer" ref={answerRef}>
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(FAQData[0].id);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">

        {/* Header */}
        <div className="faq-header">
          <span className="faq-tag">{faqContent.eyebrow}</span>
          <h2 className="faq-title">
            {faqContent.title.line1} <em>{faqContent.title.line2}</em>
          </h2>
          <p className="faq-desc">
            {faqContent.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {FAQData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="faq-footer">
          <p className="faq-footer-text">Başka sorunuz mu var? Hemen yazın, yanıtlayalım.</p>
          <WhatsAppButton title={faqContent.cta} className="faq-footer-btn"/>
        </div>

      </div>
    </section>
  );
};

export default FAQ;