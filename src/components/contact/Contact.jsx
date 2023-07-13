import React from "react";
import "./contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.praventDefault();

    emailjs.sendForm(
      "service_ek1yzfh",
      "template_ajf7eyq",
      form.current,
      "ouygEjLnbklGCMcBv"
    );
  };

  return (
    <section id="contact">
      <h3>Get In Touch</h3>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact-option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vaibhavikale482@gmail.com</h5>
            <a href="mailto:vaibhavikale482@gmail.com"> Send a Message</a>
          </article>

          <article className="contact-option">
            <FaInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>DM Me</h5>
            <a href="https://www.instagram.com/vairohi_20522/">
              {" "}
              Send a Message
            </a>
          </article>

          <article className="contact-option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Let's Chat</h5>
            <a href="https://api.whatsapp.com/send?phone=7709407655">
              {" "}
              Send a Message
            </a>
          </article>
        </div>
        {/* end of contact options */}
        {/* email js se connect krna baki hai abhi */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
