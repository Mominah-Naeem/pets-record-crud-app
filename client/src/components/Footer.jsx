// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <div className="social-icons mb-2">
        <a href="https://www.linkedin.com/in/mominah-naeem/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Mominah-Naeem" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/it_s_marshmallow/" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>
      <p className="mb-0">
        Developed by <strong>Mominah Naeem</strong>. All rights reserved © {new Date().getFullYear()}.
      </p>
    </footer>
  );
};

export default Footer;
