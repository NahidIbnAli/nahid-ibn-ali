import React from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChartLine,
  faCircleDot,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const ProjectDetails = () => {
  const projectDetails = useLoaderData();
  const {
    name,
    coverImage,
    images,
    description,
    features,
    technologies,
    liveSite,
    frontEndLink,
    backEndLink,
  } = projectDetails;
  return (
    <div className="bg-base-100 min-h-screen py-10 px-6 font-sans">
      <div className="container mx-auto">
        <div className="flex items-center gap-20 flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-3">{name}</h2>
            <p className="mb-4">{description}</p>
            <ul className="mb-4">
              {features.map((feature, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    width="8px"
                    className="text-primary mr-1"
                  ></FontAwesomeIcon>{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <ul className="mb-5">
              {technologies.map((technology, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    width="8px"
                    className="text-primary mr-1"
                  ></FontAwesomeIcon>{" "}
                  {technology}
                </li>
              ))}
            </ul>
            <div className="flex gap-5 flex-wrap">
              <a
                href={liveSite}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary font-display"
              >
                <FontAwesomeIcon
                  className="mr-1"
                  icon={faChartLine}
                ></FontAwesomeIcon>{" "}
                Live Site
              </a>
              <a
                href={frontEndLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary font-display"
              >
                <FontAwesomeIcon
                  className="mr-1"
                  icon={faGithub}
                ></FontAwesomeIcon>{" "}
                Front-end Code
              </a>
              <a
                href={backEndLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary font-display"
              >
                <FontAwesomeIcon
                  className="mr-1"
                  icon={faGithub}
                ></FontAwesomeIcon>{" "}
                Back-end Code
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <div>
                <img src={coverImage} alt="" className="rounded-lg" />
              </div>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
                {images.map((image, index) => (
                  <img key={index} src={image} alt="" className="rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
