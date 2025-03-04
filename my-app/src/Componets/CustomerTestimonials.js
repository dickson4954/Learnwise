import React from 'react';
import './CustomerTestimonials.css';
import customer1 from '../images/student.jpg';
import customer2 from '../images/freak.png';
import customer3 from '../images/student.png.jpg';

const testimonials = [
  {
    name: 'Emily P.',
    image: customer1,
    feedback: 'I met my deadlines without compromising on quality. I highly recommend Learnwise to any student seeking reliable and professional academic assistance.',
  },
  {
    name: 'David T.',
    image: customer2,
    feedback: 'As a non-native English speaker, expressing myself eloquently in academic papers was a constant struggle. With Learnwise I now feel more confident in my academic endeavors.',
  },
  {
    name: 'Sophia L.',
    image: customer3,
    feedback: 'I struggled with structuring my literature review and was running out of time. Learnwise stepped in and delivered a comprehensive and well-organized review that impressed my professor.',
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <p className="testimonials-subtitle">These testimonials capture the diverse range of clients Tracy Scripts serves and highlight the tangible benefits they offer in terms of academic support and professional development.</p>
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

export default CustomerTestimonials;
