import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdContactMail } from "react-icons/md";

const GetInTouch = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      color: "#0072b1",
      link: "https://www.linkedin.com/in/jyoti-sinha20",
      label: "LinkedIn",
    },
    {
      icon: <BsGithub />,
      color: "#171515",
      link: "https://github.com/jyotisinhaa",
      label: "GitHub",
    },
    {
      icon: <MdEmail />,
      color: "#D14836",
      link: "mailto:jyotisinhacse21@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 flex justify-center items-center gap-3">
            <MdContactMail size={40} className="text-blue-600" />
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl w-full text-center mx-auto">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            I&apos;m always interested in hearing about new projects and
            opportunities. Whether you have a question, want to collaborate, or
            just want to say hello—feel free to reach out!
          </p>

          <div className="flex justify-center gap-8 md:gap-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={
                  social.label !== "Email" ? "noopener noreferrer" : undefined
                }
                className="transform transition hover:scale-125 duration-300"
                aria-label={social.label}
              >
                <div
                  className="text-5xl md:text-6xl flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full transition-all duration-300 hover:shadow-lg bg-gray-100 dark:bg-gray-800"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
