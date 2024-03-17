import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Let's connect</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:rishabh.ganesh@columbia.edu" className="p-text">rishabh.ganesh@columbia.edu</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (973) 979-7668" className="p-text">+1 (973) 979-7668</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch !
          </h3>
        </div>
      )}
      <div className="__app-social">
        <h3 className="__social-add">Add Me</h3>
        <a href= "https://www.linkedin.com/in/rishabh-ganesh-66ba0621b/"
         className="linkedin social"
        >
          <FaLinkedin size="1x"/>
        </a>
        <a href= "https://www.instagram.com/rishabh_ganesh_/"
         className="insta social"
        >
          <FaInstagram size="1x"/>
        </a>
        <a href= "https://www.facebook.com/rishabh.ganesh.5/"
         className="fb social"
        >
          <FaFacebook size="1x"/>
        </a>
      </div>
    </>
  );
};

export default AppWrap(Footer, 'contact');