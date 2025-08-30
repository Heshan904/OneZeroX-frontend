
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import NaviBar from '../component/NaviBar'
import Footer from '../component/Footer'

import './contact.css'


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "heshanOneZeroX", 
        "template_zq9khse", 
        form.current, 
        "YbG7Jnygkaq2lLknd"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Try again later.");
        }
      );
  };
  return (
    <>
    <NaviBar/>
    <div className="cmain">

    <div className="mbox">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit" className="sbutton">Send</button>
      </form>
    </div>
    </div>

    <Footer/>
    </>
  )
}

export default Contact