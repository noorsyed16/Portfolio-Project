"use client";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contactSection">
      <div className="line"/>
      <h1 className="contactHeading">Contact Me</h1>

      <form 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        netlify-honeypot="bot-field"
        action="/"            // <-- submit back to this page
        className="contactForm"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows="5" required />
        <button type="submit" className="contactButton">Submit</button>
      </form>
    </section>
  );
}
