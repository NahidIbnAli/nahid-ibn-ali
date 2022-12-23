import React from "react";
import image from "../../../assets/Developer activity.svg";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import Typewriter from "typewriter-effect";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero dark:bg-[#0B1120]/80 bg-[url('/public/hero@75.b2469a49.jpg')] dark:bg-[url('/public/hero-dark@90.dba36cdf.jpg')]">
      <div className="bg-[url('/public/pattern.png')] px-6 w-full h-full">
        <div className="heroSectionHeight container xl:w-2/3 flex items-center justify-center mx-auto flex-col lg:flex-row-reverse gap-5 lg:gap-20 py-10">
          <div className="w-4/5 md:w-3/4 lg:w-1/2 xl:w-2/5">
            <img src={image} className="w-full" alt="" />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight">
              <p>Hi, I'm</p>
              <p className="lg:mt-3">Nahid Ibn Ali</p>
            </h1>
            <h3 className="text-2xl lg:text-3xl text-primary dark:text-sky-400 font-semibold font-display py-3">
              <Typewriter
                options={{
                  strings: [
                    "JavaScript Developer",
                    "MERN-Stack Developer",
                    "React Developer",
                    "Front-end Developer",
                    "Programmer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>

            <p className="mb-6">
              A self-motivated and enthusiastic web developer. To gain
              confidence and fame using my potential in the field of web
              development and express my innovative creative skills for self and
              company growth. I always like to learn new things and have
              experience with new stuff.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1tLae5b3nEY0V0Svkyr6rmEXNbHj6QMwA"
              download
            >
              <button className="btn btn-primary font-sans">
                <DocumentArrowDownIcon className="w-5 mr-1"></DocumentArrowDownIcon>{" "}
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
