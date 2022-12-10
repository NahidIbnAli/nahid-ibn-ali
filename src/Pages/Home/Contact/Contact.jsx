import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

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
          toast.success("Your message has been sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="hero py-10 bg-base-200">
      <div className="flex flex-col items-center p-7">
        <h2 className="text-4xl font-display font-bold pb-7">Get In Touch</h2>
        <div className="card flex-shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
          <p className="p-8 pb-0">
            I'd Love to hear from you. Whether you have a question or just want
            to say Hi, feel free to drop a message. I'll try my best to get back
            to you!
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="card-body font-sans gap-5"
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
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary font-display">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
