import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className="nav-links">
      <li onClick={handleNav}>
        <Link
          to="//twitter.com/_pappy_jay_"
          target="_blank"
          className="nav-link"
        >
          <FaTwitter />
        </Link>
      </li>
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
      <li onClick={handleNav}>
        <Link
          to="//github.com/Abdulmalik329"
          target="_blank"
          className="nav-link"
        >
          <BsGithub />
        </Link>
      </li>
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
