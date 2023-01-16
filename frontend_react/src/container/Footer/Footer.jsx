import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";

import "./Footer.scss";
function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Let's chat over coffee</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:miketesfay23@gmail.com" className="p-text">
            miketesfay23@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+1 (720) 803-9608" className="p-text">
            +1 (720) 803-9608
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              name="name"
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="app__flex">
            <input
              name="email"
              className="p-text"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <textarea
              name="message"
              value={message}
              className="p-text"
              placeholder="Your Message"
              onChange={handleInputChange}
            />
          </div>
          <button type="button " className="p-text" onClick={handleSubmit}>
            {loading ? "Sending.." : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
