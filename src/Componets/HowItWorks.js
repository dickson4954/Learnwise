import React from 'react';
import './HowItWorks.css';
import step1Img from '../images/submit.jpg';  
import step2Img from '../images/customize.jpg';   
import step3Img from '../images/order.jpg'; 
import step4Img from '../images/writer.jpg';
import step5Img from '../images/request.jpeg'; 
import step6Img from '../images/success.jpg'; 

const steps = [
  { 
    img: step1Img, 
    title: "Step 1: Submit Your Request", 
    desc: "Begin by filling out our user-friendly order form. Provide detailed information about your writing requirements, including (Type of Service, Academic Level, Subject & Topic, Deadline, Additional Instructions)." 
  },
  { 
    img: step2Img, 
    title: "Step 2: Get a Customized Quote", 
    desc: "Once we receive your request, we will review the details and provide you with a customized quote. Our pricing is competitive and based on several factors: (Task Complexity, Academic Level, Deadline)." 
  },
  { 
    img: step3Img, 
    title: "Step 3: Confirm & Place Order", 
    desc: "After reviewing your quote, you can proceed to make a secure payment through our trusted payment gateway. We accept various payment methods, including PayPal, Remitly, Cash App, Western Union, and Zelle." 
  },
  { 
    img: step4Img, 
    title: "Step 4: Receive Your Custom Work", 
    desc: "Our writers will begin working on your project immediately. You will receive updates and drafts for review. Once the work is completed, it will go through rigorous editing and proofreading before final delivery." 
  },
  { 
    img: step5Img, 
    title: "Step 5: Request Revisions", 
    desc: "Your satisfaction is our top priority. If you need any revisions, simply let us know. We offer a complimentary revision period, during which our writers make adjustments to meet your expectations and academic requirements." 
  },
  { 
    img: step6Img, 
    title: "Step 6: Achieve Academic Success", 
    desc: "With your custom-written project in hand, you are well-equipped to achieve academic success. Our expert assistance helps you better understand your subject matter, improve your writing skills, and meet your academic goals." 
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>Steps to take while making an order with us.</p>
      <div className="how-it-works-container">
        {steps.map((step, index) => (
          <div className="how-it-works-card" key={index}>
            <img src={step.img} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
