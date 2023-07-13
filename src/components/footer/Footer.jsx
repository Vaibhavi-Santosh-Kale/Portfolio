import React from "react";
import "./footer.css";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Vaibhavi || Dev
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        {/* <li><a href='#services'></a>Services</li> */}
        <li>
          <a href="#qualification">Qualification</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/vaibhavi-kale-715395247/"
          target="_blank"
        >
          <GrLinkedin />
        </a>
        <a href="https://github.com/Vaibhavi-Santosh-Kale" target="_blank">
          <GrGithub />
        </a>

        <a href="https://www.instagram.com/vairohi_20522/" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          {" "}
          &copy; Vaibhavi's Presonal Portfolio All rights Reversed @2023.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
