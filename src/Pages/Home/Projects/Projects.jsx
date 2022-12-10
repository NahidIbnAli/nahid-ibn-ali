import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projects = [
    {
      name: "eBay Cars - Used car buying and selling",
      image: "https://i.ibb.co/HV6xP62/e-Bay-Cars.png",
      description:
        "A full-stack single-page used car buying and selling web app where people can buy and sell their car. Login system with firebase and private routes. Dashboard for users and admins where admins can do CRUD operations and users can book car and monitor their booking list.",
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
      image: "https://i.ibb.co/h7gJvsh/Get-snappy.png",
      description:
        " A full-stack single-page photography service review web app. Login system with firebase and private routes. Users can give review and see their review records on the review page.",
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
      image: "https://i.ibb.co/vZwwJS3/Coding-Ninja.png",
      description:
        "A full-stack single-page Ed-Tech web app where users can get premium access. Login system with firebase and private routes.",
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
    <div className="hero bg-base-100 py-10 px-2">
      <div className="hero-content block">
        <h2 className="text-4xl font-display font-semibold text-center pb-10">
          Some of My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl font-sans">
              <figure className="px-7 pt-7">
                <img src={project.image} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-start">
                <h2 className="card-title font-semibold">{project.name}</h2>
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
                    className="btn btn-primary font-display"
                  >
                    <FontAwesomeIcon
                      className="mr-1"
                      icon={faGithub}
                    ></FontAwesomeIcon>{" "}
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
