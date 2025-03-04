import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: 'How does Learnwise ensure originality in their work?',
    answer: 'Maintaining originality is paramount to us. We have strict policies against plagiarism, and all our work is thoroughly checked using advanced plagiarism detection software. Additionally, our writers are adept at citing sources accurately and adhering to academic integrity standards, ensuring that your papers are 100% original and plagiarism-free.',
  },
  {
    question: 'Can I communicate with the writer assigned to my project?',
    answer: 'Yes, we provide a communication platform that allows you to stay in touch with your assigned writer, ensuring that your requirements are met effectively.',
  },
  {
    question: 'Is my personal information kept confidential?',
    answer: 'Absolutely. We prioritize client privacy and implement strict data protection policies to ensure that your personal and payment information remains secure.',
  },
  {
    question: 'How does Learnwise handle revisions?',
    answer: 'We offer free revisions for work that does not meet your initial instructions. Simply request a revision, and our writers will make the necessary changes promptly.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className={openIndex === index ? 'open' : ''}>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
