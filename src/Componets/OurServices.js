import React from 'react';
import './OurServices.css';
import servicesImage from '../images/gradu.png'; // Replace with actual image path

const services = [
  { title: "Writing - Assistance.", description: "Our expert writers are here to guide you from brainstorming to final submission, ensuring quality and originality every step of the way." },
  { title: "Editing and Proofreading.", description: "We refine your drafts, correcting grammar, improving clarity, and ensuring adherence to academic standards." },
  { title: "Exam Preparations.", description: "Our tailored study plans, mock tests, and tutoring sessions help you master key concepts and improve time management." },
  { title: "Project Handling.", description: "Need support with academic projects? We assist with planning, research, and presentation, ensuring your work stands out." },
  { title: "Programming Assistance.", description: "Get help with coding challenges, algorithm development, and debugging across languages such as Python, Java, C++, and more." },
  { title: "Data Science Support.", description: "Master data analytics, visualization, and predictive modeling with expert guidance on tools like Python, R, and SQL." },
  { title: "Academic Writing Assistance.", description: "Receive expert guidance on research papers, essays, reports, and more. Ensure clarity, coherence, and proper formatting to achieve top grades." },
  { title: "Web Design & Development", description: "Get a stunning, responsive website tailored to your brand. We specialize in custom designs, seamless user experiences, and optimized performance to help you stand out online." }
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="our-services-container">
        <h2 className="title">Our Services</h2>
        <p className="subtitle">We understand the challenges students face in today’s academic landscape...</p>
        <div className="content">
          <div className="image-container">
            <img src="https://i.pinimg.com/originals/e1/47/e8/e147e8c60c8c8ab2c74ca3c43fff6f5c.gif" alt="Our Services" className="services-image" />
          </div>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;