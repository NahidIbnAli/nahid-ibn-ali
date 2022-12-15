import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fyy6k1q",
        "template_psupoek",
        form.current,
        "PZj4QnbeyxZPIvyaI"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Your message has been sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: faPhone,
      name: "Call Me",
      text: "+8801744741009",
      url: "tel:+8801744741009",
    },
    {
      icon: faLocationDot,
      name: "Location",
      text: "Chuadanga, Bangladesh",
    },
    {
      icon: faEnvelope,
      name: "Email",
      text: "nahidibnali7@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-16 px-6 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center">
          Get In Touch
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 mt-10 font-sans">
          <div className="flex flex-col w-full lg:w-auto gap-5">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card dark:border border-slate-700 bg-base-100 text-center p-6 gap-2"
              >
                <p>
                  <FontAwesomeIcon
                    icon={info.icon}
                    className="text-4xl text-primary"
                  ></FontAwesomeIcon>
                </p>
                <h3 className="text-2xl font-medium">{info.name}</h3>
                <a href={info.url} className="text-lg hover:text-primary">
                  {info.text}
                </a>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2">
            <div className="card dark:border border-slate-700 bg-base-100 p-6 sm:p-10">
              <p>
                I'd Love to hear from you. Whether you have a question or just
                want to say Hi, feel free to drop a message. I'll try my best to
                get back to you!
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="card-body font-sans p-0 pt-8 gap-y-6 sm:gap-y-10"
              >
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <button
                    type="submit"
                    className="btn btn-primary font-display"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
