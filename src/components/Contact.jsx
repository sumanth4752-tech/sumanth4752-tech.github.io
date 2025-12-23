import React, { useState, useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "sumanthp7574@gmail.com",
    link: "mailto:sumanthp7574@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 6361117574",
    link: "tel:+916361117574",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Bengaluru, India",
    link: null,
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sumanth-p28/",
    color: "#0077b5",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    url: "https://github.com/sumanth4752-tech",
    color: "#333",
  },
  {
  icon: FaCode,
  name: "Naukri",
  url: "https://www.naukri.com/mnjuser/profile",
  color: "#0073e6", 
   },
 ];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setTimeout(() => {
            alert("Thank you for your message! I'll get back to you soon.");
            setFormData({ name: "", from_email: "", message: "" });
            setIsSubmitting(false);
          }, 500);
        },
        (error) => {
          console.log(error);
          setTimeout(() => {
            alert("Message not sent", error.text);
            setIsSubmitting(false);
          }, 500);
        }
      );
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Connect!</h3>
              <p>
                I'm always interested in new opportunities, collaborations, and
                interesting projects. Whether you have a question or just want
                to say hi, feel free to reach out!
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <info.icon className="contact-icon" />
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ "--social-color": social.color }}
                  >
                    <social.icon />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} ref={form} className="contact-form">
              <h3>Send me a message</h3>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
