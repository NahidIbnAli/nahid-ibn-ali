import React from "react";
import image from "../../../assets/Developer activity.svg";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100 px-2">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-sm" alt="" />
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold font-display leading-tight">
            Hi, I'm <br></br> Nahid Ibn Ali
          </h1>
          <p className="py-6">
            A self-motivated and enthusiastic web developer. To gain confidence
            and fame using my potential in the field of web development and
            express my innovative creative skills for self and company growth. I
            always like to learn new things and have experience with new stuff.
          </p>
          <a href="">
            <button className="btn btn-primary font-sans">
              <DocumentArrowDownIcon className="w-5 mr-1"></DocumentArrowDownIcon>{" "}
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
