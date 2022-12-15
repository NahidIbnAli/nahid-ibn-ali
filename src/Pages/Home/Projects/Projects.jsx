import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      name: "eBay Cars - Used car buying and selling",
      image: "https://i.ibb.co/k9zn440/e-Bay-Cars.png",
      link: "ebay-cars",
      description:
        "A full-stack single-page used car buying and selling web app where people can buy and sell their car.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe.js",
        "Firebase Authentication",
      ],
      liveSite: "https://ebay-cars.web.app/",
      frontEndLink: "https://github.com/NahidIbnAli/ebay-cars",
    },
    {
      name: "Get Snappy - Photography Services",
      image: "https://i.ibb.co/mFq0qxJ/get-snappy.png",
      link: "get-snappy",
      description:
        " A full-stack single-page photography service review web app where user can give review and monitor their review.",
      technologies: [
        "React.js",
        "React Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Authentication",
      ],
      liveSite: "https://get-snappy.web.app/",
      frontEndLink: "https://github.com/NahidIbnAli/get-snappy",
    },
    {
      name: "Coding Ninja - Ed-Tech",
      link: "coding-ninja",
      image: "https://i.ibb.co/q722SqQ/Coding-Ninja.png",
      description:
        "A full-stack single-page Ed-Tech web app where users can buy premium access and more.",
      technologies: [
        "React.js",
        "React Bootstrap",
        "Node.js",
        "Express.js",
        "Firebase Authentication",
      ],
      liveSite: "https://coding-ninja-ffac7.web.app/",
      frontEndLink: "https://github.com/NahidIbnAli/coding-ninja",
    },
  ];

  return (
    <section id="projects" className="hero bg-base-100 py-10 px-2">
      <div className="hero-content block">
        <h2 className="text-4xl font-display font-semibold text-center pb-10">
          Some of My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card dark:border border-gray-700 bg-base-100 shadow-lg font-sans p-6"
            >
              <figure className="h-48">
                <img src={project.image} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-start p-0">
                <h2 className="card-title font-semibold pt-5">
                  {project.name}
                </h2>
                <p>{project.description}</p>
                <ul className="flex flex-wrap gap-3 my-4">
                  {project.technologies.map((technology, index) => (
                    <li
                      key={index}
                      className="border border-primary rounded-md px-2"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="card-actions">
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary font-display"
                  >
                    <FontAwesomeIcon
                      className="mr-1"
                      icon={faChartLine}
                    ></FontAwesomeIcon>{" "}
                    Live Link
                  </a>
                  <a
                    href={project.frontEndLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary font-display"
                  >
                    <FontAwesomeIcon
                      className="mr-1"
                      icon={faGithub}
                    ></FontAwesomeIcon>{" "}
                    Github
                  </a>
                  <Link
                    to={`/projects/${project.link}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
