import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-100 text-base-content font-sans text-base gap-3">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/NahidIbnAli"
            className="hover:text-primary"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/nahidibnali"
            className="hover:text-primary"
          >
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
          </a>
          <a
            href="https://www.facebook.com/NahidIbnAli"
            className="hover:text-primary"
          >
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div>
        <p>
          Developed by{" "}
          <a href="https://www.facebook.com/NahidIbnAli">Nahid Ibn Ali</a>
        </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
