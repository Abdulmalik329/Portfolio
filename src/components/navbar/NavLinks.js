import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTelegram } from "react-icons/fa"; // FaTwitter o'rniga FaTelegram
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      {/* Telegram */}
      <li onClick={handleNav}>
        <a
          href="https://t.me/abdu11malik"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <FaTelegram />
        </a>
      </li>

      {/* LinkedIn */}
      <li onClick={handleNav}>
        <a
          href="https://www.linkedin.com/in/abdulmalik-gairatov-5746903a0/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <FaLinkedin />
        </a>
      </li>

      {/* GitHub */}
      <li onClick={handleNav}>
        <a
          href="https://github.com/Abdulmalik329"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          <BsGithub />
        </a>
      </li>

      {/* Email */}
      <li onClick={handleNav}>
        <a
          href="mailto:abdulmalikgairatov@gmail.com"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
