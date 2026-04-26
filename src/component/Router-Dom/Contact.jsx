import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form className="form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;