import React from "react";
import portrait from "../../../assets/dp.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const frontEndSkills = [
    "JavaScript (ES6)",
    " React.js",
    "Tailwind CSS",
    " React Bootstrap",
    " HTML5",
    " CSS3",
  ];

  const backEndSkills = ["Node.js", "Express.js", "MongoDB"];

  const tools = [
    "VS Code",
    "Git",
    "Chrome Dev Tool",
    "Npm & Yarn",
    "Firebase",
    "Netlify",
  ];

  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row gap-14">
        <img src={portrait} className="max-w-sm rounded-lg" />
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-semibold font-display">About Me</h1>
          <p className="py-6 font-sans">
            I am a MERN-Stack WEB Developer. I am working with React, Node.js
            and MongoDB. I also have experience in developing static websites
            using HTML5, CSS3 and JavaScript (ES6). I am a quick learner. I
            believe in hard work and efficiency. That's why I am always ready to
            accomplish any task by working hard. I always focus on learning new
            technology. My goal is to become A World-Class Professional Web
            Developer.
          </p>
          <p className="underline">
            Here are a few technologies I've been working with recently :
          </p>
          <h5 className="text-xl text-primary my-2">Front-end</h5>
          <ul className="flex gap-x-3 flex-wrap">
            {frontEndSkills.map((skill, index) => (
              <li key={index}>
                {" "}
                <FontAwesomeIcon
                  icon={faCircleDot}
                  width="8px"
                  className="text-primary"
                ></FontAwesomeIcon>{" "}
                {skill}
              </li>
            ))}
          </ul>
          <h5 className="text-xl text-primary my-2">Back-end</h5>
          <ul className="flex gap-x-3 flex-wrap">
            {backEndSkills.map((skill, index) => (
              <li key={index}>
                {" "}
                <FontAwesomeIcon
                  icon={faCircleDot}
                  width="8px"
                  className="text-primary"
                ></FontAwesomeIcon>{" "}
                {skill}
              </li>
            ))}
          </ul>
          <h5 className="text-xl text-primary my-2">Tools</h5>
          <ul className="flex gap-x-3 flex-wrap">
            {tools.map((tool, index) => (
              <li key={index}>
                {" "}
                <FontAwesomeIcon
                  icon={faCircleDot}
                  width="8px"
                  className="text-primary"
                ></FontAwesomeIcon>{" "}
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
