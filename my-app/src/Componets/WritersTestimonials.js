import React from 'react';
import './WritersTestimonials.css';

import writer1 from '../images/lecture3.jpg';
import writer2 from '../images/lecturer2.jpg';
import writer3 from '../images/lecturer1.jpg';

const testimonials = [
  {
    name: 'Henry U.',
    image: writer1,
    feedback: 'Ideal for many writers looking for steady work. I have been on board for a long time, and I couldn’t be happier.',
  },
  {
    name: 'Jason D.',
    image: writer2,
    feedback: 'This is liberating. Nobody is forcing me to work 9-5, and I am free to write about whichever subject I please. I can’t argue with this value proposition.',
  },
  {
    name: 'Edith W.',
    image: writer3,
    feedback: 'Pretty much ideal conditions were made for me. I am happy that I’ve found a great place to get my creative juices flowing.',
  },
];

const WritersTestimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Writers Testimonials</h2>
      <p className="testimonials-subtitle">These testimonials capture the experiences of writers working with Learnwise and showcase the opportunities available for creativity, flexibility, and professional growth.</p>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <strong className="testimonial-name">{testimonial.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WritersTestimonials;
