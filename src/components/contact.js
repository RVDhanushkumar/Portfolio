import React, { useState } from 'react';
import '../Styling/Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-description">Feel free to contact me for any inquiries or collaborations.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      {isSubmitted && <p className="thank-you-message">Thank you for reaching out!</p>}
    </section>
  );
};

export default Contact;
