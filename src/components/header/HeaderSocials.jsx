import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import "./header.css";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/vaibhavi-kale-715395247/"
        target="_blank"
      >
        <ImLinkedin />
      </a>
      <a href="https://github.com/Vaibhavi-Santosh-Kale" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/vairohi_20522/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
