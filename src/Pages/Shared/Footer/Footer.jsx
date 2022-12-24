import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "react-scroll-to-top";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer footer-center py-24 px-6 dark:bg-gray-900 text-base-content font-sans text-base gap-3 dark:border-t border-gray-700">
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
      <ScrollToTop
        smooth
        top="100"
        component={
          <FontAwesomeIcon icon={faAngleUp} color="#ffffff"></FontAwesomeIcon>
        }
        style={{
          borderRadius: "50%",
          backgroundColor: "#31394b",
          boxShadow: "none",
        }}
        color="#6419E6"
      />
    </footer>
  );
};

export default Footer;
