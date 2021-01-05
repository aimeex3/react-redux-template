import React from 'react';
import smileySVG from '../../images/smiley.svg';

export const ContactPage = () => (
  <div className="contact-page">
    <h2 className="contact-header">Contact</h2>
    <div>Contact me here</div>
    <img className="contact-image" src={smileySVG} alt="" />
  </div>
);

export default ContactPage;
